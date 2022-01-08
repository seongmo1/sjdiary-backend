import { IAuthUser } from './../../auth/auth.interface';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { AuthUser } from 'src/auth';

import { Todo } from './dto/output';
import { TodoService } from './todo.service';
import {
  CreateTodoInput,
  DeleteTodoInput,
  TodosInput,
  UpdateTodoInput,
} from './dto/input';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo])
  async todos(
    @AuthUser() authUser: IAuthUser,
    @Args('input') input: TodosInput,
  ) {
    return this.todoService.todos(authUser, input);
  }

  @Mutation(() => Todo)
  async createTodo(
    @AuthUser() authUser: IAuthUser,
    @Args('input') input: CreateTodoInput,
  ) {
    return this.todoService.createTodo(authUser, input);
  }

  @Mutation(() => Todo)
  async updateTodo(
    @AuthUser() authUser: IAuthUser,
    @Args('input') input: UpdateTodoInput,
  ) {
    return this.todoService.updateTodo(authUser, input);
  }

  @Mutation(() => Boolean)
  async deleteTodo(
    @AuthUser() authUser: IAuthUser,
    @Args('input') input: DeleteTodoInput,
  ) {
    return this.todoService.deleteTodo(authUser, input);
  }
}
