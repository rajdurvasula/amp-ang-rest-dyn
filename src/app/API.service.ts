/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateBloguser: OnCreateBloguserSubscription;
  onUpdateBloguser: OnUpdateBloguserSubscription;
  onDeleteBloguser: OnDeleteBloguserSubscription;
};

export type CreateBloguserInput = {
  id?: string | null;
  fname: string;
  lname: string;
  email: string;
  handle: string;
};

export type ModelBloguserConditionInput = {
  fname?: ModelStringInput | null;
  lname?: ModelStringInput | null;
  email?: ModelStringInput | null;
  handle?: ModelStringInput | null;
  and?: Array<ModelBloguserConditionInput | null> | null;
  or?: Array<ModelBloguserConditionInput | null> | null;
  not?: ModelBloguserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Bloguser = {
  __typename: "Bloguser";
  id: string;
  fname: string;
  lname: string;
  email: string;
  handle: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBloguserInput = {
  id: string;
  fname?: string | null;
  lname?: string | null;
  email?: string | null;
  handle?: string | null;
};

export type DeleteBloguserInput = {
  id: string;
};

export type ModelBloguserFilterInput = {
  id?: ModelIDInput | null;
  fname?: ModelStringInput | null;
  lname?: ModelStringInput | null;
  email?: ModelStringInput | null;
  handle?: ModelStringInput | null;
  and?: Array<ModelBloguserFilterInput | null> | null;
  or?: Array<ModelBloguserFilterInput | null> | null;
  not?: ModelBloguserFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelBloguserConnection = {
  __typename: "ModelBloguserConnection";
  items: Array<Bloguser | null>;
  nextToken?: string | null;
};

export type CreateBloguserMutation = {
  __typename: "Bloguser";
  id: string;
  fname: string;
  lname: string;
  email: string;
  handle: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBloguserMutation = {
  __typename: "Bloguser";
  id: string;
  fname: string;
  lname: string;
  email: string;
  handle: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBloguserMutation = {
  __typename: "Bloguser";
  id: string;
  fname: string;
  lname: string;
  email: string;
  handle: string;
  createdAt: string;
  updatedAt: string;
};

export type GetBloguserQuery = {
  __typename: "Bloguser";
  id: string;
  fname: string;
  lname: string;
  email: string;
  handle: string;
  createdAt: string;
  updatedAt: string;
};

export type ListBlogusersQuery = {
  __typename: "ModelBloguserConnection";
  items: Array<{
    __typename: "Bloguser";
    id: string;
    fname: string;
    lname: string;
    email: string;
    handle: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateBloguserSubscription = {
  __typename: "Bloguser";
  id: string;
  fname: string;
  lname: string;
  email: string;
  handle: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBloguserSubscription = {
  __typename: "Bloguser";
  id: string;
  fname: string;
  lname: string;
  email: string;
  handle: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBloguserSubscription = {
  __typename: "Bloguser";
  id: string;
  fname: string;
  lname: string;
  email: string;
  handle: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateBloguser(
    input: CreateBloguserInput,
    condition?: ModelBloguserConditionInput
  ): Promise<CreateBloguserMutation> {
    const statement = `mutation CreateBloguser($input: CreateBloguserInput!, $condition: ModelBloguserConditionInput) {
        createBloguser(input: $input, condition: $condition) {
          __typename
          id
          fname
          lname
          email
          handle
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBloguserMutation>response.data.createBloguser;
  }
  async UpdateBloguser(
    input: UpdateBloguserInput,
    condition?: ModelBloguserConditionInput
  ): Promise<UpdateBloguserMutation> {
    const statement = `mutation UpdateBloguser($input: UpdateBloguserInput!, $condition: ModelBloguserConditionInput) {
        updateBloguser(input: $input, condition: $condition) {
          __typename
          id
          fname
          lname
          email
          handle
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBloguserMutation>response.data.updateBloguser;
  }
  async DeleteBloguser(
    input: DeleteBloguserInput,
    condition?: ModelBloguserConditionInput
  ): Promise<DeleteBloguserMutation> {
    const statement = `mutation DeleteBloguser($input: DeleteBloguserInput!, $condition: ModelBloguserConditionInput) {
        deleteBloguser(input: $input, condition: $condition) {
          __typename
          id
          fname
          lname
          email
          handle
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBloguserMutation>response.data.deleteBloguser;
  }
  async GetBloguser(id: string): Promise<GetBloguserQuery> {
    const statement = `query GetBloguser($id: ID!) {
        getBloguser(id: $id) {
          __typename
          id
          fname
          lname
          email
          handle
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBloguserQuery>response.data.getBloguser;
  }
  async ListBlogusers(
    filter?: ModelBloguserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBlogusersQuery> {
    const statement = `query ListBlogusers($filter: ModelBloguserFilterInput, $limit: Int, $nextToken: String) {
        listBlogusers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            fname
            lname
            email
            handle
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBlogusersQuery>response.data.listBlogusers;
  }
  OnCreateBloguserListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBloguser">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBloguser {
        onCreateBloguser {
          __typename
          id
          fname
          lname
          email
          handle
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBloguser">>
  >;

  OnUpdateBloguserListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBloguser">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBloguser {
        onUpdateBloguser {
          __typename
          id
          fname
          lname
          email
          handle
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBloguser">>
  >;

  OnDeleteBloguserListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBloguser">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBloguser {
        onDeleteBloguser {
          __typename
          id
          fname
          lname
          email
          handle
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBloguser">>
  >;
}
