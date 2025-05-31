import { z } from 'zod'

export const formSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
  dataInicial: z.string().min(1, 'Data inicial é obrigatória'),
  dataFinal: z.string().min(1, 'Data final é obrigatória'),
  propriedades: z
    .array(
      z.object({
        nome: z.string().min(1, 'Nome da propriedade é obrigatório'),
        id: z.number({ invalid_type_error: 'ID da propriedade é obrigatório' }),
        cnpj: z.string().optional(),
      })
    )
    .min(1, 'Pelo menos uma propriedade é obrigatória'),
laboratorio: z
  .object({
    nome: z.string().min(1, 'Nome do laboratório é obrigatório'),
    id: z.number({ invalid_type_error: 'ID do laboratório é obrigatório' }),
  })
  .refine((val) => !!val.id, {
    message: 'Selecione um laboratório',
  }),

  observacoes: z.string().optional(),
  codigo: z
    .number({ invalid_type_error: 'Código deve ser um número' })
    .optional(),
})

export type FormData = z.infer<typeof formSchema>
