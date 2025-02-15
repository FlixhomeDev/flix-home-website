import { AppointmentCard } from '@/components/AppointmentCard'

const appointments = [
  {
    id: '1',
    user: {
      name: 'João Silva',
      location: 'São Paulo, BR',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    createdAt: '2025-02-15',
    appointment: 'Consulta de rotina com Dr. Carlos.',
    rating: 4,
  },
  {
    id: '2',
    user: {
      name: 'Maria Oliveira',
      location: 'Rio de Janeiro, BR',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    createdAt: '2025-02-14',
    appointment: 'Exame de sangue e check-up geral.',
    rating: 5,
  },
  {
    id: '3',
    user: {
      name: 'Pedro Santos',
      location: 'Curitiba, BR',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    createdAt: '2025-02-13',
    appointment: 'Consulta ortopédica para avaliação do joelho.',
    rating: 3,
  },
]

export function Appointments() {
  return (
    <div className="max-w-[1256px] w-full mx-auto mt-8 lg:mt-20 px-4 md:px-8 overflow-hidden">
      <h2 className="text-lg md:text-2xl font-bold text-center">
        Depoimentos de quem experimentou!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {appointments.map(appoint => (
          <AppointmentCard key={appoint?.id} {...appoint} />
        ))}
      </div>
    </div>
  )
}
