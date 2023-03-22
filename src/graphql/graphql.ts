/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Gallery = {
  __typename?: 'Gallery';
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  is_active: Scalars['Boolean'];
  name: Scalars['String'];
  theme_id: Scalars['Int'];
  updated_at?: Maybe<Scalars['Int']>;
  user: User;
  user_id: Scalars['Int'];
  works: Array<Work>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addGallery: Gallery;
  addWork: Scalars['ID'];
  addWorkPage: Scalars['Int'];
  userSignup: Scalars['Int'];
};


export type MutationAddGalleryArgs = {
  name: Scalars['String'];
  userId: Scalars['Float'];
};


export type MutationAddWorkArgs = {
  gallery_id: Scalars['Float'];
  name: Scalars['String'];
  userId: Scalars['Float'];
};


export type MutationAddWorkPageArgs = {
  image_url: Scalars['String'];
  sort: Scalars['Float'];
  work_id: Scalars['Float'];
};


export type MutationUserSignupArgs = {
  login_id: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  galleries: Array<Gallery>;
  tryLoginAuth: Scalars['Boolean'];
  users: Array<User>;
  works: Array<Work>;
};


export type QueryGalleriesArgs = {
  id?: InputMaybe<Scalars['Float']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['Float']>;
  user_id?: InputMaybe<Scalars['Float']>;
};


export type QueryTryLoginAuthArgs = {
  login_id: Scalars['String'];
  password: Scalars['String'];
};


export type QueryUsersArgs = {
  id: Scalars['Float'];
  login_id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryWorksArgs = {
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['Float']>;
};

export type User = {
  __typename?: 'User';
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  gallaries?: Maybe<Array<Gallery>>;
  id: Scalars['Int'];
  login_id: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  profile?: Maybe<Scalars['String']>;
  snsIds?: Maybe<Array<UserSnsId>>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type UserSnsId = {
  __typename?: 'UserSnsId';
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  sns_user_id: Scalars['String'];
  updated_at?: Maybe<Scalars['Int']>;
  use_sns_id: Scalars['String'];
  user_id: Scalars['String'];
};

export type Work = {
  __typename?: 'Work';
  caption?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  is_active: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at?: Maybe<Scalars['Int']>;
  user_id: Scalars['Int'];
  workPages?: Maybe<Array<WorkPage>>;
};

export type WorkPage = {
  __typename?: 'WorkPage';
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  image_url?: Maybe<Scalars['String']>;
  sort: Scalars['Int'];
  updated_at?: Maybe<Scalars['Int']>;
  work_id: Scalars['Int'];
};

export type TryLoginAuthQueryVariables = Exact<{
  password: Scalars['String'];
  login_id: Scalars['String'];
}>;


export type TryLoginAuthQuery = { __typename?: 'Query', tryLoginAuth: boolean };

export type GalleryInfoFragment = { __typename?: 'Gallery', id: number, name: string, is_active: boolean, theme_id: number, user_id: number } & { ' $fragmentName'?: 'GalleryInfoFragment' };

export type GalleryListByUserFragment = { __typename?: 'Gallery', id: number, name: string, is_active: boolean } & { ' $fragmentName'?: 'GalleryListByUserFragment' };

export const GalleryInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"galleryInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Gallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"theme_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]} as unknown as DocumentNode<GalleryInfoFragment, unknown>;
export const GalleryListByUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"galleryListByUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Gallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}}]}}]} as unknown as DocumentNode<GalleryListByUserFragment, unknown>;
export const TryLoginAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TryLoginAuth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tryLoginAuth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"login_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login_id"}}}]}]}}]} as unknown as DocumentNode<TryLoginAuthQuery, TryLoginAuthQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Gallery = {
  __typename?: 'Gallery';
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  is_active: Scalars['Boolean'];
  name: Scalars['String'];
  theme_id: Scalars['Int'];
  updated_at?: Maybe<Scalars['Int']>;
  user: User;
  user_id: Scalars['Int'];
  works: Array<Work>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addGallery: Gallery;
  addWork: Scalars['ID'];
  addWorkPage: Scalars['Int'];
  userSignup: Scalars['Int'];
};


export type MutationAddGalleryArgs = {
  name: Scalars['String'];
  userId: Scalars['Float'];
};


