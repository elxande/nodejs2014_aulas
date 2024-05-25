import { knex } from 'knex'

declare module 'knex/types/tables' {
  export interface tables {
    trasactions: {
      id: string
      title: string
      amount: number
      created_at: string
      session_id?: string
    }
  }
}
