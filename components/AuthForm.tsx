"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Image from "next/image"
 

const formSchema = z.object({
  username: z.string().min(2).max(50),
})



type FormType = "sign-in" | "sign-up"
const AuthForm = ({type} : { type : FormType}) => {
    const [isLoading, setIsLoading] = useState(false);
    
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
 
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
   return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
        <h1 className="form-title">
            {type === "sign-in" ? "Sign In" : "Sign Up" }
        </h1>
        {type === "sign-up" &&
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
                <div className="shad-form-item">
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter your full name" className="shad-input" {...field} />
                    </FormControl>
                </div>
              <FormMessage className="shad-form-message" />
            </FormItem>
          )}
        />}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
                <div className="shad-form-item">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter your email" className="shad-input" {...field} />
                    </FormControl>
                </div>
              <FormMessage className="shad-form-message" />
            </FormItem>
          )}
        />
        <Button type="submit" className="form-submit-button" disabled={isLoading}>
            {type === "sign-in" ? "Sign in" : "Sign Up"}
            {isLoading && (
                <Image
                src="/assets/icons/loader.svg"
                alt="loader"
                width={24}
                height={24}
                className="animate-spint ml-2"
                 />
            )}
        </Button>
      </form>
    </Form>
    {/* OTP VERIFICATION */}
    </>
  );
};

export default AuthForm;
