import { useEffect, useState } from 'react'
import MenuLateral from '../../components/Menu/MenuLateral'
import Visita from '../../components/Visitas/Visita'

function VisitasSemana() {
  const [dias, setDias] = useState<string[]>([])

  useEffect(() => {
    const diasDaSemana = [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
    ]

    const gerarDiasUteisDaSemanaAtual = () => {
      const hoje = new Date()
      const diaSemanaAtual = hoje.getDay()

      // Calcula quantos dias "voltar" para chegar na segunda-feira da semana atual
      const diferencaParaSegunda = diaSemanaAtual === 0 ? 6 : diaSemanaAtual - 1
      const segundaFeira = new Date(hoje)
      segundaFeira.setDate(hoje.getDate() - diferencaParaSegunda) // Define a segunda-feira

      const diasUteis: string[] = []

      // Adiciona os dias de Segunda a Sexta
      for (let i = 0; i < 5; i++) {
        const novaData = new Date(segundaFeira)
        novaData.setDate(segundaFeira.getDate() + i) // Incrementa os dias a partir de Segunda

        const diaSemana = novaData.getDay()
        const diaFormatado = diasDaSemana[diaSemana]
        const dataFormatada = novaData.toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })

        // Formatado
        diasUteis.push(`${diaFormatado} (${dataFormatada})`)
      }

      return diasUteis
    }

    setDias(gerarDiasUteisDaSemanaAtual())
  }, [])
  return (
    <>
      <MenuLateral />
      <div className="ml-64 my-8 flex flex-col gap-12">
        {dias.map((dia) => (
          <div className=" flex flex-col gap-4">
            <h3 className="pl-4 text-2xl font-bold">{dia}</h3>
            <Visita />
            <Visita />
            <Visita />
          </div>
        ))}
      </div>
    </>
  )
}

export default VisitasSemana
