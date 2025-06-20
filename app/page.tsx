"use client"

import { ExternalLink, Phone, Calculator, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Добро пожаловать</h1>
          <p className="text-slate-600">Выберите нужный раздел</p>
        </div>

        <div className="space-y-4">
          {/* Портфолио */}
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-0">
              <Button
                variant="ghost"
                className="w-full h-16 justify-start text-left p-6 rounded-lg"
                onClick={() => window.open("https://dokerphoto.ru", "_blank")}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Портфолио</div>
                    <div className="text-sm text-slate-500">Мои работы и услуги</div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400 ml-auto" />
                </div>
              </Button>
            </CardContent>
          </Card>

          {/* WhatsApp */}
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-0">
              <Button
                variant="ghost"
                className="w-full h-16 justify-start text-left p-6 rounded-lg"
                onClick={() => window.open("https://wa.me/79935844456", "_blank")}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Связаться в WhatsApp</div>
                    <div className="text-sm text-slate-500">+7 993 844 44 56</div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400 ml-auto" />
                </div>
              </Button>
            </CardContent>
          </Card>

          {/* Калькулятор */}
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-0">
              <Button
                variant="ghost"
                className="w-full h-16 justify-start text-left p-6 rounded-lg"
                onClick={() => window.open("https://dokerprice.vercel.app/", "_blank")}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Calculator className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Калькулятор стоимости</div>
                    <div className="text-sm text-slate-500">Рассчитать цену фотосессии</div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400 ml-auto" />
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-slate-400">© 2024 Все права защищены</p>
        </div>
      </div>
    </div>
  )
}
