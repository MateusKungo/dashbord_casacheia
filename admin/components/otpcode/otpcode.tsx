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
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp"

export function OtpCode() {
    const [value, setValue] = React.useState("")
    return (
        <Card className="w-full max-w-sm ">
            <form >
                <CardHeader className="text-center mb-2">
                    <CardTitle>Verificação de segurança</CardTitle>
                    <CardDescription className="mb-5 text-gray-500">
                        Digite o código recebido para continuar a recuperação da senha.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col items-center gap-4 mb-4">
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
                        <div className="text-center text-sm text-zinc-600">
                            {value === "" ? (
                                <>Digite o código de 6 dígitos que recebeu por SMS.</>
                            ) : (
                                <>Código digitado: <span className="font-medium">{value}</span></>
                            )}
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full bg-[#ED5379] hover:bg-[#f11f54]">
                        Confirmar código
                    </Button>
                    <p className="text-xs text-zinc-500 text-center">
                        Não partilhe este código com ninguém. Ele é válido por alguns minutos.
                    </p>
                </CardFooter>
            </form>
        </Card>

    )
}
