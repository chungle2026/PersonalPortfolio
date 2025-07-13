import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";
import { CmsContent } from "@shared/schema";
import { Plus, Edit, Trash2, LogOut } from "lucide-react";

const contentSchema = z.object({
  section: z.string().min(1, "Section is required"),
  title: z.string().optional(),
  content: z.string().optional(),
  imageUrl: z.string().optional(),
  isActive: z.boolean().default(true),
});

type ContentForm = z.infer<typeof contentSchema>;

export default function CmsPanel() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [editingContent, setEditingContent] = useState<CmsContent | null>(null);

  const sessionId = localStorage.getItem("cms_session_id");

  useEffect(() => {
    if (!sessionId) {
      navigate("/cms/login");
    }
  }, [sessionId, navigate]);

  const form = useForm<ContentForm>({
    resolver: zodResolver(contentSchema),
    defaultValues: {
      section: "",
      title: "",
      content: "",
      imageUrl: "",
      isActive: true,
    },
  });

  const { data: content, isLoading } = useQuery({
    queryKey: ["/api/cms/content"],
    queryFn: async () => {
      const response = await fetch("/api/cms/content", {
        headers: { "x-session-id": sessionId! },
      });
      if (!response.ok) {
        if (response.status === 401) {
          navigate("/cms/login");
          return [];
        }
        throw new Error("Failed to fetch content");
      }
      return response.json();
    },
    enabled: !!sessionId,
  });

  const createMutation = useMutation({
    mutationFn: async (data: ContentForm) => {
      const response = await fetch("/api/cms/content", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "x-session-id": sessionId! 
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to create content");
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Content created",
        description: "Content has been created successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/cms/content"] });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create content",
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: ContentForm }) => {
      const response = await fetch(`/api/cms/content/${id}`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          "x-session-id": sessionId! 
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to update content");
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Content updated",
        description: "Content has been updated successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/cms/content"] });
      setEditingContent(null);
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update content",
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/cms/content/${id}`, {
        method: "DELETE",
        headers: { "x-session-id": sessionId! },
      });
      if (!response.ok) {
        throw new Error("Failed to delete content");
      }
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Content deleted",
        description: "Content has been deleted successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/cms/content"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete content",
        variant: "destructive",
      });
    },
  });

  const handleLogout = async () => {
    try {
      await fetch("/api/cms/logout", {
        method: "POST",
        headers: { "x-session-id": sessionId! },
      });
    } catch (error) {
      // Ignore errors on logout
    }
    localStorage.removeItem("cms_session_id");
    navigate("/cms/login");
  };

  const handleEdit = (content: CmsContent) => {
    setEditingContent(content);
    form.reset({
      section: content.section,
      title: content.title || "",
      content: content.content || "",
      imageUrl: content.imageUrl || "",
      isActive: content.isActive,
    });
  };

  const handleCancelEdit = () => {
    setEditingContent(null);
    form.reset();
  };

  const onSubmit = (data: ContentForm) => {
    if (editingContent) {
      updateMutation.mutate({ id: editingContent.id, data });
    } else {
      createMutation.mutate(data);
    }
  };

  if (!sessionId) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-display font-bold">Content Management System</h1>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Content Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                {editingContent ? "Edit Content" : "Create New Content"}
              </CardTitle>
              <CardDescription>
                {editingContent
                  ? "Update existing content section"
                  : "Add content to different sections of your website"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="section"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Section</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a section" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="hero">Hero Section</SelectItem>
                            <SelectItem value="about">About Section</SelectItem>
                            <SelectItem value="bio">Biography</SelectItem>
                            <SelectItem value="media">Media Section</SelectItem>
                            <SelectItem value="gallery">Gallery</SelectItem>
                            <SelectItem value="contact">Contact Info</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter content"
                            rows={6}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image URL (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter image URL" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      disabled={
                        createMutation.isPending || updateMutation.isPending
                      }
                    >
                      {editingContent ? "Update Content" : "Create Content"}
                    </Button>
                    {editingContent && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Content List */}
          <Card>
            <CardHeader>
              <CardTitle>Existing Content</CardTitle>
              <CardDescription>
                Manage your website content sections
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div>Loading content...</div>
              ) : content && content.length > 0 ? (
                <div className="space-y-4">
                  {content.map((item: CmsContent) => (
                    <div
                      key={item.id}
                      className="p-4 border rounded-lg bg-white"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">
                            {item.section.charAt(0).toUpperCase() +
                              item.section.slice(1)}
                          </h3>
                          {item.title && (
                            <p className="text-sm text-gray-600 mt-1">
                              {item.title}
                            </p>
                          )}
                          {item.content && (
                            <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                              {item.content}
                            </p>
                          )}
                          {item.imageUrl && (
                            <p className="text-xs text-blue-600 mt-2">
                              Image: {item.imageUrl}
                            </p>
                          )}
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(item)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => deleteMutation.mutate(item.id)}
                            disabled={deleteMutation.isPending}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-gray-500 text-center py-8">
                  No content available. Create your first content section!
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}