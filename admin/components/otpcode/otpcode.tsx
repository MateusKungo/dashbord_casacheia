"use client"
import { Button } from "@/components/ui/button"
import * as React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp"

export function OtpCode() {
     const [value, setValue] = React.useState("")
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Recupere sua senha</CardTitle>
                <CardDescription>
                    Informe seu número de telefone angolano abaixo para receber um código e redefinir sua senha.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <div className="space-y-2">
                            <InputOTP
                                maxLength={6}
                                value={value}
                                onChange={(value) => setValue(value)}
                            >
                                <InputOTPGroup>
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>
                            <div className="text-center text-sm">
                                {value === "" ? (
                                    <>Enter your one-time password.</>
                                ) : (
                                    <>You entered: {value}</>
                                )}
                            </div>
                        </div>
                    </div>
                </form>
            </CardContent>

            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full bg-[#ED5379] hover:bg-[#f11f54]">
                    Enviar código
                </Button>
                <p className="text-xs text-zinc-500 text-center">
                    Você receberá um código via SMS para redefinir sua senha.
                </p>
            </CardFooter>
        </Card>

    )
}
