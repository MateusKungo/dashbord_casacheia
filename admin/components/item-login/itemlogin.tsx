"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function Login() {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                    Insira seu número abaixo para acessar sua conta.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Telefone</Label>
                            <Input
                                id="email"
                                type="tel"
                                placeholder="999999999"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Senha</Label>
                                <a
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    Esqueceu sua senha?
                                </a>
                            </div>
                            <Input id="password" type="password" required placeholder="*******" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full cursor-pointer bg-[#ED5379] hover:bg-[#f11f54]">
                    Entrar
                </Button>
                <Link href="/auth/singup" className="w-full cursor-pointer">
                    Criar uma conta
                </Link>
            </CardFooter>
        </Card>
    )
}
