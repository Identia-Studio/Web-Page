import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Spinner } from "@/components/ui/spinner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string({ message: 'El nombre es requerido' }).min(1, { message: 'El nombre es requerido' }),
  email: z.email({ message: 'Debe ser un E-mail valido' }),
  description: z.string(),
})

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
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
        form.reset()
        setSent(true)
        setTimeout(() => {
          setSent(false)
        }, 3000)
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            alert(data["errors"].map((error: {message: string}) => error["message"]).join(", "))
          } else {
            alert("Oops! There was a problem submitting your form")
          }
        })
      }

      setLoading(false)
    });
  }

  return (
    <div className="mb-8 md:mb-0">
      <h3 className="text-4xl uppercase mb-4 font-bold">
        <span className="font-titles text-yellow-400">Contáctanos</span> para más información
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Nombre completo *" required {...field} className="border-0 " />
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
                <FormControl>
                  <Input placeholder="Correo electrónico *" type="email" required {...field} className="border-0 " />
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
                <FormControl>
                  <Textarea placeholder="Mensaje" {...field} className="border-0"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col-reverse md:flex-row md:justify-end gap-4">
            {sent && (
              <div className="flex-1 mt-4 md:mt-0">
                <p>Tu mensaje ha sido enviado correctamente.</p>
              </div>
            )}
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 md:mt-0 md:w-auto cursor-pointer bg-yellow-400 text-black rounded-full py-2 px-4 font-medium inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 font-titles"
                type="submit"
                disabled={loading}
              >
                {loading && (
                  <Spinner />
                )}
                Contáctanos
              </motion.button>
            </div>

          </div>
        </form>
      </Form>
    </div>
  );
}
