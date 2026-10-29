'use client'

import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, Trash2, X } from 'lucide-react'

type ChatMessage = {
  role: 'assistant' | 'visitor'
  text: string
}

const welcomeMessage: ChatMessage = {
  role: 'assistant',
  text: "Hi! I'm Whyte's portfolio assistant. Ask me about his projects, experience, skills, or how to get in touch.",
}

const suggestedQuestions = [
  'What does Whyte do?',
  'Tell me about his projects',
  'How can I get in touch?',
]

function getAssistantReply(question: string) {
  const text = question.toLowerCase()

  if (/\b(hi|hello|hey|good morning|good afternoon)\b/.test(text)) {
    return "Hello! I can help you explore Whyte's work, skills, experience, and contact details. What would you like to know?"
  }

  if (/\b(contact|email|reach|hire|phone|whatsapp|touch)\b/.test(text) || text.includes('get in touch')) {
    return 'You can reach Whyte at sackeywhyte@gmail.com. He is open to discussing new projects and opportunities.'
  }

  if (/\b(project|built|portfolio|apps?|eclinic|ezeskof|virexa|em[o]? brukina|university course|arduino)\b/.test(text)) {
    return 'Featured work includes the Emo Brukina food app, EZESKOF business management app, Virexa security platform, a university course management system, eClinic, and an Arduino swimming safety monitor. The Projects section has the full list.'
  }

  if (/\b(experience|career|work history|worked|job|manager|instructor)\b/.test(text)) {
    return 'Whyte has worked as an IT Manager at JCL Royal Company, a STEM Instructor at Bountiful Technologies, and a Software Development Intern at Soronko Academy. He has also led an Arduino-based swimming safety project.'
  }

  if (/\b(education|degree|study|studied|university|school|certification|certified)\b/.test(text)) {
    return 'Whyte studied Computer Science at Accra Institute of Technology and Project Management at Brigham Young University. His listed certifications include ISC2-CISSP, Google Data Analysis, and PMP.'
  }

  if (/\b(skill|technology|tech stack|programming|language|framework|cybersecurity|security|robotics|iot|database)\b/.test(text)) {
    return 'His skills include Python, JavaScript, Go, TypeScript, React, Node.js, Nest.js, Flask, PostgreSQL, MongoDB, cybersecurity, and robotics.'
  }

  if (/\b(who|about|introduce|does|speciali[sz]e|role)\b/.test(text)) {
    return 'Whyte is a technology professional working across full-stack software development, cybersecurity, IT management, and robotics. He focuses on practical technology solutions for real-world needs.'
  }

  return "I don't have that detail in the portfolio yet. Try asking about Whyte's projects, skills, experience, education, or contact information."
}

