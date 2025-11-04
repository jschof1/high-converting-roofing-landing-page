import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { 
  MessageCircle, 
  X, 
  Send, 
  Phone,
  ChevronDown 
} from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

type Message = {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
  quickReplies?: string[];
};

type ChatState = "greeting" | "service-selection" | "collecting-info" | "completed";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [chatState, setChatState] = useState<ChatState>("greeting");
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
    service: ""
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(
        "Hi there! 👋 I'm here to help with your roofing needs. What brings you here today?",
        ["Roof Repair", "Roof Replacement", "Inspection", "Emergency Help"]
      );
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  const addBotMessage = (text: string, quickReplies?: string[]) => {
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: "bot",
        timestamp: new Date(),
        quickReplies
      };
      setMessages(prev => [...prev, newMessage]);
    }, 500);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleQuickReply = (reply: string) => {
    addUserMessage(reply);
    handleResponse(reply);
  };

  const handleResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();

    if (chatState === "greeting") {
      // Service selection
      if (lowerMessage.includes("repair")) {
        setUserInfo(prev => ({ ...prev, service: "Roof Repair" }));
        addBotMessage("Great! I can help you with roof repairs. Can you tell me your name?");
        setChatState("collecting-info");
        setCurrentQuestion(0);
      } else if (lowerMessage.includes("replacement")) {
        setUserInfo(prev => ({ ...prev, service: "Roof Replacement" }));
        addBotMessage("Excellent! Let's discuss your roof replacement. What's your name?");
        setChatState("collecting-info");
        setCurrentQuestion(0);
      } else if (lowerMessage.includes("inspection")) {
        setUserInfo(prev => ({ ...prev, service: "Roof Inspection" }));
        addBotMessage("Perfect! I'll help arrange a free inspection. May I have your name?");
        setChatState("collecting-info");
        setCurrentQuestion(0);
      } else if (lowerMessage.includes("emergency")) {
        addBotMessage(
          "This is an emergency situation. Please call our 24/7 hotline immediately at 020 7123 4567 for immediate assistance. We typically respond within 60 minutes."
        );
        setTimeout(() => {
          addBotMessage("Would you also like to leave your contact details for follow-up?", ["Yes, please", "No, thanks"]);
        }, 2000);
      } else {
        addBotMessage(
          "I can help you with roof repairs, replacements, inspections, or emergency services. Which one interests you?",
          ["Roof Repair", "Roof Replacement", "Inspection", "Emergency Help"]
        );
      }
    } else if (chatState === "collecting-info") {
      if (currentQuestion === 0) {
        // Collected name
        setUserInfo(prev => ({ ...prev, name: userMessage }));
        addBotMessage(`Nice to meet you, ${userMessage}! What's the best phone number to reach you?`);
        setCurrentQuestion(1);
      } else if (currentQuestion === 1) {
        // Collected phone
        setUserInfo(prev => ({ ...prev, phone: userMessage }));
        addBotMessage("And your email address?");
        setCurrentQuestion(2);
      } else if (currentQuestion === 2) {
        // Collected email
        setUserInfo(prev => ({ ...prev, email: userMessage }));
        setChatState("completed");
        addBotMessage(
          `Perfect! Thank you for providing your details. We'll contact you within 2 hours during business hours to schedule your ${userInfo.service.toLowerCase() || "service"}. Is there anything else you'd like to know?`,
          ["Pricing information", "Service timeline", "Speak to someone now"]
        );
      }
    } else if (chatState === "completed") {
      if (lowerMessage.includes("pricing") || lowerMessage.includes("cost")) {
        addBotMessage(
          "Our pricing varies based on the scope of work. For roof repairs, most jobs range from £300-£1,500. Full replacements start from £5,000. We offer free inspections and detailed quotes. Would you like us to prioritize pricing in your callback?",
          ["Yes, please", "No, general info is fine"]
        );
      } else if (lowerMessage.includes("timeline") || lowerMessage.includes("how long")) {
        addBotMessage(
          "Most repairs can be completed within 1-3 days. Full replacements typically take 3-7 days depending on size. Emergency repairs can often be done within 24 hours. We'll provide an exact timeline during your free inspection.",
          ["Schedule inspection", "Ask another question"]
        );
      } else if (lowerMessage.includes("speak") || lowerMessage.includes("call")) {
        addBotMessage(
          "You can reach us at 020 7123 4567. Our team is available Monday-Friday 7am-7pm, Saturday 8am-5pm, and Sunday 9am-4pm. For emergencies, we're available 24/7.",
          ["Call now", "Continue chatting"]
        );
      } else {
        addBotMessage(
          "Is there anything else I can help you with?",
          ["Pricing information", "Service timeline", "Warranty details", "No, I'm good"]
        );
      }
    }
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      addUserMessage(inputValue);
      handleResponse(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-blue-900 hover:bg-blue-800 z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[380px] h-[600px] shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-blue-900 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div>Finsbury Roofing</div>
                <div className="text-xs text-blue-200">Online • Typically replies instantly</div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages Area */}
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id}>
                  <div
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.sender === "user"
                          ? "bg-blue-900 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p>{message.text}</p>
                    </div>
                  </div>

                  {/* Quick Replies */}
                  {message.quickReplies && message.sender === "bot" && (
                    <div className="flex flex-wrap gap-2 mt-2 ml-2">
                      {message.quickReplies.map((reply, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuickReply(reply)}
                          className="text-xs"
                        >
                          {reply}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="bg-blue-900 hover:bg-blue-800"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Available 24/7 • We typically respond instantly
            </p>
          </div>
        </Card>
      )}
    </>
  );
}
