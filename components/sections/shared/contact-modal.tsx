import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { SatelliteIcon } from "lucide-react";
import SignalWaves from "@/components/animations/signal-waves";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner"
import AnimatedTitle from "@/components/ui/animated-title";
import AnimatedBadge from "@/components/ui/animated-badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AnimatedText from "@/components/ui/animated-text";

const formSchema = z.object({
  name: z.string({ message: 'El nombre es requerido' }).min(1, { message: 'El nombre es requerido' }),
  email: z.email({ message: 'Debe ser un E-mail valido' }),
  phone: z.string({ message: 'El teléfono es un campo requerido' }),
  description: z.string({ message: 'El mensaje es un campo requerido' }).min(1, { message: 'El mensaje es un campo requerido' }),
})

export default function ContactModal() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      description: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    fetch('https://formspree.io/f/xpwopzzz', {
      method: 'post',
      body: JSON.stringify(values),
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setSent(true)
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            alert(data["errors"].map(error => error["message"]).join(", "))
          } else {
            alert("Oops! There was a problem submitting your form")
          }
        })
      }

      setLoading(false)
    });
  }

  return (
    <Dialog onOpenChange={() => {
      setTimeout(() => {
        setSent(false)
      }, 500)
    }}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="text-sm"
          variant="ghost"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, repeatDelay: 4, duration: .5, ease: "easeInOut"}}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <SatelliteIcon
              className="opacity-60 mr-1"
              size={16}
              aria-hidden={true}
            />
            <span className="hidden md:inline">Contáctanos</span>
          </motion.span>
        </Button>
      </DialogTrigger>
      <DialogContent className={`sm:max-w-[425px] ${sent ? 'bg-yellow-400' : ''}`}>
        <DialogTitle>
          {!sent && (
            <div>
              <AnimatedBadge>
                Contáctanos
              </AnimatedBadge>
              <AnimatedTitle type="h4">
                Contáctanos
              </AnimatedTitle>
            </div>
          )}
        </DialogTitle>
        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 100, x: 0, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Identia Studio" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="hola@identiastudio.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="9999999999" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Hola! me gustaria solicitar una cotización..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSent(false)}
                    className="cursor-pointer bg-yellow-400 text-black rounded-md py-2 px-4 font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50"
                    type="submit"
                    disabled={loading}
                  >
                    {loading && (
                      <Spinner />
                    )}
                    Enviar otro
                  </motion.button>
                </form>
              </Form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              className="p-6 flex flex-col items-center justify-center space-y-4"
              initial={{ opacity: 0, y: 100, x: 0, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <SignalWaves />
              <AnimatedTitle type="h4" className="text-black text-center">
                Mensaje recibido
              </AnimatedTitle>
              <AnimatedText className="text-black text-center">
                Gracias por contactarte con nosotros.  
                Te responderemos pronto 🚀  
              </AnimatedText>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