const chatHistoryKey = 'whyte-portfolio-chat-history-v1'
const chatMemoryPreferenceKey = 'whyte-portfolio-chat-memory-v1'
const maxSavedMessages = 40
export function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage])
  const endOfMessagesRef = useRef<HTMLDivElement>(null)

  const [rememberOnDevice, setRememberOnDevice] = useState(false)
  const [historyReady, setHistoryReady] = useState(false)
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isOpen])

  function sendMessage(question: string) {
    const trimmedQuestion = question.trim()
    if (!trimmedQuestion) return

    setMessages((currentMessages) => [
      ...currentMessages,
      { role: 'visitor', text: trimmedQuestion },
      { role: 'assistant', text: getAssistantReply(trimmedQuestion) },
    ])
    setInput('')
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {isOpen && (
        <section
          aria-label="Chat with Whyte's portfolio assistant"
          className="flex h-[min(36rem,calc(100dvh-7rem))] w-[min(25rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-lg border border-foreground/15 bg-background shadow-2xl shadow-primary/15"
        >
          <header className="flex items-center justify-between border-t-2 border-t-primary border-b border-foreground/10 bg-card px-4 py-3.5">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center border border-secondary/60 bg-secondary/10 text-secondary">
                <MessageCircle aria-hidden="true" size={19} />
              </span>
              <div>
                <h2 className="font-display text-sm font-bold text-foreground">Whyte's Assistant</h2>
                <p className="mt-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase text-accent">
                  <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                  Online
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="flex size-9 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-foreground/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary"
            >
              <X aria-hidden="true" size={19} />
            </button>
          </header>

          <div
            aria-live="polite"
            aria-relevant="additions"
            className="flex-1 space-y-5 overflow-y-auto bg-background px-4 py-5"
          >
            {messages.map((message, index) => (
              <article
                key={`${message.role}-${index}`}
                className={`flex flex-col gap-1.5 ${message.role === 'visitor' ? 'items-end' : 'items-start'}`}
              >
                <span className={`px-2 text-[10px] font-bold uppercase text-foreground/45 ${message.role === 'visitor' ? 'text-right' : ''}`}>
                  {message.role === 'visitor' ? 'VISITOR / MESSAGE' : `WHYTE / ${String(index + 1).padStart(2, '0')}`}
                </span>
                <p
                  className={`max-w-[92%] whitespace-pre-wrap border-y border-foreground/10 px-3 py-3 text-sm leading-relaxed ${
                    message.role === 'visitor'
                      ? 'border-r-2 border-r-secondary bg-secondary/5 text-foreground'
                      : 'border-l-2 border-l-primary bg-card/65 text-foreground'
                  }`}
                >
                  {message.text}
                </p>
              </article>
            ))}
            {messages.length === 1 && (
              <div className="space-y-2 pt-2">
                <p className="px-2 text-[10px] font-bold uppercase text-foreground/45">START A CONVERSATION</p>
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => sendMessage(question)}
                    className="flex min-h-11 w-full items-center gap-3 border border-foreground/10 bg-card/40 px-3 py-2 text-left text-xs text-foreground transition-colors hover:border-secondary/70 hover:bg-secondary/5 focus-visible:outline-2 focus-visible:outline-secondary"
                  >
                    <span className="font-mono text-secondary">0{index + 1}</span>
                    <span>{question}</span>
                  </button>
                ))}
              </div>
            )}
            <div ref={endOfMessagesRef} />
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-foreground/10 px-4 py-2.5">
            <label className="flex min-w-0 items-center gap-2 text-xs text-foreground/75">
              <input
                type="checkbox"
                checked={rememberOnDevice}
                onChange={(event) => setRememberOnDevice(event.target.checked)}
                className="size-4 accent-primary focus-visible:outline-2 focus-visible:outline-primary"
              />
              <span>
                Remember on this device
                <span className="block text-[10px] text-foreground/45">Private to this browser</span>
              </span>
            </label>
            {rememberOnDevice && messages.length > 1 && (
              <button
                type="button"
                onClick={() => setMessages([welcomeMessage])}
                aria-label="Clear saved chat history"
                title="Clear saved chat history"
                className="flex size-9 shrink-0 items-center justify-center text-foreground/55 transition-colors hover:text-secondary focus-visible:outline-2 focus-visible:outline-secondary"
              >
                <Trash2 aria-hidden="true" size={17} />
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-foreground/10 bg-card p-3">
            <label className="sr-only" htmlFor="portfolio-chat-input">Your message</label>
            <span className="pl-1 font-mono text-lg text-primary" aria-hidden="true">&gt;</span>
            <input
              id="portfolio-chat-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Write your message..."
              maxLength={500}
              className="h-11 min-w-0 flex-1 border-b border-foreground/20 bg-transparent px-1 text-sm text-foreground outline-none placeholder:text-foreground/45 focus:border-primary"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="flex size-11 shrink-0 items-center justify-center border border-primary/50 bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Send aria-hidden="true" size={18} />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close portfolio chat' : 'Open portfolio chat'}
        aria-expanded={isOpen}
        className="flex size-14 items-center justify-center rounded-full border border-primary/70 bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        {isOpen ? <X aria-hidden="true" size={23} /> : <MessageCircle aria-hidden="true" size={23} />}
      </button>
    </div>
  )
}