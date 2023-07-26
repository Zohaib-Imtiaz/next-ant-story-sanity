import { type SchemaTypeDefinition } from 'sanity'
import Pet from './pet.schema'
import Todo from './todo.schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Pet, Todo],
}