export type MutationAddWorkArgs = {
  gallery_id: Scalars['Float'];
  name: Scalars['String'];
  userId: Scalars['Float'];
};


export type MutationAddWorkPageArgs = {
  image_url: Scalars['String'];
  sort: Scalars['Float'];
  work_id: Scalars['Float'];
};


export type MutationUserSignupArgs = {
  login_id: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  galleries: Array<Gallery>;
  tryLoginAuth: Scalars['Boolean'];
  users: Array<User>;
  works: Array<Work>;
};


export type QueryGalleriesArgs = {
  id?: InputMaybe<Scalars['Float']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['Float']>;
  user_id?: InputMaybe<Scalars['Float']>;
};


export type QueryTryLoginAuthArgs = {
  login_id: Scalars['String'];
  password: Scalars['String'];
};


export type QueryUsersArgs = {
  id: Scalars['Float'];
  login_id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};


export type QueryWorksArgs = {
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['Float']>;
};

export type User = {
  __typename?: 'User';
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  gallaries?: Maybe<Array<Gallery>>;
  id: Scalars['Int'];
  login_id: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  profile?: Maybe<Scalars['String']>;
  snsIds?: Maybe<Array<UserSnsId>>;
  updated_at?: Maybe<Scalars['Int']>;
};

export type UserSnsId = {
  __typename?: 'UserSnsId';
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  sns_user_id: Scalars['String'];
  updated_at?: Maybe<Scalars['Int']>;
  use_sns_id: Scalars['String'];
  user_id: Scalars['String'];
};

export type Work = {
  __typename?: 'Work';
  caption?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  is_active: Scalars['Boolean'];
  name: Scalars['String'];
  updated_at?: Maybe<Scalars['Int']>;
  user_id: Scalars['Int'];
  workPages?: Maybe<Array<WorkPage>>;
};

export type WorkPage = {
  __typename?: 'WorkPage';
  created_at?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  image_url?: Maybe<Scalars['String']>;
  sort: Scalars['Int'];
  updated_at?: Maybe<Scalars['Int']>;
  work_id: Scalars['Int'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Gallery: ResolverTypeWrapper<Gallery>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  UserSnsId: ResolverTypeWrapper<UserSnsId>;
  Work: ResolverTypeWrapper<Work>;
  WorkPage: ResolverTypeWrapper<WorkPage>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Gallery: Gallery;
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  String: Scalars['String'];
  Mutation: {};
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Query: {};
  User: User;
  UserSnsId: UserSnsId;
  Work: Work;
  WorkPage: WorkPage;
};

export type GalleryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Gallery'] = ResolversParentTypes['Gallery']> = {
  created_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deleted_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  theme_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  works?: Resolver<Array<ResolversTypes['Work']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addGallery?: Resolver<ResolversTypes['Gallery'], ParentType, ContextType, RequireFields<MutationAddGalleryArgs, 'name' | 'userId'>>;
  addWork?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationAddWorkArgs, 'gallery_id' | 'name' | 'userId'>>;
  addWorkPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationAddWorkPageArgs, 'image_url' | 'sort' | 'work_id'>>;
  userSignup?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<MutationUserSignupArgs, 'login_id' | 'name' | 'password'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  galleries?: Resolver<Array<ResolversTypes['Gallery']>, ParentType, ContextType, Partial<QueryGalleriesArgs>>;
  tryLoginAuth?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryTryLoginAuthArgs, 'login_id' | 'password'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'id'>>;
  works?: Resolver<Array<ResolversTypes['Work']>, ParentType, ContextType, Partial<QueryWorksArgs>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  created_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deleted_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gallaries?: Resolver<Maybe<Array<ResolversTypes['Gallery']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  login_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snsIds?: Resolver<Maybe<Array<ResolversTypes['UserSnsId']>>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSnsIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserSnsId'] = ResolversParentTypes['UserSnsId']> = {
  created_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deleted_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sns_user_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  use_sns_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Work'] = ResolversParentTypes['Work']> = {
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deleted_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  is_active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  workPages?: Resolver<Maybe<Array<ResolversTypes['WorkPage']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkPage'] = ResolversParentTypes['WorkPage']> = {
  created_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deleted_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  work_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Gallery?: GalleryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserSnsId?: UserSnsIdResolvers<ContextType>;
  Work?: WorkResolvers<ContextType>;
  WorkPage?: WorkPageResolvers<ContextType>;
};

