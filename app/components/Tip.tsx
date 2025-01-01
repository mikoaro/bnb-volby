"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const numberSchema = z.object({
  number: z.number().min(0).max(100),
});

const stringSchema = z.object({
  text: z.string().min(3).max(50),
});

type NumberFormValues = z.infer<typeof numberSchema>;
type StringFormValues = z.infer<typeof stringSchema>;

const Tip = () => {
  const [numberResult, setNumberResult] = useState<number | null>(null);
  const [stringResult, setStringResult] = useState<string | null>(null);
  const [currentNumber, setCurrentNumber] = useState<string>("0");
  const [currentString, setCurrentString] = useState<string>("");

  const numberForm = useForm<NumberFormValues>({
    resolver: zodResolver(numberSchema),
    defaultValues: {
      number: 0,
    },
  });

  const stringForm = useForm<StringFormValues>({
    resolver: zodResolver(stringSchema),
    defaultValues: {
      text: "",
    },
  });

  function onNumberSubmit(values: NumberFormValues) {
    setNumberResult(values.number);
    setCurrentNumber("0");
    numberForm.reset({ number: 0 });
  }

  function onStringSubmit(values: StringFormValues) {
    setStringResult(values.text);
    setCurrentString("");
    stringForm.reset();
  }

  return (
    <div className="flex mx-auto justify-center">       
          <div className="bg-white rounded-lg shadow-none h-96 w-96">
                    <Form {...numberForm}>
                        <form
                            onSubmit={numberForm.handleSubmit(onNumberSubmit)}
                            className="space-y-4"
                        >
                            <FormField
                            control={numberForm.control}
                            name="number"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="text-md text-blue-600 gap-4">Enter tip amount</FormLabel>
                                  <FormControl>
                                      <Input
                                      type="number"
                                      {...field}
                                      value={currentNumber}
                                      onChange={(e) => {
                                          const value = e.target.value;
                                          setCurrentNumber(value);
                                          field.onChange(value === "" ? 0 : Number(value));
                                      }}
                                      onFocus={() => {
                                          setCurrentNumber("");
                                      }}
                                      onBlur={() => {
                                          if (currentNumber === "") {
                                          setCurrentNumber("0");
                                          field.onChange(0);
                                          }
                                      }}
                                      />
                                  </FormControl>
                                <FormLabel className="text-md text-blue-600">Enter your comment</FormLabel>
                                <FormControl>
                                    <Textarea />
                                </FormControl>
                                <div className="flex justify-between">
                                  <div className="text-center text-blue-600">
                                  <p>Your Balance</p>
                                  <p>0</p>
                                  </div>
                                  <div className="text-center text-blue-600">
                                  <p>Tipjar Balance</p>
                                  <p>0</p>
                                  </div>
                                  
                                </div>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <Button type="submit" className="text-white bg-blue-500 flex w-full">
                            Send Tip
                            </Button>
                        </form>
                    </Form>
            <p className="mt-2 text-blue-600 text-center">
              {/* Current number: {currentNumber} */}
              Status Message
            </p>
            {numberResult !== null && (
              <p className="mt-4 text-gray-600 text-center">
                Tip Sent: $ {numberResult}
              </p>
            )}
          </div>
    </div>
  );
};

export default Tip;