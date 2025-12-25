import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RecuperarSenha() {
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
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="+244 9XX XXX XXX"
                            required
                            className="placeholder:text-zinc-400"
                        />
                        <p className="text-sm text-zinc-500">
                            Digite seu número com o código do país (+244). Ex.: +244 923 456 789
                        </p>
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
