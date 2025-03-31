"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    {
      text: "Hi there! I'm Pranav's AI assistant. How can I help you learn more about his work and experience?",
      isUser: false,
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { text: input, isUser: true }])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("experience") || input.toLowerCase().includes("work")) {
        response =
          "Pranav has experience as a Machine Learning Researcher, Software Developer, Teaching Assistant, and more. His most recent role was as a Software Intern at Tech Mahindra."
      } else if (input.toLowerCase().includes("project") || input.toLowerCase().includes("portfolio")) {
        response =
          "Pranav has worked on several projects including Job Description Extraction, Sports Win Probability Predictor, and Movie Recommendation Systems. You can check them out in the Projects section!"
      } else if (input.toLowerCase().includes("education") || input.toLowerCase().includes("study")) {
        response =
          "Pranav is studying Artificial Intelligence at Illinois Institute of Technology with an expected graduation in May 2026."
      } else if (
        input.toLowerCase().includes("contact") ||
        input.toLowerCase().includes("email") ||
        input.toLowerCase().includes("reach")
      ) {
        response =
          "You can contact Pranav via email at pranav010105@gmail.com or connect with him on LinkedIn at linkedin.com/in/pranavkuchibhotla."
      } else if (input.toLowerCase().includes("skill") || input.toLowerCase().includes("technology")) {
        response =
          "Pranav's key skills include Machine Learning, Data Processing and Analysis, Python, Java, and various AI technologies."
      } else {
        response =
          "Thanks for your message! Pranav would be happy to discuss this further. Feel free to reach out directly via the contact information in the Contact section."
      }

      setMessages((prev) => [...prev, { text: response, isUser: false }])
    }, 1000)
  }

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-white"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 z-50"
          >
            <Card className="shadow-xl border-none overflow-hidden">
              <CardHeader className="bg-primary text-white p-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-medium">AI Assistant</CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 text-white hover:bg-primary-foreground/20"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-80 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.isUser ? "bg-primary text-white rounded-tr-none" : "bg-muted rounded-tl-none"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-3 border-t">
                <div className="flex w-full items-center space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    className="flex-1"
                  />
                  <Button size="icon" onClick={handleSend}>
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

