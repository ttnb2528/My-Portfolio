"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log(formData);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      setSubmitted(true);

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Liên hệ</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hãy liên hệ với tôi nếu bạn có câu hỏi hoặc muốn trò chuyện thêm về
            các dự án
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <Card className="overflow-hidden border-0 shadow-2xl shadow-purple-900/20 bg-slate-900/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-semibold mb-6 text-white">
                    Gửi tin nhắn
                  </h3>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6 text-center"
                    >
                      <div className="mx-auto w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mb-4">
                        <Sparkles className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-xl font-medium text-white mb-2">
                        Tin nhắn đã được gửi!
                      </h4>
                      <p className="text-gray-300">
                        Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-300 mb-1"
                          >
                            Họ tên
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nhập họ tên của bạn"
                            required
                            className="bg-slate-800 border-purple-500/30 focus:border-purple-500 focus:ring-purple-500 text-white placeholder:text-gray-500"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-300 mb-1"
                          >
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Nhập email của bạn"
                            required
                            className="bg-slate-800 border-purple-500/30 focus:border-purple-500 focus:ring-purple-500 text-white placeholder:text-gray-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-300 mb-1"
                        >
                          Tiêu đề
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Nhập tiêu đề"
                          required
                          className="bg-slate-800 border-purple-500/30 focus:border-purple-500 focus:ring-purple-500 text-white placeholder:text-gray-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-300 mb-1"
                        >
                          Nội dung
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Nhập nội dung tin nhắn"
                          rows={6}
                          required
                          className="bg-slate-800 border-purple-500/30 focus:border-purple-500 focus:ring-purple-500 text-white placeholder:text-gray-500"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 shadow-lg shadow-purple-700/20 py-6"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                            Đang gửi...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Send className="mr-2 h-5 w-5" />
                            Gửi tin nhắn
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <Card className="bg-slate-900/90 border-0 shadow-2xl shadow-purple-900/20 h-full">
              <CardContent className="p-0">
                <div className="p-6 sm:p-8 h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-6 text-white">
                    Thông tin liên hệ
                  </h3>

                  <div className="space-y-8 flex-grow">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-900/20">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-white mb-1">
                          Địa chỉ
                        </h4>
                        <p className="text-gray-300">
                          [Địa chỉ của bạn]
                          <br />
                          [Thành phố, Quốc gia]
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-900/20">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-white mb-1">
                          Email
                        </h4>
                        <a
                          href="mailto:your-email@example.com"
                          className="text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          your-email@example.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-900/20">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-white mb-1">
                          Điện thoại
                        </h4>
                        <a
                          href="tel:+1234567890"
                          className="text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          +123 456 7890
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-purple-900/30">
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-900/30 hover:border-purple-500/50"
                      >
                        <Mail className="mr-2 h-4 w-4" /> Email
                      </Button>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0">
                        <Phone className="mr-2 h-4 w-4" /> Gọi điện
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
