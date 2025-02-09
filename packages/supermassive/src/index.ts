import { DocumentNode, ExecutionResult, GraphQLError } from "graphql";
import { IExecutableSchemaDefinition } from "@graphql-tools/schema";

type Maybe<T> = null | T;

export interface ExecuteArgs {
  resolvers: IExecutableSchemaDefinition["resolvers"];
  document: DocumentNode;
  rootValue?: unknown;
  contextValue?: unknown;
  variableValues?: Maybe<{ readonly [variable: string]: unknown }>;
  operationName?: Maybe<string>;
}

export async function execute(args: ExecuteArgs): Promise<ExecutionResult> {
  return {
    errors: [new GraphQLError("Not implemented")],
  };
}
