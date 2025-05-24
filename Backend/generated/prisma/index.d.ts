
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model ChatUser
 * 
 */
export type ChatUser = $Result.DefaultSelection<Prisma.$ChatUserPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model SeenMessage
 * 
 */
export type SeenMessage = $Result.DefaultSelection<Prisma.$SeenMessagePayload>
/**
 * Model Status
 * 
 */
export type Status = $Result.DefaultSelection<Prisma.$StatusPayload>
/**
 * Model StatusViewer
 * 
 */
export type StatusViewer = $Result.DefaultSelection<Prisma.$StatusViewerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MessageType: {
  TEXT: 'TEXT',
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  DOCUMENT: 'DOCUMENT',
  AUDIO: 'AUDIO',
  CONTACT: 'CONTACT',
  LOCATION: 'LOCATION'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]

}

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatUser`: Exposes CRUD operations for the **ChatUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatUsers
    * const chatUsers = await prisma.chatUser.findMany()
    * ```
    */
  get chatUser(): Prisma.ChatUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seenMessage`: Exposes CRUD operations for the **SeenMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeenMessages
    * const seenMessages = await prisma.seenMessage.findMany()
    * ```
    */
  get seenMessage(): Prisma.SeenMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.status`: Exposes CRUD operations for the **Status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.status.findMany()
    * ```
    */
  get status(): Prisma.StatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statusViewer`: Exposes CRUD operations for the **StatusViewer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusViewers
    * const statusViewers = await prisma.statusViewer.findMany()
    * ```
    */
  get statusViewer(): Prisma.StatusViewerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Chat: 'Chat',
    ChatUser: 'ChatUser',
    Message: 'Message',
    SeenMessage: 'SeenMessage',
    Status: 'Status',
    StatusViewer: 'StatusViewer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "chat" | "chatUser" | "message" | "seenMessage" | "status" | "statusViewer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      ChatUser: {
        payload: Prisma.$ChatUserPayload<ExtArgs>
        fields: Prisma.ChatUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          findFirst: {
            args: Prisma.ChatUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          findMany: {
            args: Prisma.ChatUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>[]
          }
          create: {
            args: Prisma.ChatUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          createMany: {
            args: Prisma.ChatUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>[]
          }
          delete: {
            args: Prisma.ChatUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          update: {
            args: Prisma.ChatUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          deleteMany: {
            args: Prisma.ChatUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>[]
          }
          upsert: {
            args: Prisma.ChatUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatUserPayload>
          }
          aggregate: {
            args: Prisma.ChatUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatUser>
          }
          groupBy: {
            args: Prisma.ChatUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatUserCountArgs<ExtArgs>
            result: $Utils.Optional<ChatUserCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      SeenMessage: {
        payload: Prisma.$SeenMessagePayload<ExtArgs>
        fields: Prisma.SeenMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeenMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeenMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload>
          }
          findFirst: {
            args: Prisma.SeenMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeenMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload>
          }
          findMany: {
            args: Prisma.SeenMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload>[]
          }
          create: {
            args: Prisma.SeenMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload>
          }
          createMany: {
            args: Prisma.SeenMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeenMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload>[]
          }
          delete: {
            args: Prisma.SeenMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload>
          }
          update: {
            args: Prisma.SeenMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload>
          }
          deleteMany: {
            args: Prisma.SeenMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeenMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeenMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload>[]
          }
          upsert: {
            args: Prisma.SeenMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeenMessagePayload>
          }
          aggregate: {
            args: Prisma.SeenMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeenMessage>
          }
          groupBy: {
            args: Prisma.SeenMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeenMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeenMessageCountArgs<ExtArgs>
            result: $Utils.Optional<SeenMessageCountAggregateOutputType> | number
          }
        }
      }
      Status: {
        payload: Prisma.$StatusPayload<ExtArgs>
        fields: Prisma.StatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findFirst: {
            args: Prisma.StatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findMany: {
            args: Prisma.StatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          create: {
            args: Prisma.StatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          createMany: {
            args: Prisma.StatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          delete: {
            args: Prisma.StatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          update: {
            args: Prisma.StatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          deleteMany: {
            args: Prisma.StatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          upsert: {
            args: Prisma.StatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          aggregate: {
            args: Prisma.StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatus>
          }
          groupBy: {
            args: Prisma.StatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusCountArgs<ExtArgs>
            result: $Utils.Optional<StatusCountAggregateOutputType> | number
          }
        }
      }
      StatusViewer: {
        payload: Prisma.$StatusViewerPayload<ExtArgs>
        fields: Prisma.StatusViewerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusViewerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusViewerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusViewerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusViewerPayload>
          }
          findFirst: {
            args: Prisma.StatusViewerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusViewerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusViewerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusViewerPayload>
          }
          findMany: {
            args: Prisma.StatusViewerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusViewerPayload>[]
          }
          create: {
            args: Prisma.StatusViewerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusViewerPayload>
          }
          createMany: {
            args: Prisma.StatusViewerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusViewerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusViewerPayload>[]
          }
          delete: {
            args: Prisma.StatusViewerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusViewerPayload>
          }
          update: {
            args: Prisma.StatusViewerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusViewerPayload>
          }
          deleteMany: {
            args: Prisma.StatusViewerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusViewerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatusViewerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusViewerPayload>[]
          }
          upsert: {
            args: Prisma.StatusViewerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusViewerPayload>
          }
          aggregate: {
            args: Prisma.StatusViewerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatusViewer>
          }
          groupBy: {
            args: Prisma.StatusViewerGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusViewerGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusViewerCountArgs<ExtArgs>
            result: $Utils.Optional<StatusViewerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    chat?: ChatOmit
    chatUser?: ChatUserOmit
    message?: MessageOmit
    seenMessage?: SeenMessageOmit
    status?: StatusOmit
    statusViewer?: StatusViewerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    statuses: number
    messages: number
    chatUsers: number
    seenMessages: number
    statusViews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statuses?: boolean | UserCountOutputTypeCountStatusesArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    chatUsers?: boolean | UserCountOutputTypeCountChatUsersArgs
    seenMessages?: boolean | UserCountOutputTypeCountSeenMessagesArgs
    statusViews?: boolean | UserCountOutputTypeCountStatusViewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSeenMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeenMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStatusViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusViewerWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    messages: number
    users: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
    users?: boolean | ChatCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatUserWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    seenBy: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seenBy?: boolean | MessageCountOutputTypeCountSeenByArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountSeenByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeenMessageWhereInput
  }


  /**
   * Count Type StatusCountOutputType
   */

  export type StatusCountOutputType = {
    viewers: number
  }

  export type StatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viewers?: boolean | StatusCountOutputTypeCountViewersArgs
  }

  // Custom InputTypes
  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusCountOutputType
     */
    select?: StatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeCountViewersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusViewerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    phoneNumber: string | null
    email: string | null
    password: string | null
    profilePicUrl: string | null
    about: string | null
    isOnline: boolean | null
    lastSeen: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    phoneNumber: string | null
    email: string | null
    password: string | null
    profilePicUrl: string | null
    about: string | null
    isOnline: boolean | null
    lastSeen: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    phoneNumber: number
    email: number
    password: number
    profilePicUrl: number
    about: number
    isOnline: number
    lastSeen: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    phoneNumber?: true
    email?: true
    password?: true
    profilePicUrl?: true
    about?: true
    isOnline?: true
    lastSeen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    phoneNumber?: true
    email?: true
    password?: true
    profilePicUrl?: true
    about?: true
    isOnline?: true
    lastSeen?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    phoneNumber?: true
    email?: true
    password?: true
    profilePicUrl?: true
    about?: true
    isOnline?: true
    lastSeen?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    phoneNumber: string
    email: string
    password: string
    profilePicUrl: string | null
    about: string | null
    isOnline: boolean
    lastSeen: Date
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    phoneNumber?: boolean
    email?: boolean
    password?: boolean
    profilePicUrl?: boolean
    about?: boolean
    isOnline?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    statuses?: boolean | User$statusesArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    chatUsers?: boolean | User$chatUsersArgs<ExtArgs>
    seenMessages?: boolean | User$seenMessagesArgs<ExtArgs>
    statusViews?: boolean | User$statusViewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    phoneNumber?: boolean
    email?: boolean
    password?: boolean
    profilePicUrl?: boolean
    about?: boolean
    isOnline?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    phoneNumber?: boolean
    email?: boolean
    password?: boolean
    profilePicUrl?: boolean
    about?: boolean
    isOnline?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    phoneNumber?: boolean
    email?: boolean
    password?: boolean
    profilePicUrl?: boolean
    about?: boolean
    isOnline?: boolean
    lastSeen?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "phoneNumber" | "email" | "password" | "profilePicUrl" | "about" | "isOnline" | "lastSeen" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statuses?: boolean | User$statusesArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    chatUsers?: boolean | User$chatUsersArgs<ExtArgs>
    seenMessages?: boolean | User$seenMessagesArgs<ExtArgs>
    statusViews?: boolean | User$statusViewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      statuses: Prisma.$StatusPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      chatUsers: Prisma.$ChatUserPayload<ExtArgs>[]
      seenMessages: Prisma.$SeenMessagePayload<ExtArgs>[]
      statusViews: Prisma.$StatusViewerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      phoneNumber: string
      email: string
      password: string
      profilePicUrl: string | null
      about: string | null
      isOnline: boolean
      lastSeen: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    statuses<T extends User$statusesArgs<ExtArgs> = {}>(args?: Subset<T, User$statusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatUsers<T extends User$chatUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$chatUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seenMessages<T extends User$seenMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$seenMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    statusViews<T extends User$statusViewsArgs<ExtArgs> = {}>(args?: Subset<T, User$statusViewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusViewerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profilePicUrl: FieldRef<"User", 'String'>
    readonly about: FieldRef<"User", 'String'>
    readonly isOnline: FieldRef<"User", 'Boolean'>
    readonly lastSeen: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.statuses
   */
  export type User$statusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    where?: StatusWhereInput
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    cursor?: StatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.chatUsers
   */
  export type User$chatUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    where?: ChatUserWhereInput
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    cursor?: ChatUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatUserScalarFieldEnum | ChatUserScalarFieldEnum[]
  }

  /**
   * User.seenMessages
   */
  export type User$seenMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    where?: SeenMessageWhereInput
    orderBy?: SeenMessageOrderByWithRelationInput | SeenMessageOrderByWithRelationInput[]
    cursor?: SeenMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeenMessageScalarFieldEnum | SeenMessageScalarFieldEnum[]
  }

  /**
   * User.statusViews
   */
  export type User$statusViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusViewer
     */
    select?: StatusViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusViewer
     */
    omit?: StatusViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusViewerInclude<ExtArgs> | null
    where?: StatusViewerWhereInput
    orderBy?: StatusViewerOrderByWithRelationInput | StatusViewerOrderByWithRelationInput[]
    cursor?: StatusViewerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatusViewerScalarFieldEnum | StatusViewerScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    isGroup: boolean | null
    groupName: string | null
    groupIcon: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    isGroup: boolean | null
    groupName: string | null
    groupIcon: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    isGroup: number
    groupName: number
    groupIcon: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    isGroup?: true
    groupName?: true
    groupIcon?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    isGroup?: true
    groupName?: true
    groupIcon?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    isGroup?: true
    groupName?: true
    groupIcon?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    isGroup: boolean
    groupName: string | null
    groupIcon: string | null
    createdBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isGroup?: boolean
    groupName?: boolean
    groupIcon?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    users?: boolean | Chat$usersArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isGroup?: boolean
    groupName?: boolean
    groupIcon?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isGroup?: boolean
    groupName?: boolean
    groupIcon?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    isGroup?: boolean
    groupName?: boolean
    groupIcon?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isGroup" | "groupName" | "groupIcon" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    users?: boolean | Chat$usersArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
      users: Prisma.$ChatUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      isGroup: boolean
      groupName: string | null
      groupIcon: string | null
      createdBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Chat$usersArgs<ExtArgs> = {}>(args?: Subset<T, Chat$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly isGroup: FieldRef<"Chat", 'Boolean'>
    readonly groupName: FieldRef<"Chat", 'String'>
    readonly groupIcon: FieldRef<"Chat", 'String'>
    readonly createdBy: FieldRef<"Chat", 'String'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
    readonly updatedAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Chat.users
   */
  export type Chat$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    where?: ChatUserWhereInput
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    cursor?: ChatUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatUserScalarFieldEnum | ChatUserScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model ChatUser
   */

  export type AggregateChatUser = {
    _count: ChatUserCountAggregateOutputType | null
    _min: ChatUserMinAggregateOutputType | null
    _max: ChatUserMaxAggregateOutputType | null
  }

  export type ChatUserMinAggregateOutputType = {
    id: string | null
    chatId: string | null
    userId: string | null
    role: string | null
    joinedAt: Date | null
  }

  export type ChatUserMaxAggregateOutputType = {
    id: string | null
    chatId: string | null
    userId: string | null
    role: string | null
    joinedAt: Date | null
  }

  export type ChatUserCountAggregateOutputType = {
    id: number
    chatId: number
    userId: number
    role: number
    joinedAt: number
    _all: number
  }


  export type ChatUserMinAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
    role?: true
    joinedAt?: true
  }

  export type ChatUserMaxAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
    role?: true
    joinedAt?: true
  }

  export type ChatUserCountAggregateInputType = {
    id?: true
    chatId?: true
    userId?: true
    role?: true
    joinedAt?: true
    _all?: true
  }

  export type ChatUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatUser to aggregate.
     */
    where?: ChatUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUsers to fetch.
     */
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatUsers
    **/
    _count?: true | ChatUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatUserMaxAggregateInputType
  }

  export type GetChatUserAggregateType<T extends ChatUserAggregateArgs> = {
        [P in keyof T & keyof AggregateChatUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatUser[P]>
      : GetScalarType<T[P], AggregateChatUser[P]>
  }




  export type ChatUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatUserWhereInput
    orderBy?: ChatUserOrderByWithAggregationInput | ChatUserOrderByWithAggregationInput[]
    by: ChatUserScalarFieldEnum[] | ChatUserScalarFieldEnum
    having?: ChatUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatUserCountAggregateInputType | true
    _min?: ChatUserMinAggregateInputType
    _max?: ChatUserMaxAggregateInputType
  }

  export type ChatUserGroupByOutputType = {
    id: string
    chatId: string
    userId: string
    role: string
    joinedAt: Date
    _count: ChatUserCountAggregateOutputType | null
    _min: ChatUserMinAggregateOutputType | null
    _max: ChatUserMaxAggregateOutputType | null
  }

  type GetChatUserGroupByPayload<T extends ChatUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatUserGroupByOutputType[P]>
            : GetScalarType<T[P], ChatUserGroupByOutputType[P]>
        }
      >
    >


  export type ChatUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatUser"]>

  export type ChatUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatUser"]>

  export type ChatUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatUser"]>

  export type ChatUserSelectScalar = {
    id?: boolean
    chatId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
  }

  export type ChatUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "userId" | "role" | "joinedAt", ExtArgs["result"]["chatUser"]>
  export type ChatUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatUser"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatId: string
      userId: string
      role: string
      joinedAt: Date
    }, ExtArgs["result"]["chatUser"]>
    composites: {}
  }

  type ChatUserGetPayload<S extends boolean | null | undefined | ChatUserDefaultArgs> = $Result.GetResult<Prisma.$ChatUserPayload, S>

  type ChatUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatUserCountAggregateInputType | true
    }

  export interface ChatUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatUser'], meta: { name: 'ChatUser' } }
    /**
     * Find zero or one ChatUser that matches the filter.
     * @param {ChatUserFindUniqueArgs} args - Arguments to find a ChatUser
     * @example
     * // Get one ChatUser
     * const chatUser = await prisma.chatUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatUserFindUniqueArgs>(args: SelectSubset<T, ChatUserFindUniqueArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatUserFindUniqueOrThrowArgs} args - Arguments to find a ChatUser
     * @example
     * // Get one ChatUser
     * const chatUser = await prisma.chatUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatUserFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserFindFirstArgs} args - Arguments to find a ChatUser
     * @example
     * // Get one ChatUser
     * const chatUser = await prisma.chatUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatUserFindFirstArgs>(args?: SelectSubset<T, ChatUserFindFirstArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserFindFirstOrThrowArgs} args - Arguments to find a ChatUser
     * @example
     * // Get one ChatUser
     * const chatUser = await prisma.chatUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatUserFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatUsers
     * const chatUsers = await prisma.chatUser.findMany()
     * 
     * // Get first 10 ChatUsers
     * const chatUsers = await prisma.chatUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatUserWithIdOnly = await prisma.chatUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatUserFindManyArgs>(args?: SelectSubset<T, ChatUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatUser.
     * @param {ChatUserCreateArgs} args - Arguments to create a ChatUser.
     * @example
     * // Create one ChatUser
     * const ChatUser = await prisma.chatUser.create({
     *   data: {
     *     // ... data to create a ChatUser
     *   }
     * })
     * 
     */
    create<T extends ChatUserCreateArgs>(args: SelectSubset<T, ChatUserCreateArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatUsers.
     * @param {ChatUserCreateManyArgs} args - Arguments to create many ChatUsers.
     * @example
     * // Create many ChatUsers
     * const chatUser = await prisma.chatUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatUserCreateManyArgs>(args?: SelectSubset<T, ChatUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatUsers and returns the data saved in the database.
     * @param {ChatUserCreateManyAndReturnArgs} args - Arguments to create many ChatUsers.
     * @example
     * // Create many ChatUsers
     * const chatUser = await prisma.chatUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatUsers and only return the `id`
     * const chatUserWithIdOnly = await prisma.chatUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatUserCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatUser.
     * @param {ChatUserDeleteArgs} args - Arguments to delete one ChatUser.
     * @example
     * // Delete one ChatUser
     * const ChatUser = await prisma.chatUser.delete({
     *   where: {
     *     // ... filter to delete one ChatUser
     *   }
     * })
     * 
     */
    delete<T extends ChatUserDeleteArgs>(args: SelectSubset<T, ChatUserDeleteArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatUser.
     * @param {ChatUserUpdateArgs} args - Arguments to update one ChatUser.
     * @example
     * // Update one ChatUser
     * const chatUser = await prisma.chatUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUserUpdateArgs>(args: SelectSubset<T, ChatUserUpdateArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatUsers.
     * @param {ChatUserDeleteManyArgs} args - Arguments to filter ChatUsers to delete.
     * @example
     * // Delete a few ChatUsers
     * const { count } = await prisma.chatUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatUserDeleteManyArgs>(args?: SelectSubset<T, ChatUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatUsers
     * const chatUser = await prisma.chatUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUserUpdateManyArgs>(args: SelectSubset<T, ChatUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatUsers and returns the data updated in the database.
     * @param {ChatUserUpdateManyAndReturnArgs} args - Arguments to update many ChatUsers.
     * @example
     * // Update many ChatUsers
     * const chatUser = await prisma.chatUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatUsers and only return the `id`
     * const chatUserWithIdOnly = await prisma.chatUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatUserUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatUser.
     * @param {ChatUserUpsertArgs} args - Arguments to update or create a ChatUser.
     * @example
     * // Update or create a ChatUser
     * const chatUser = await prisma.chatUser.upsert({
     *   create: {
     *     // ... data to create a ChatUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatUser we want to update
     *   }
     * })
     */
    upsert<T extends ChatUserUpsertArgs>(args: SelectSubset<T, ChatUserUpsertArgs<ExtArgs>>): Prisma__ChatUserClient<$Result.GetResult<Prisma.$ChatUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserCountArgs} args - Arguments to filter ChatUsers to count.
     * @example
     * // Count the number of ChatUsers
     * const count = await prisma.chatUser.count({
     *   where: {
     *     // ... the filter for the ChatUsers we want to count
     *   }
     * })
    **/
    count<T extends ChatUserCountArgs>(
      args?: Subset<T, ChatUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatUserAggregateArgs>(args: Subset<T, ChatUserAggregateArgs>): Prisma.PrismaPromise<GetChatUserAggregateType<T>>

    /**
     * Group by ChatUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatUserGroupByArgs['orderBy'] }
        : { orderBy?: ChatUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatUser model
   */
  readonly fields: ChatUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatUser model
   */
  interface ChatUserFieldRefs {
    readonly id: FieldRef<"ChatUser", 'String'>
    readonly chatId: FieldRef<"ChatUser", 'String'>
    readonly userId: FieldRef<"ChatUser", 'String'>
    readonly role: FieldRef<"ChatUser", 'String'>
    readonly joinedAt: FieldRef<"ChatUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatUser findUnique
   */
  export type ChatUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUser to fetch.
     */
    where: ChatUserWhereUniqueInput
  }

  /**
   * ChatUser findUniqueOrThrow
   */
  export type ChatUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUser to fetch.
     */
    where: ChatUserWhereUniqueInput
  }

  /**
   * ChatUser findFirst
   */
  export type ChatUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUser to fetch.
     */
    where?: ChatUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUsers to fetch.
     */
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatUsers.
     */
    cursor?: ChatUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatUsers.
     */
    distinct?: ChatUserScalarFieldEnum | ChatUserScalarFieldEnum[]
  }

  /**
   * ChatUser findFirstOrThrow
   */
  export type ChatUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUser to fetch.
     */
    where?: ChatUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUsers to fetch.
     */
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatUsers.
     */
    cursor?: ChatUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatUsers.
     */
    distinct?: ChatUserScalarFieldEnum | ChatUserScalarFieldEnum[]
  }

  /**
   * ChatUser findMany
   */
  export type ChatUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatUsers to fetch.
     */
    where?: ChatUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatUsers to fetch.
     */
    orderBy?: ChatUserOrderByWithRelationInput | ChatUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatUsers.
     */
    cursor?: ChatUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatUsers.
     */
    skip?: number
    distinct?: ChatUserScalarFieldEnum | ChatUserScalarFieldEnum[]
  }

  /**
   * ChatUser create
   */
  export type ChatUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatUser.
     */
    data: XOR<ChatUserCreateInput, ChatUserUncheckedCreateInput>
  }

  /**
   * ChatUser createMany
   */
  export type ChatUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatUsers.
     */
    data: ChatUserCreateManyInput | ChatUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatUser createManyAndReturn
   */
  export type ChatUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * The data used to create many ChatUsers.
     */
    data: ChatUserCreateManyInput | ChatUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatUser update
   */
  export type ChatUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatUser.
     */
    data: XOR<ChatUserUpdateInput, ChatUserUncheckedUpdateInput>
    /**
     * Choose, which ChatUser to update.
     */
    where: ChatUserWhereUniqueInput
  }

  /**
   * ChatUser updateMany
   */
  export type ChatUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatUsers.
     */
    data: XOR<ChatUserUpdateManyMutationInput, ChatUserUncheckedUpdateManyInput>
    /**
     * Filter which ChatUsers to update
     */
    where?: ChatUserWhereInput
    /**
     * Limit how many ChatUsers to update.
     */
    limit?: number
  }

  /**
   * ChatUser updateManyAndReturn
   */
  export type ChatUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * The data used to update ChatUsers.
     */
    data: XOR<ChatUserUpdateManyMutationInput, ChatUserUncheckedUpdateManyInput>
    /**
     * Filter which ChatUsers to update
     */
    where?: ChatUserWhereInput
    /**
     * Limit how many ChatUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatUser upsert
   */
  export type ChatUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatUser to update in case it exists.
     */
    where: ChatUserWhereUniqueInput
    /**
     * In case the ChatUser found by the `where` argument doesn't exist, create a new ChatUser with this data.
     */
    create: XOR<ChatUserCreateInput, ChatUserUncheckedCreateInput>
    /**
     * In case the ChatUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUserUpdateInput, ChatUserUncheckedUpdateInput>
  }

  /**
   * ChatUser delete
   */
  export type ChatUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
    /**
     * Filter which ChatUser to delete.
     */
    where: ChatUserWhereUniqueInput
  }

  /**
   * ChatUser deleteMany
   */
  export type ChatUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatUsers to delete
     */
    where?: ChatUserWhereInput
    /**
     * Limit how many ChatUsers to delete.
     */
    limit?: number
  }

  /**
   * ChatUser without action
   */
  export type ChatUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatUser
     */
    select?: ChatUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatUser
     */
    omit?: ChatUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatUserInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    type: $Enums.MessageType | null
    mediaUrl: string | null
    senderId: string | null
    chatId: string | null
    sentAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    type: $Enums.MessageType | null
    mediaUrl: string | null
    senderId: string | null
    chatId: string | null
    sentAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    type: number
    mediaUrl: number
    senderId: number
    chatId: number
    sentAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    type?: true
    mediaUrl?: true
    senderId?: true
    chatId?: true
    sentAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    type?: true
    mediaUrl?: true
    senderId?: true
    chatId?: true
    sentAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    type?: true
    mediaUrl?: true
    senderId?: true
    chatId?: true
    sentAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string | null
    type: $Enums.MessageType
    mediaUrl: string | null
    senderId: string
    chatId: string
    sentAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    mediaUrl?: boolean
    senderId?: boolean
    chatId?: boolean
    sentAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    seenBy?: boolean | Message$seenByArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    mediaUrl?: boolean
    senderId?: boolean
    chatId?: boolean
    sentAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    type?: boolean
    mediaUrl?: boolean
    senderId?: boolean
    chatId?: boolean
    sentAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    type?: boolean
    mediaUrl?: boolean
    senderId?: boolean
    chatId?: boolean
    sentAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "type" | "mediaUrl" | "senderId" | "chatId" | "sentAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
    seenBy?: boolean | Message$seenByArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      chat: Prisma.$ChatPayload<ExtArgs>
      seenBy: Prisma.$SeenMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string | null
      type: $Enums.MessageType
      mediaUrl: string | null
      senderId: string
      chatId: string
      sentAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seenBy<T extends Message$seenByArgs<ExtArgs> = {}>(args?: Subset<T, Message$seenByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly type: FieldRef<"Message", 'MessageType'>
    readonly mediaUrl: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly chatId: FieldRef<"Message", 'String'>
    readonly sentAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.seenBy
   */
  export type Message$seenByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    where?: SeenMessageWhereInput
    orderBy?: SeenMessageOrderByWithRelationInput | SeenMessageOrderByWithRelationInput[]
    cursor?: SeenMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeenMessageScalarFieldEnum | SeenMessageScalarFieldEnum[]
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model SeenMessage
   */

  export type AggregateSeenMessage = {
    _count: SeenMessageCountAggregateOutputType | null
    _min: SeenMessageMinAggregateOutputType | null
    _max: SeenMessageMaxAggregateOutputType | null
  }

  export type SeenMessageMinAggregateOutputType = {
    id: string | null
    messageId: string | null
    userId: string | null
    seenAt: Date | null
  }

  export type SeenMessageMaxAggregateOutputType = {
    id: string | null
    messageId: string | null
    userId: string | null
    seenAt: Date | null
  }

  export type SeenMessageCountAggregateOutputType = {
    id: number
    messageId: number
    userId: number
    seenAt: number
    _all: number
  }


  export type SeenMessageMinAggregateInputType = {
    id?: true
    messageId?: true
    userId?: true
    seenAt?: true
  }

  export type SeenMessageMaxAggregateInputType = {
    id?: true
    messageId?: true
    userId?: true
    seenAt?: true
  }

  export type SeenMessageCountAggregateInputType = {
    id?: true
    messageId?: true
    userId?: true
    seenAt?: true
    _all?: true
  }

  export type SeenMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeenMessage to aggregate.
     */
    where?: SeenMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeenMessages to fetch.
     */
    orderBy?: SeenMessageOrderByWithRelationInput | SeenMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeenMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeenMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeenMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeenMessages
    **/
    _count?: true | SeenMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeenMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeenMessageMaxAggregateInputType
  }

  export type GetSeenMessageAggregateType<T extends SeenMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateSeenMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeenMessage[P]>
      : GetScalarType<T[P], AggregateSeenMessage[P]>
  }




  export type SeenMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeenMessageWhereInput
    orderBy?: SeenMessageOrderByWithAggregationInput | SeenMessageOrderByWithAggregationInput[]
    by: SeenMessageScalarFieldEnum[] | SeenMessageScalarFieldEnum
    having?: SeenMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeenMessageCountAggregateInputType | true
    _min?: SeenMessageMinAggregateInputType
    _max?: SeenMessageMaxAggregateInputType
  }

  export type SeenMessageGroupByOutputType = {
    id: string
    messageId: string
    userId: string
    seenAt: Date
    _count: SeenMessageCountAggregateOutputType | null
    _min: SeenMessageMinAggregateOutputType | null
    _max: SeenMessageMaxAggregateOutputType | null
  }

  type GetSeenMessageGroupByPayload<T extends SeenMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeenMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeenMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeenMessageGroupByOutputType[P]>
            : GetScalarType<T[P], SeenMessageGroupByOutputType[P]>
        }
      >
    >


  export type SeenMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    userId?: boolean
    seenAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seenMessage"]>

  export type SeenMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    userId?: boolean
    seenAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seenMessage"]>

  export type SeenMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    userId?: boolean
    seenAt?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seenMessage"]>

  export type SeenMessageSelectScalar = {
    id?: boolean
    messageId?: boolean
    userId?: boolean
    seenAt?: boolean
  }

  export type SeenMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "messageId" | "userId" | "seenAt", ExtArgs["result"]["seenMessage"]>
  export type SeenMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SeenMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SeenMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SeenMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeenMessage"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      messageId: string
      userId: string
      seenAt: Date
    }, ExtArgs["result"]["seenMessage"]>
    composites: {}
  }

  type SeenMessageGetPayload<S extends boolean | null | undefined | SeenMessageDefaultArgs> = $Result.GetResult<Prisma.$SeenMessagePayload, S>

  type SeenMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeenMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeenMessageCountAggregateInputType | true
    }

  export interface SeenMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeenMessage'], meta: { name: 'SeenMessage' } }
    /**
     * Find zero or one SeenMessage that matches the filter.
     * @param {SeenMessageFindUniqueArgs} args - Arguments to find a SeenMessage
     * @example
     * // Get one SeenMessage
     * const seenMessage = await prisma.seenMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeenMessageFindUniqueArgs>(args: SelectSubset<T, SeenMessageFindUniqueArgs<ExtArgs>>): Prisma__SeenMessageClient<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeenMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeenMessageFindUniqueOrThrowArgs} args - Arguments to find a SeenMessage
     * @example
     * // Get one SeenMessage
     * const seenMessage = await prisma.seenMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeenMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, SeenMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeenMessageClient<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeenMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeenMessageFindFirstArgs} args - Arguments to find a SeenMessage
     * @example
     * // Get one SeenMessage
     * const seenMessage = await prisma.seenMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeenMessageFindFirstArgs>(args?: SelectSubset<T, SeenMessageFindFirstArgs<ExtArgs>>): Prisma__SeenMessageClient<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeenMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeenMessageFindFirstOrThrowArgs} args - Arguments to find a SeenMessage
     * @example
     * // Get one SeenMessage
     * const seenMessage = await prisma.seenMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeenMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, SeenMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeenMessageClient<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeenMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeenMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeenMessages
     * const seenMessages = await prisma.seenMessage.findMany()
     * 
     * // Get first 10 SeenMessages
     * const seenMessages = await prisma.seenMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seenMessageWithIdOnly = await prisma.seenMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeenMessageFindManyArgs>(args?: SelectSubset<T, SeenMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeenMessage.
     * @param {SeenMessageCreateArgs} args - Arguments to create a SeenMessage.
     * @example
     * // Create one SeenMessage
     * const SeenMessage = await prisma.seenMessage.create({
     *   data: {
     *     // ... data to create a SeenMessage
     *   }
     * })
     * 
     */
    create<T extends SeenMessageCreateArgs>(args: SelectSubset<T, SeenMessageCreateArgs<ExtArgs>>): Prisma__SeenMessageClient<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeenMessages.
     * @param {SeenMessageCreateManyArgs} args - Arguments to create many SeenMessages.
     * @example
     * // Create many SeenMessages
     * const seenMessage = await prisma.seenMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeenMessageCreateManyArgs>(args?: SelectSubset<T, SeenMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeenMessages and returns the data saved in the database.
     * @param {SeenMessageCreateManyAndReturnArgs} args - Arguments to create many SeenMessages.
     * @example
     * // Create many SeenMessages
     * const seenMessage = await prisma.seenMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeenMessages and only return the `id`
     * const seenMessageWithIdOnly = await prisma.seenMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeenMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, SeenMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeenMessage.
     * @param {SeenMessageDeleteArgs} args - Arguments to delete one SeenMessage.
     * @example
     * // Delete one SeenMessage
     * const SeenMessage = await prisma.seenMessage.delete({
     *   where: {
     *     // ... filter to delete one SeenMessage
     *   }
     * })
     * 
     */
    delete<T extends SeenMessageDeleteArgs>(args: SelectSubset<T, SeenMessageDeleteArgs<ExtArgs>>): Prisma__SeenMessageClient<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeenMessage.
     * @param {SeenMessageUpdateArgs} args - Arguments to update one SeenMessage.
     * @example
     * // Update one SeenMessage
     * const seenMessage = await prisma.seenMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeenMessageUpdateArgs>(args: SelectSubset<T, SeenMessageUpdateArgs<ExtArgs>>): Prisma__SeenMessageClient<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeenMessages.
     * @param {SeenMessageDeleteManyArgs} args - Arguments to filter SeenMessages to delete.
     * @example
     * // Delete a few SeenMessages
     * const { count } = await prisma.seenMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeenMessageDeleteManyArgs>(args?: SelectSubset<T, SeenMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeenMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeenMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeenMessages
     * const seenMessage = await prisma.seenMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeenMessageUpdateManyArgs>(args: SelectSubset<T, SeenMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeenMessages and returns the data updated in the database.
     * @param {SeenMessageUpdateManyAndReturnArgs} args - Arguments to update many SeenMessages.
     * @example
     * // Update many SeenMessages
     * const seenMessage = await prisma.seenMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeenMessages and only return the `id`
     * const seenMessageWithIdOnly = await prisma.seenMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeenMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, SeenMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeenMessage.
     * @param {SeenMessageUpsertArgs} args - Arguments to update or create a SeenMessage.
     * @example
     * // Update or create a SeenMessage
     * const seenMessage = await prisma.seenMessage.upsert({
     *   create: {
     *     // ... data to create a SeenMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeenMessage we want to update
     *   }
     * })
     */
    upsert<T extends SeenMessageUpsertArgs>(args: SelectSubset<T, SeenMessageUpsertArgs<ExtArgs>>): Prisma__SeenMessageClient<$Result.GetResult<Prisma.$SeenMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeenMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeenMessageCountArgs} args - Arguments to filter SeenMessages to count.
     * @example
     * // Count the number of SeenMessages
     * const count = await prisma.seenMessage.count({
     *   where: {
     *     // ... the filter for the SeenMessages we want to count
     *   }
     * })
    **/
    count<T extends SeenMessageCountArgs>(
      args?: Subset<T, SeenMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeenMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeenMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeenMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeenMessageAggregateArgs>(args: Subset<T, SeenMessageAggregateArgs>): Prisma.PrismaPromise<GetSeenMessageAggregateType<T>>

    /**
     * Group by SeenMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeenMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeenMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeenMessageGroupByArgs['orderBy'] }
        : { orderBy?: SeenMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeenMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeenMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeenMessage model
   */
  readonly fields: SeenMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeenMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeenMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SeenMessage model
   */
  interface SeenMessageFieldRefs {
    readonly id: FieldRef<"SeenMessage", 'String'>
    readonly messageId: FieldRef<"SeenMessage", 'String'>
    readonly userId: FieldRef<"SeenMessage", 'String'>
    readonly seenAt: FieldRef<"SeenMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SeenMessage findUnique
   */
  export type SeenMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    /**
     * Filter, which SeenMessage to fetch.
     */
    where: SeenMessageWhereUniqueInput
  }

  /**
   * SeenMessage findUniqueOrThrow
   */
  export type SeenMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    /**
     * Filter, which SeenMessage to fetch.
     */
    where: SeenMessageWhereUniqueInput
  }

  /**
   * SeenMessage findFirst
   */
  export type SeenMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    /**
     * Filter, which SeenMessage to fetch.
     */
    where?: SeenMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeenMessages to fetch.
     */
    orderBy?: SeenMessageOrderByWithRelationInput | SeenMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeenMessages.
     */
    cursor?: SeenMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeenMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeenMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeenMessages.
     */
    distinct?: SeenMessageScalarFieldEnum | SeenMessageScalarFieldEnum[]
  }

  /**
   * SeenMessage findFirstOrThrow
   */
  export type SeenMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    /**
     * Filter, which SeenMessage to fetch.
     */
    where?: SeenMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeenMessages to fetch.
     */
    orderBy?: SeenMessageOrderByWithRelationInput | SeenMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeenMessages.
     */
    cursor?: SeenMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeenMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeenMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeenMessages.
     */
    distinct?: SeenMessageScalarFieldEnum | SeenMessageScalarFieldEnum[]
  }

  /**
   * SeenMessage findMany
   */
  export type SeenMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    /**
     * Filter, which SeenMessages to fetch.
     */
    where?: SeenMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeenMessages to fetch.
     */
    orderBy?: SeenMessageOrderByWithRelationInput | SeenMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeenMessages.
     */
    cursor?: SeenMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeenMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeenMessages.
     */
    skip?: number
    distinct?: SeenMessageScalarFieldEnum | SeenMessageScalarFieldEnum[]
  }

  /**
   * SeenMessage create
   */
  export type SeenMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a SeenMessage.
     */
    data: XOR<SeenMessageCreateInput, SeenMessageUncheckedCreateInput>
  }

  /**
   * SeenMessage createMany
   */
  export type SeenMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeenMessages.
     */
    data: SeenMessageCreateManyInput | SeenMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeenMessage createManyAndReturn
   */
  export type SeenMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * The data used to create many SeenMessages.
     */
    data: SeenMessageCreateManyInput | SeenMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeenMessage update
   */
  export type SeenMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a SeenMessage.
     */
    data: XOR<SeenMessageUpdateInput, SeenMessageUncheckedUpdateInput>
    /**
     * Choose, which SeenMessage to update.
     */
    where: SeenMessageWhereUniqueInput
  }

  /**
   * SeenMessage updateMany
   */
  export type SeenMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeenMessages.
     */
    data: XOR<SeenMessageUpdateManyMutationInput, SeenMessageUncheckedUpdateManyInput>
    /**
     * Filter which SeenMessages to update
     */
    where?: SeenMessageWhereInput
    /**
     * Limit how many SeenMessages to update.
     */
    limit?: number
  }

  /**
   * SeenMessage updateManyAndReturn
   */
  export type SeenMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * The data used to update SeenMessages.
     */
    data: XOR<SeenMessageUpdateManyMutationInput, SeenMessageUncheckedUpdateManyInput>
    /**
     * Filter which SeenMessages to update
     */
    where?: SeenMessageWhereInput
    /**
     * Limit how many SeenMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeenMessage upsert
   */
  export type SeenMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the SeenMessage to update in case it exists.
     */
    where: SeenMessageWhereUniqueInput
    /**
     * In case the SeenMessage found by the `where` argument doesn't exist, create a new SeenMessage with this data.
     */
    create: XOR<SeenMessageCreateInput, SeenMessageUncheckedCreateInput>
    /**
     * In case the SeenMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeenMessageUpdateInput, SeenMessageUncheckedUpdateInput>
  }

  /**
   * SeenMessage delete
   */
  export type SeenMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
    /**
     * Filter which SeenMessage to delete.
     */
    where: SeenMessageWhereUniqueInput
  }

  /**
   * SeenMessage deleteMany
   */
  export type SeenMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeenMessages to delete
     */
    where?: SeenMessageWhereInput
    /**
     * Limit how many SeenMessages to delete.
     */
    limit?: number
  }

  /**
   * SeenMessage without action
   */
  export type SeenMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeenMessage
     */
    select?: SeenMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeenMessage
     */
    omit?: SeenMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeenMessageInclude<ExtArgs> | null
  }


  /**
   * Model Status
   */

  export type AggregateStatus = {
    _count: StatusCountAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  export type StatusMinAggregateOutputType = {
    id: string | null
    userId: string | null
    mediaUrl: string | null
    caption: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type StatusMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    mediaUrl: string | null
    caption: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type StatusCountAggregateOutputType = {
    id: number
    userId: number
    mediaUrl: number
    caption: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type StatusMinAggregateInputType = {
    id?: true
    userId?: true
    mediaUrl?: true
    caption?: true
    expiresAt?: true
    createdAt?: true
  }

  export type StatusMaxAggregateInputType = {
    id?: true
    userId?: true
    mediaUrl?: true
    caption?: true
    expiresAt?: true
    createdAt?: true
  }

  export type StatusCountAggregateInputType = {
    id?: true
    userId?: true
    mediaUrl?: true
    caption?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Status to aggregate.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statuses
    **/
    _count?: true | StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusMaxAggregateInputType
  }

  export type GetStatusAggregateType<T extends StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus[P]>
      : GetScalarType<T[P], AggregateStatus[P]>
  }




  export type StatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusWhereInput
    orderBy?: StatusOrderByWithAggregationInput | StatusOrderByWithAggregationInput[]
    by: StatusScalarFieldEnum[] | StatusScalarFieldEnum
    having?: StatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusCountAggregateInputType | true
    _min?: StatusMinAggregateInputType
    _max?: StatusMaxAggregateInputType
  }

  export type StatusGroupByOutputType = {
    id: string
    userId: string
    mediaUrl: string
    caption: string | null
    expiresAt: Date
    createdAt: Date
    _count: StatusCountAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  type GetStatusGroupByPayload<T extends StatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusGroupByOutputType[P]>
            : GetScalarType<T[P], StatusGroupByOutputType[P]>
        }
      >
    >


  export type StatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mediaUrl?: boolean
    caption?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    viewers?: boolean | Status$viewersArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>

  export type StatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mediaUrl?: boolean
    caption?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>

  export type StatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mediaUrl?: boolean
    caption?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>

  export type StatusSelectScalar = {
    id?: boolean
    userId?: boolean
    mediaUrl?: boolean
    caption?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type StatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "mediaUrl" | "caption" | "expiresAt" | "createdAt", ExtArgs["result"]["status"]>
  export type StatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    viewers?: boolean | Status$viewersArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Status"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      viewers: Prisma.$StatusViewerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      mediaUrl: string
      caption: string | null
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["status"]>
    composites: {}
  }

  type StatusGetPayload<S extends boolean | null | undefined | StatusDefaultArgs> = $Result.GetResult<Prisma.$StatusPayload, S>

  type StatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusCountAggregateInputType | true
    }

  export interface StatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Status'], meta: { name: 'Status' } }
    /**
     * Find zero or one Status that matches the filter.
     * @param {StatusFindUniqueArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusFindUniqueArgs>(args: SelectSubset<T, StatusFindUniqueArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusFindUniqueOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusFindFirstArgs>(args?: SelectSubset<T, StatusFindFirstArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.status.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusWithIdOnly = await prisma.status.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusFindManyArgs>(args?: SelectSubset<T, StatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Status.
     * @param {StatusCreateArgs} args - Arguments to create a Status.
     * @example
     * // Create one Status
     * const Status = await prisma.status.create({
     *   data: {
     *     // ... data to create a Status
     *   }
     * })
     * 
     */
    create<T extends StatusCreateArgs>(args: SelectSubset<T, StatusCreateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Statuses.
     * @param {StatusCreateManyArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusCreateManyArgs>(args?: SelectSubset<T, StatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Statuses and returns the data saved in the database.
     * @param {StatusCreateManyAndReturnArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Statuses and only return the `id`
     * const statusWithIdOnly = await prisma.status.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Status.
     * @param {StatusDeleteArgs} args - Arguments to delete one Status.
     * @example
     * // Delete one Status
     * const Status = await prisma.status.delete({
     *   where: {
     *     // ... filter to delete one Status
     *   }
     * })
     * 
     */
    delete<T extends StatusDeleteArgs>(args: SelectSubset<T, StatusDeleteArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Status.
     * @param {StatusUpdateArgs} args - Arguments to update one Status.
     * @example
     * // Update one Status
     * const status = await prisma.status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusUpdateArgs>(args: SelectSubset<T, StatusUpdateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Statuses.
     * @param {StatusDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusDeleteManyArgs>(args?: SelectSubset<T, StatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusUpdateManyArgs>(args: SelectSubset<T, StatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses and returns the data updated in the database.
     * @param {StatusUpdateManyAndReturnArgs} args - Arguments to update many Statuses.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Statuses and only return the `id`
     * const statusWithIdOnly = await prisma.status.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatusUpdateManyAndReturnArgs>(args: SelectSubset<T, StatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Status.
     * @param {StatusUpsertArgs} args - Arguments to update or create a Status.
     * @example
     * // Update or create a Status
     * const status = await prisma.status.upsert({
     *   create: {
     *     // ... data to create a Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status we want to update
     *   }
     * })
     */
    upsert<T extends StatusUpsertArgs>(args: SelectSubset<T, StatusUpsertArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.status.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends StatusCountArgs>(
      args?: Subset<T, StatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusAggregateArgs>(args: Subset<T, StatusAggregateArgs>): Prisma.PrismaPromise<GetStatusAggregateType<T>>

    /**
     * Group by Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusGroupByArgs['orderBy'] }
        : { orderBy?: StatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Status model
   */
  readonly fields: StatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    viewers<T extends Status$viewersArgs<ExtArgs> = {}>(args?: Subset<T, Status$viewersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusViewerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Status model
   */
  interface StatusFieldRefs {
    readonly id: FieldRef<"Status", 'String'>
    readonly userId: FieldRef<"Status", 'String'>
    readonly mediaUrl: FieldRef<"Status", 'String'>
    readonly caption: FieldRef<"Status", 'String'>
    readonly expiresAt: FieldRef<"Status", 'DateTime'>
    readonly createdAt: FieldRef<"Status", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Status findUnique
   */
  export type StatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findUniqueOrThrow
   */
  export type StatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findFirst
   */
  export type StatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findFirstOrThrow
   */
  export type StatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findMany
   */
  export type StatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Statuses to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status create
   */
  export type StatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The data needed to create a Status.
     */
    data: XOR<StatusCreateInput, StatusUncheckedCreateInput>
  }

  /**
   * Status createMany
   */
  export type StatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Statuses.
     */
    data: StatusCreateManyInput | StatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Status createManyAndReturn
   */
  export type StatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The data used to create many Statuses.
     */
    data: StatusCreateManyInput | StatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Status update
   */
  export type StatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The data needed to update a Status.
     */
    data: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
    /**
     * Choose, which Status to update.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status updateMany
   */
  export type StatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to update.
     */
    limit?: number
  }

  /**
   * Status updateManyAndReturn
   */
  export type StatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Status upsert
   */
  export type StatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The filter to search for the Status to update in case it exists.
     */
    where: StatusWhereUniqueInput
    /**
     * In case the Status found by the `where` argument doesn't exist, create a new Status with this data.
     */
    create: XOR<StatusCreateInput, StatusUncheckedCreateInput>
    /**
     * In case the Status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
  }

  /**
   * Status delete
   */
  export type StatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter which Status to delete.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status deleteMany
   */
  export type StatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statuses to delete
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to delete.
     */
    limit?: number
  }

  /**
   * Status.viewers
   */
  export type Status$viewersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusViewer
     */
    select?: StatusViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusViewer
     */
    omit?: StatusViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusViewerInclude<ExtArgs> | null
    where?: StatusViewerWhereInput
    orderBy?: StatusViewerOrderByWithRelationInput | StatusViewerOrderByWithRelationInput[]
    cursor?: StatusViewerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatusViewerScalarFieldEnum | StatusViewerScalarFieldEnum[]
  }

  /**
   * Status without action
   */
  export type StatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
  }


  /**
   * Model StatusViewer
   */

  export type AggregateStatusViewer = {
    _count: StatusViewerCountAggregateOutputType | null
    _min: StatusViewerMinAggregateOutputType | null
    _max: StatusViewerMaxAggregateOutputType | null
  }

  export type StatusViewerMinAggregateOutputType = {
    id: string | null
    statusId: string | null
    userId: string | null
    viewedAt: Date | null
  }

  export type StatusViewerMaxAggregateOutputType = {
    id: string | null
    statusId: string | null
    userId: string | null
    viewedAt: Date | null
  }

  export type StatusViewerCountAggregateOutputType = {
    id: number
    statusId: number
    userId: number
    viewedAt: number
    _all: number
  }


  export type StatusViewerMinAggregateInputType = {
    id?: true
    statusId?: true
    userId?: true
    viewedAt?: true
  }

  export type StatusViewerMaxAggregateInputType = {
    id?: true
    statusId?: true
    userId?: true
    viewedAt?: true
  }

  export type StatusViewerCountAggregateInputType = {
    id?: true
    statusId?: true
    userId?: true
    viewedAt?: true
    _all?: true
  }

  export type StatusViewerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusViewer to aggregate.
     */
    where?: StatusViewerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusViewers to fetch.
     */
    orderBy?: StatusViewerOrderByWithRelationInput | StatusViewerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusViewerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusViewers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusViewers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusViewers
    **/
    _count?: true | StatusViewerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusViewerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusViewerMaxAggregateInputType
  }

  export type GetStatusViewerAggregateType<T extends StatusViewerAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusViewer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusViewer[P]>
      : GetScalarType<T[P], AggregateStatusViewer[P]>
  }




  export type StatusViewerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusViewerWhereInput
    orderBy?: StatusViewerOrderByWithAggregationInput | StatusViewerOrderByWithAggregationInput[]
    by: StatusViewerScalarFieldEnum[] | StatusViewerScalarFieldEnum
    having?: StatusViewerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusViewerCountAggregateInputType | true
    _min?: StatusViewerMinAggregateInputType
    _max?: StatusViewerMaxAggregateInputType
  }

  export type StatusViewerGroupByOutputType = {
    id: string
    statusId: string
    userId: string
    viewedAt: Date
    _count: StatusViewerCountAggregateOutputType | null
    _min: StatusViewerMinAggregateOutputType | null
    _max: StatusViewerMaxAggregateOutputType | null
  }

  type GetStatusViewerGroupByPayload<T extends StatusViewerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusViewerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusViewerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusViewerGroupByOutputType[P]>
            : GetScalarType<T[P], StatusViewerGroupByOutputType[P]>
        }
      >
    >


  export type StatusViewerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statusId?: boolean
    userId?: boolean
    viewedAt?: boolean
    status?: boolean | StatusDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusViewer"]>

  export type StatusViewerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statusId?: boolean
    userId?: boolean
    viewedAt?: boolean
    status?: boolean | StatusDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusViewer"]>

  export type StatusViewerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statusId?: boolean
    userId?: boolean
    viewedAt?: boolean
    status?: boolean | StatusDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusViewer"]>

  export type StatusViewerSelectScalar = {
    id?: boolean
    statusId?: boolean
    userId?: boolean
    viewedAt?: boolean
  }

  export type StatusViewerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "statusId" | "userId" | "viewedAt", ExtArgs["result"]["statusViewer"]>
  export type StatusViewerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | StatusDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StatusViewerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | StatusDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StatusViewerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | StatusDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StatusViewerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusViewer"
    objects: {
      status: Prisma.$StatusPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      statusId: string
      userId: string
      viewedAt: Date
    }, ExtArgs["result"]["statusViewer"]>
    composites: {}
  }

  type StatusViewerGetPayload<S extends boolean | null | undefined | StatusViewerDefaultArgs> = $Result.GetResult<Prisma.$StatusViewerPayload, S>

  type StatusViewerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusViewerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusViewerCountAggregateInputType | true
    }

  export interface StatusViewerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusViewer'], meta: { name: 'StatusViewer' } }
    /**
     * Find zero or one StatusViewer that matches the filter.
     * @param {StatusViewerFindUniqueArgs} args - Arguments to find a StatusViewer
     * @example
     * // Get one StatusViewer
     * const statusViewer = await prisma.statusViewer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusViewerFindUniqueArgs>(args: SelectSubset<T, StatusViewerFindUniqueArgs<ExtArgs>>): Prisma__StatusViewerClient<$Result.GetResult<Prisma.$StatusViewerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StatusViewer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusViewerFindUniqueOrThrowArgs} args - Arguments to find a StatusViewer
     * @example
     * // Get one StatusViewer
     * const statusViewer = await prisma.statusViewer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusViewerFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusViewerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusViewerClient<$Result.GetResult<Prisma.$StatusViewerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusViewer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusViewerFindFirstArgs} args - Arguments to find a StatusViewer
     * @example
     * // Get one StatusViewer
     * const statusViewer = await prisma.statusViewer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusViewerFindFirstArgs>(args?: SelectSubset<T, StatusViewerFindFirstArgs<ExtArgs>>): Prisma__StatusViewerClient<$Result.GetResult<Prisma.$StatusViewerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StatusViewer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusViewerFindFirstOrThrowArgs} args - Arguments to find a StatusViewer
     * @example
     * // Get one StatusViewer
     * const statusViewer = await prisma.statusViewer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusViewerFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusViewerFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusViewerClient<$Result.GetResult<Prisma.$StatusViewerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StatusViewers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusViewerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusViewers
     * const statusViewers = await prisma.statusViewer.findMany()
     * 
     * // Get first 10 StatusViewers
     * const statusViewers = await prisma.statusViewer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusViewerWithIdOnly = await prisma.statusViewer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusViewerFindManyArgs>(args?: SelectSubset<T, StatusViewerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusViewerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StatusViewer.
     * @param {StatusViewerCreateArgs} args - Arguments to create a StatusViewer.
     * @example
     * // Create one StatusViewer
     * const StatusViewer = await prisma.statusViewer.create({
     *   data: {
     *     // ... data to create a StatusViewer
     *   }
     * })
     * 
     */
    create<T extends StatusViewerCreateArgs>(args: SelectSubset<T, StatusViewerCreateArgs<ExtArgs>>): Prisma__StatusViewerClient<$Result.GetResult<Prisma.$StatusViewerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StatusViewers.
     * @param {StatusViewerCreateManyArgs} args - Arguments to create many StatusViewers.
     * @example
     * // Create many StatusViewers
     * const statusViewer = await prisma.statusViewer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusViewerCreateManyArgs>(args?: SelectSubset<T, StatusViewerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StatusViewers and returns the data saved in the database.
     * @param {StatusViewerCreateManyAndReturnArgs} args - Arguments to create many StatusViewers.
     * @example
     * // Create many StatusViewers
     * const statusViewer = await prisma.statusViewer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StatusViewers and only return the `id`
     * const statusViewerWithIdOnly = await prisma.statusViewer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusViewerCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusViewerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusViewerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StatusViewer.
     * @param {StatusViewerDeleteArgs} args - Arguments to delete one StatusViewer.
     * @example
     * // Delete one StatusViewer
     * const StatusViewer = await prisma.statusViewer.delete({
     *   where: {
     *     // ... filter to delete one StatusViewer
     *   }
     * })
     * 
     */
    delete<T extends StatusViewerDeleteArgs>(args: SelectSubset<T, StatusViewerDeleteArgs<ExtArgs>>): Prisma__StatusViewerClient<$Result.GetResult<Prisma.$StatusViewerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StatusViewer.
     * @param {StatusViewerUpdateArgs} args - Arguments to update one StatusViewer.
     * @example
     * // Update one StatusViewer
     * const statusViewer = await prisma.statusViewer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusViewerUpdateArgs>(args: SelectSubset<T, StatusViewerUpdateArgs<ExtArgs>>): Prisma__StatusViewerClient<$Result.GetResult<Prisma.$StatusViewerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StatusViewers.
     * @param {StatusViewerDeleteManyArgs} args - Arguments to filter StatusViewers to delete.
     * @example
     * // Delete a few StatusViewers
     * const { count } = await prisma.statusViewer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusViewerDeleteManyArgs>(args?: SelectSubset<T, StatusViewerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusViewers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusViewerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusViewers
     * const statusViewer = await prisma.statusViewer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusViewerUpdateManyArgs>(args: SelectSubset<T, StatusViewerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusViewers and returns the data updated in the database.
     * @param {StatusViewerUpdateManyAndReturnArgs} args - Arguments to update many StatusViewers.
     * @example
     * // Update many StatusViewers
     * const statusViewer = await prisma.statusViewer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StatusViewers and only return the `id`
     * const statusViewerWithIdOnly = await prisma.statusViewer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatusViewerUpdateManyAndReturnArgs>(args: SelectSubset<T, StatusViewerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusViewerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StatusViewer.
     * @param {StatusViewerUpsertArgs} args - Arguments to update or create a StatusViewer.
     * @example
     * // Update or create a StatusViewer
     * const statusViewer = await prisma.statusViewer.upsert({
     *   create: {
     *     // ... data to create a StatusViewer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusViewer we want to update
     *   }
     * })
     */
    upsert<T extends StatusViewerUpsertArgs>(args: SelectSubset<T, StatusViewerUpsertArgs<ExtArgs>>): Prisma__StatusViewerClient<$Result.GetResult<Prisma.$StatusViewerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StatusViewers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusViewerCountArgs} args - Arguments to filter StatusViewers to count.
     * @example
     * // Count the number of StatusViewers
     * const count = await prisma.statusViewer.count({
     *   where: {
     *     // ... the filter for the StatusViewers we want to count
     *   }
     * })
    **/
    count<T extends StatusViewerCountArgs>(
      args?: Subset<T, StatusViewerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusViewerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusViewer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusViewerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusViewerAggregateArgs>(args: Subset<T, StatusViewerAggregateArgs>): Prisma.PrismaPromise<GetStatusViewerAggregateType<T>>

    /**
     * Group by StatusViewer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusViewerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusViewerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusViewerGroupByArgs['orderBy'] }
        : { orderBy?: StatusViewerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusViewerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusViewerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusViewer model
   */
  readonly fields: StatusViewerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusViewer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusViewerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    status<T extends StatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StatusDefaultArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StatusViewer model
   */
  interface StatusViewerFieldRefs {
    readonly id: FieldRef<"StatusViewer", 'String'>
    readonly statusId: FieldRef<"StatusViewer", 'String'>
    readonly userId: FieldRef<"StatusViewer", 'String'>
    readonly viewedAt: FieldRef<"StatusViewer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StatusViewer findUnique
   */
  export type StatusViewerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusViewer
     */
    select?: StatusViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusViewer
     */
    omit?: StatusViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusViewerInclude<ExtArgs> | null
    /**
     * Filter, which StatusViewer to fetch.
     */
    where: StatusViewerWhereUniqueInput
  }

  /**
   * StatusViewer findUniqueOrThrow
   */
  export type StatusViewerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusViewer
     */
    select?: StatusViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusViewer
     */
    omit?: StatusViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusViewerInclude<ExtArgs> | null
    /**
     * Filter, which StatusViewer to fetch.
     */
    where: StatusViewerWhereUniqueInput
  }

  /**
   * StatusViewer findFirst
   */
  export type StatusViewerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusViewer
     */
    select?: StatusViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusViewer
     */
    omit?: StatusViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusViewerInclude<ExtArgs> | null
    /**
     * Filter, which StatusViewer to fetch.
     */
    where?: StatusViewerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusViewers to fetch.
     */
    orderBy?: StatusViewerOrderByWithRelationInput | StatusViewerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusViewers.
     */
    cursor?: StatusViewerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusViewers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusViewers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusViewers.
     */
    distinct?: StatusViewerScalarFieldEnum | StatusViewerScalarFieldEnum[]
  }

  /**
   * StatusViewer findFirstOrThrow
   */
  export type StatusViewerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusViewer
     */
    select?: StatusViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusViewer
     */
    omit?: StatusViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusViewerInclude<ExtArgs> | null
    /**
     * Filter, which StatusViewer to fetch.
     */
    where?: StatusViewerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusViewers to fetch.
     */
    orderBy?: StatusViewerOrderByWithRelationInput | StatusViewerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusViewers.
     */
    cursor?: StatusViewerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusViewers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusViewers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusViewers.
     */
    distinct?: StatusViewerScalarFieldEnum | StatusViewerScalarFieldEnum[]
  }

  /**
   * StatusViewer findMany
   */
  export type StatusViewerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusViewer
     */
    select?: StatusViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusViewer
     */
    omit?: StatusViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusViewerInclude<ExtArgs> | null
    /**
     * Filter, which StatusViewers to fetch.
     */
    where?: StatusViewerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusViewers to fetch.
     */
    orderBy?: StatusViewerOrderByWithRelationInput | StatusViewerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusViewers.
     */
    cursor?: StatusViewerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusViewers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusViewers.
     */
    skip?: number
    distinct?: StatusViewerScalarFieldEnum | StatusViewerScalarFieldEnum[]
  }

  /**
   * StatusViewer create
   */
  export type StatusViewerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusViewer
     */
    select?: StatusViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusViewer
     */
    omit?: StatusViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusViewerInclude<ExtArgs> | null
    /**
     * The data needed to create a StatusViewer.
     */
    data: XOR<StatusViewerCreateInput, StatusViewerUncheckedCreateInput>
  }

  /**
   * StatusViewer createMany
   */
  export type StatusViewerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusViewers.
     */
    data: StatusViewerCreateManyInput | StatusViewerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StatusViewer createManyAndReturn
   */
  export type StatusViewerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusViewer
     */
    select?: StatusViewerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatusViewer
     */
    omit?: StatusViewerOmit<ExtArgs> | null
    /**
     * The data used to create many StatusViewers.
     */
    data: StatusViewerCreateManyInput | StatusViewerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusViewerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StatusViewer update
   */
  export type StatusViewerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusViewer
     */
    select?: StatusViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusViewer
     */
    omit?: StatusViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusViewerInclude<ExtArgs> | null
    /**
     * The data needed to update a StatusViewer.
     */
    data: XOR<StatusViewerUpdateInput, StatusViewerUncheckedUpdateInput>
    /**
     * Choose, which StatusViewer to update.
     */
    where: StatusViewerWhereUniqueInput
  }

  /**
   * StatusViewer updateMany
   */
  export type StatusViewerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusViewers.
     */
    data: XOR<StatusViewerUpdateManyMutationInput, StatusViewerUncheckedUpdateManyInput>
    /**
     * Filter which StatusViewers to update
     */
    where?: StatusViewerWhereInput
    /**
     * Limit how many StatusViewers to update.
     */
    limit?: number
  }

  /**
   * StatusViewer updateManyAndReturn
   */
  export type StatusViewerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusViewer
     */
    select?: StatusViewerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StatusViewer
     */
    omit?: StatusViewerOmit<ExtArgs> | null
    /**
     * The data used to update StatusViewers.
     */
    data: XOR<StatusViewerUpdateManyMutationInput, StatusViewerUncheckedUpdateManyInput>
    /**
     * Filter which StatusViewers to update
     */
    where?: StatusViewerWhereInput
    /**
     * Limit how many StatusViewers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusViewerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StatusViewer upsert
   */
  export type StatusViewerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusViewer
     */
    select?: StatusViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusViewer
     */
    omit?: StatusViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusViewerInclude<ExtArgs> | null
    /**
     * The filter to search for the StatusViewer to update in case it exists.
     */
    where: StatusViewerWhereUniqueInput
    /**
     * In case the StatusViewer found by the `where` argument doesn't exist, create a new StatusViewer with this data.
     */
    create: XOR<StatusViewerCreateInput, StatusViewerUncheckedCreateInput>
    /**
     * In case the StatusViewer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusViewerUpdateInput, StatusViewerUncheckedUpdateInput>
  }

  /**
   * StatusViewer delete
   */
  export type StatusViewerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusViewer
     */
    select?: StatusViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusViewer
     */
    omit?: StatusViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusViewerInclude<ExtArgs> | null
    /**
     * Filter which StatusViewer to delete.
     */
    where: StatusViewerWhereUniqueInput
  }

  /**
   * StatusViewer deleteMany
   */
  export type StatusViewerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusViewers to delete
     */
    where?: StatusViewerWhereInput
    /**
     * Limit how many StatusViewers to delete.
     */
    limit?: number
  }

  /**
   * StatusViewer without action
   */
  export type StatusViewerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusViewer
     */
    select?: StatusViewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StatusViewer
     */
    omit?: StatusViewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusViewerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    phoneNumber: 'phoneNumber',
    email: 'email',
    password: 'password',
    profilePicUrl: 'profilePicUrl',
    about: 'about',
    isOnline: 'isOnline',
    lastSeen: 'lastSeen',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    isGroup: 'isGroup',
    groupName: 'groupName',
    groupIcon: 'groupIcon',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const ChatUserScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    userId: 'userId',
    role: 'role',
    joinedAt: 'joinedAt'
  };

  export type ChatUserScalarFieldEnum = (typeof ChatUserScalarFieldEnum)[keyof typeof ChatUserScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    type: 'type',
    mediaUrl: 'mediaUrl',
    senderId: 'senderId',
    chatId: 'chatId',
    sentAt: 'sentAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SeenMessageScalarFieldEnum: {
    id: 'id',
    messageId: 'messageId',
    userId: 'userId',
    seenAt: 'seenAt'
  };

  export type SeenMessageScalarFieldEnum = (typeof SeenMessageScalarFieldEnum)[keyof typeof SeenMessageScalarFieldEnum]


  export const StatusScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    mediaUrl: 'mediaUrl',
    caption: 'caption',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type StatusScalarFieldEnum = (typeof StatusScalarFieldEnum)[keyof typeof StatusScalarFieldEnum]


  export const StatusViewerScalarFieldEnum: {
    id: 'id',
    statusId: 'statusId',
    userId: 'userId',
    viewedAt: 'viewedAt'
  };

  export type StatusViewerScalarFieldEnum = (typeof StatusViewerScalarFieldEnum)[keyof typeof StatusViewerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageType[]'
   */
  export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profilePicUrl?: StringNullableFilter<"User"> | string | null
    about?: StringNullableFilter<"User"> | string | null
    isOnline?: BoolFilter<"User"> | boolean
    lastSeen?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    statuses?: StatusListRelationFilter
    messages?: MessageListRelationFilter
    chatUsers?: ChatUserListRelationFilter
    seenMessages?: SeenMessageListRelationFilter
    statusViews?: StatusViewerListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicUrl?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    statuses?: StatusOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    chatUsers?: ChatUserOrderByRelationAggregateInput
    seenMessages?: SeenMessageOrderByRelationAggregateInput
    statusViews?: StatusViewerOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    phoneNumber?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    profilePicUrl?: StringNullableFilter<"User"> | string | null
    about?: StringNullableFilter<"User"> | string | null
    isOnline?: BoolFilter<"User"> | boolean
    lastSeen?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    statuses?: StatusListRelationFilter
    messages?: MessageListRelationFilter
    chatUsers?: ChatUserListRelationFilter
    seenMessages?: SeenMessageListRelationFilter
    statusViews?: StatusViewerListRelationFilter
  }, "id" | "username" | "phoneNumber" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicUrl?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    profilePicUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    about?: StringNullableWithAggregatesFilter<"User"> | string | null
    isOnline?: BoolWithAggregatesFilter<"User"> | boolean
    lastSeen?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    isGroup?: BoolFilter<"Chat"> | boolean
    groupName?: StringNullableFilter<"Chat"> | string | null
    groupIcon?: StringNullableFilter<"Chat"> | string | null
    createdBy?: StringNullableFilter<"Chat"> | string | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    messages?: MessageListRelationFilter
    users?: ChatUserListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    isGroup?: SortOrder
    groupName?: SortOrderInput | SortOrder
    groupIcon?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
    users?: ChatUserOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    isGroup?: BoolFilter<"Chat"> | boolean
    groupName?: StringNullableFilter<"Chat"> | string | null
    groupIcon?: StringNullableFilter<"Chat"> | string | null
    createdBy?: StringNullableFilter<"Chat"> | string | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    messages?: MessageListRelationFilter
    users?: ChatUserListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    isGroup?: SortOrder
    groupName?: SortOrderInput | SortOrder
    groupIcon?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    isGroup?: BoolWithAggregatesFilter<"Chat"> | boolean
    groupName?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    groupIcon?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    createdBy?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type ChatUserWhereInput = {
    AND?: ChatUserWhereInput | ChatUserWhereInput[]
    OR?: ChatUserWhereInput[]
    NOT?: ChatUserWhereInput | ChatUserWhereInput[]
    id?: StringFilter<"ChatUser"> | string
    chatId?: StringFilter<"ChatUser"> | string
    userId?: StringFilter<"ChatUser"> | string
    role?: StringFilter<"ChatUser"> | string
    joinedAt?: DateTimeFilter<"ChatUser"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatUserOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    chat?: ChatOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ChatUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chatId_userId?: ChatUserChatIdUserIdCompoundUniqueInput
    AND?: ChatUserWhereInput | ChatUserWhereInput[]
    OR?: ChatUserWhereInput[]
    NOT?: ChatUserWhereInput | ChatUserWhereInput[]
    chatId?: StringFilter<"ChatUser"> | string
    userId?: StringFilter<"ChatUser"> | string
    role?: StringFilter<"ChatUser"> | string
    joinedAt?: DateTimeFilter<"ChatUser"> | Date | string
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "chatId_userId">

  export type ChatUserOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    _count?: ChatUserCountOrderByAggregateInput
    _max?: ChatUserMaxOrderByAggregateInput
    _min?: ChatUserMinOrderByAggregateInput
  }

  export type ChatUserScalarWhereWithAggregatesInput = {
    AND?: ChatUserScalarWhereWithAggregatesInput | ChatUserScalarWhereWithAggregatesInput[]
    OR?: ChatUserScalarWhereWithAggregatesInput[]
    NOT?: ChatUserScalarWhereWithAggregatesInput | ChatUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatUser"> | string
    chatId?: StringWithAggregatesFilter<"ChatUser"> | string
    userId?: StringWithAggregatesFilter<"ChatUser"> | string
    role?: StringWithAggregatesFilter<"ChatUser"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"ChatUser"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringNullableFilter<"Message"> | string | null
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    mediaUrl?: StringNullableFilter<"Message"> | string | null
    senderId?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    sentAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    seenBy?: SeenMessageListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrderInput | SortOrder
    type?: SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
    sentAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    chat?: ChatOrderByWithRelationInput
    seenBy?: SeenMessageOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringNullableFilter<"Message"> | string | null
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    mediaUrl?: StringNullableFilter<"Message"> | string | null
    senderId?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    sentAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    seenBy?: SeenMessageListRelationFilter
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrderInput | SortOrder
    type?: SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
    sentAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringNullableWithAggregatesFilter<"Message"> | string | null
    type?: EnumMessageTypeWithAggregatesFilter<"Message"> | $Enums.MessageType
    mediaUrl?: StringNullableWithAggregatesFilter<"Message"> | string | null
    senderId?: StringWithAggregatesFilter<"Message"> | string
    chatId?: StringWithAggregatesFilter<"Message"> | string
    sentAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type SeenMessageWhereInput = {
    AND?: SeenMessageWhereInput | SeenMessageWhereInput[]
    OR?: SeenMessageWhereInput[]
    NOT?: SeenMessageWhereInput | SeenMessageWhereInput[]
    id?: StringFilter<"SeenMessage"> | string
    messageId?: StringFilter<"SeenMessage"> | string
    userId?: StringFilter<"SeenMessage"> | string
    seenAt?: DateTimeFilter<"SeenMessage"> | Date | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SeenMessageOrderByWithRelationInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    seenAt?: SortOrder
    message?: MessageOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SeenMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    messageId_userId?: SeenMessageMessageIdUserIdCompoundUniqueInput
    AND?: SeenMessageWhereInput | SeenMessageWhereInput[]
    OR?: SeenMessageWhereInput[]
    NOT?: SeenMessageWhereInput | SeenMessageWhereInput[]
    messageId?: StringFilter<"SeenMessage"> | string
    userId?: StringFilter<"SeenMessage"> | string
    seenAt?: DateTimeFilter<"SeenMessage"> | Date | string
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "messageId_userId">

  export type SeenMessageOrderByWithAggregationInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    seenAt?: SortOrder
    _count?: SeenMessageCountOrderByAggregateInput
    _max?: SeenMessageMaxOrderByAggregateInput
    _min?: SeenMessageMinOrderByAggregateInput
  }

  export type SeenMessageScalarWhereWithAggregatesInput = {
    AND?: SeenMessageScalarWhereWithAggregatesInput | SeenMessageScalarWhereWithAggregatesInput[]
    OR?: SeenMessageScalarWhereWithAggregatesInput[]
    NOT?: SeenMessageScalarWhereWithAggregatesInput | SeenMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SeenMessage"> | string
    messageId?: StringWithAggregatesFilter<"SeenMessage"> | string
    userId?: StringWithAggregatesFilter<"SeenMessage"> | string
    seenAt?: DateTimeWithAggregatesFilter<"SeenMessage"> | Date | string
  }

  export type StatusWhereInput = {
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    id?: StringFilter<"Status"> | string
    userId?: StringFilter<"Status"> | string
    mediaUrl?: StringFilter<"Status"> | string
    caption?: StringNullableFilter<"Status"> | string | null
    expiresAt?: DateTimeFilter<"Status"> | Date | string
    createdAt?: DateTimeFilter<"Status"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    viewers?: StatusViewerListRelationFilter
  }

  export type StatusOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    mediaUrl?: SortOrder
    caption?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    viewers?: StatusViewerOrderByRelationAggregateInput
  }

  export type StatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    userId?: StringFilter<"Status"> | string
    mediaUrl?: StringFilter<"Status"> | string
    caption?: StringNullableFilter<"Status"> | string | null
    expiresAt?: DateTimeFilter<"Status"> | Date | string
    createdAt?: DateTimeFilter<"Status"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    viewers?: StatusViewerListRelationFilter
  }, "id">

  export type StatusOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    mediaUrl?: SortOrder
    caption?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: StatusCountOrderByAggregateInput
    _max?: StatusMaxOrderByAggregateInput
    _min?: StatusMinOrderByAggregateInput
  }

  export type StatusScalarWhereWithAggregatesInput = {
    AND?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    OR?: StatusScalarWhereWithAggregatesInput[]
    NOT?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Status"> | string
    userId?: StringWithAggregatesFilter<"Status"> | string
    mediaUrl?: StringWithAggregatesFilter<"Status"> | string
    caption?: StringNullableWithAggregatesFilter<"Status"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"Status"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Status"> | Date | string
  }

  export type StatusViewerWhereInput = {
    AND?: StatusViewerWhereInput | StatusViewerWhereInput[]
    OR?: StatusViewerWhereInput[]
    NOT?: StatusViewerWhereInput | StatusViewerWhereInput[]
    id?: StringFilter<"StatusViewer"> | string
    statusId?: StringFilter<"StatusViewer"> | string
    userId?: StringFilter<"StatusViewer"> | string
    viewedAt?: DateTimeFilter<"StatusViewer"> | Date | string
    status?: XOR<StatusScalarRelationFilter, StatusWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StatusViewerOrderByWithRelationInput = {
    id?: SortOrder
    statusId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
    status?: StatusOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type StatusViewerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    statusId_userId?: StatusViewerStatusIdUserIdCompoundUniqueInput
    AND?: StatusViewerWhereInput | StatusViewerWhereInput[]
    OR?: StatusViewerWhereInput[]
    NOT?: StatusViewerWhereInput | StatusViewerWhereInput[]
    statusId?: StringFilter<"StatusViewer"> | string
    userId?: StringFilter<"StatusViewer"> | string
    viewedAt?: DateTimeFilter<"StatusViewer"> | Date | string
    status?: XOR<StatusScalarRelationFilter, StatusWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "statusId_userId">

  export type StatusViewerOrderByWithAggregationInput = {
    id?: SortOrder
    statusId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
    _count?: StatusViewerCountOrderByAggregateInput
    _max?: StatusViewerMaxOrderByAggregateInput
    _min?: StatusViewerMinOrderByAggregateInput
  }

  export type StatusViewerScalarWhereWithAggregatesInput = {
    AND?: StatusViewerScalarWhereWithAggregatesInput | StatusViewerScalarWhereWithAggregatesInput[]
    OR?: StatusViewerScalarWhereWithAggregatesInput[]
    NOT?: StatusViewerScalarWhereWithAggregatesInput | StatusViewerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StatusViewer"> | string
    statusId?: StringWithAggregatesFilter<"StatusViewer"> | string
    userId?: StringWithAggregatesFilter<"StatusViewer"> | string
    viewedAt?: DateTimeWithAggregatesFilter<"StatusViewer"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    phoneNumber: string
    email: string
    password: string
    profilePicUrl?: string | null
    about?: string | null
    isOnline?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    statuses?: StatusCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    chatUsers?: ChatUserCreateNestedManyWithoutUserInput
    seenMessages?: SeenMessageCreateNestedManyWithoutUserInput
    statusViews?: StatusViewerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    phoneNumber: string
    email: string
    password: string
    profilePicUrl?: string | null
    about?: string | null
    isOnline?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    statuses?: StatusUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    chatUsers?: ChatUserUncheckedCreateNestedManyWithoutUserInput
    seenMessages?: SeenMessageUncheckedCreateNestedManyWithoutUserInput
    statusViews?: StatusViewerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statuses?: StatusUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    chatUsers?: ChatUserUpdateManyWithoutUserNestedInput
    seenMessages?: SeenMessageUpdateManyWithoutUserNestedInput
    statusViews?: StatusViewerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statuses?: StatusUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    chatUsers?: ChatUserUncheckedUpdateManyWithoutUserNestedInput
    seenMessages?: SeenMessageUncheckedUpdateManyWithoutUserNestedInput
    statusViews?: StatusViewerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    phoneNumber: string
    email: string
    password: string
    profilePicUrl?: string | null
    about?: string | null
    isOnline?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    id?: string
    isGroup?: boolean
    groupName?: string | null
    groupIcon?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatInput
    users?: ChatUserCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    isGroup?: boolean
    groupName?: string | null
    groupIcon?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    users?: ChatUserUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    groupIcon?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatNestedInput
    users?: ChatUserUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    groupIcon?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    users?: ChatUserUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    isGroup?: boolean
    groupName?: string | null
    groupIcon?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    groupIcon?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    groupIcon?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUserCreateInput = {
    id?: string
    role: string
    joinedAt?: Date | string
    chat: ChatCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutChatUsersInput
  }

  export type ChatUserUncheckedCreateInput = {
    id?: string
    chatId: string
    userId: string
    role: string
    joinedAt?: Date | string
  }

  export type ChatUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutChatUsersNestedInput
  }

  export type ChatUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUserCreateManyInput = {
    id?: string
    chatId: string
    userId: string
    role: string
    joinedAt?: Date | string
  }

  export type ChatUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    content?: string | null
    type?: $Enums.MessageType
    mediaUrl?: string | null
    sentAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
    chat: ChatCreateNestedOneWithoutMessagesInput
    seenBy?: SeenMessageCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content?: string | null
    type?: $Enums.MessageType
    mediaUrl?: string | null
    senderId: string
    chatId: string
    sentAt?: Date | string
    seenBy?: SeenMessageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    seenBy?: SeenMessageUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seenBy?: SeenMessageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: string
    content?: string | null
    type?: $Enums.MessageType
    mediaUrl?: string | null
    senderId: string
    chatId: string
    sentAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeenMessageCreateInput = {
    id?: string
    seenAt?: Date | string
    message: MessageCreateNestedOneWithoutSeenByInput
    user: UserCreateNestedOneWithoutSeenMessagesInput
  }

  export type SeenMessageUncheckedCreateInput = {
    id?: string
    messageId: string
    userId: string
    seenAt?: Date | string
  }

  export type SeenMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutSeenByNestedInput
    user?: UserUpdateOneRequiredWithoutSeenMessagesNestedInput
  }

  export type SeenMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeenMessageCreateManyInput = {
    id?: string
    messageId: string
    userId: string
    seenAt?: Date | string
  }

  export type SeenMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeenMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusCreateInput = {
    id?: string
    mediaUrl: string
    caption?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStatusesInput
    viewers?: StatusViewerCreateNestedManyWithoutStatusInput
  }

  export type StatusUncheckedCreateInput = {
    id?: string
    userId: string
    mediaUrl: string
    caption?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    viewers?: StatusViewerUncheckedCreateNestedManyWithoutStatusInput
  }

  export type StatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStatusesNestedInput
    viewers?: StatusViewerUpdateManyWithoutStatusNestedInput
  }

  export type StatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewers?: StatusViewerUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type StatusCreateManyInput = {
    id?: string
    userId: string
    mediaUrl: string
    caption?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type StatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusViewerCreateInput = {
    id?: string
    viewedAt?: Date | string
    status: StatusCreateNestedOneWithoutViewersInput
    user: UserCreateNestedOneWithoutStatusViewsInput
  }

  export type StatusViewerUncheckedCreateInput = {
    id?: string
    statusId: string
    userId: string
    viewedAt?: Date | string
  }

  export type StatusViewerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StatusUpdateOneRequiredWithoutViewersNestedInput
    user?: UserUpdateOneRequiredWithoutStatusViewsNestedInput
  }

  export type StatusViewerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusViewerCreateManyInput = {
    id?: string
    statusId: string
    userId: string
    viewedAt?: Date | string
  }

  export type StatusViewerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusViewerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StatusListRelationFilter = {
    every?: StatusWhereInput
    some?: StatusWhereInput
    none?: StatusWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type ChatUserListRelationFilter = {
    every?: ChatUserWhereInput
    some?: ChatUserWhereInput
    none?: ChatUserWhereInput
  }

  export type SeenMessageListRelationFilter = {
    every?: SeenMessageWhereInput
    some?: SeenMessageWhereInput
    none?: SeenMessageWhereInput
  }

  export type StatusViewerListRelationFilter = {
    every?: StatusViewerWhereInput
    some?: StatusViewerWhereInput
    none?: StatusViewerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeenMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatusViewerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicUrl?: SortOrder
    about?: SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicUrl?: SortOrder
    about?: SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicUrl?: SortOrder
    about?: SortOrder
    isOnline?: SortOrder
    lastSeen?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    isGroup?: SortOrder
    groupName?: SortOrder
    groupIcon?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    isGroup?: SortOrder
    groupName?: SortOrder
    groupIcon?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    isGroup?: SortOrder
    groupName?: SortOrder
    groupIcon?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChatUserChatIdUserIdCompoundUniqueInput = {
    chatId: string
    userId: string
  }

  export type ChatUserCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type ChatUserMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type ChatUserMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    mediaUrl?: SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
    sentAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    mediaUrl?: SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
    sentAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    type?: SortOrder
    mediaUrl?: SortOrder
    senderId?: SortOrder
    chatId?: SortOrder
    sentAt?: SortOrder
  }

  export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type MessageScalarRelationFilter = {
    is?: MessageWhereInput
    isNot?: MessageWhereInput
  }

  export type SeenMessageMessageIdUserIdCompoundUniqueInput = {
    messageId: string
    userId: string
  }

  export type SeenMessageCountOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    seenAt?: SortOrder
  }

  export type SeenMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    seenAt?: SortOrder
  }

  export type SeenMessageMinOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    userId?: SortOrder
    seenAt?: SortOrder
  }

  export type StatusCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mediaUrl?: SortOrder
    caption?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StatusMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mediaUrl?: SortOrder
    caption?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StatusMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mediaUrl?: SortOrder
    caption?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StatusScalarRelationFilter = {
    is?: StatusWhereInput
    isNot?: StatusWhereInput
  }

  export type StatusViewerStatusIdUserIdCompoundUniqueInput = {
    statusId: string
    userId: string
  }

  export type StatusViewerCountOrderByAggregateInput = {
    id?: SortOrder
    statusId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
  }

  export type StatusViewerMaxOrderByAggregateInput = {
    id?: SortOrder
    statusId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
  }

  export type StatusViewerMinOrderByAggregateInput = {
    id?: SortOrder
    statusId?: SortOrder
    userId?: SortOrder
    viewedAt?: SortOrder
  }

  export type StatusCreateNestedManyWithoutUserInput = {
    create?: XOR<StatusCreateWithoutUserInput, StatusUncheckedCreateWithoutUserInput> | StatusCreateWithoutUserInput[] | StatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatusCreateOrConnectWithoutUserInput | StatusCreateOrConnectWithoutUserInput[]
    createMany?: StatusCreateManyUserInputEnvelope
    connect?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatUserCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatUserCreateWithoutUserInput, ChatUserUncheckedCreateWithoutUserInput> | ChatUserCreateWithoutUserInput[] | ChatUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutUserInput | ChatUserCreateOrConnectWithoutUserInput[]
    createMany?: ChatUserCreateManyUserInputEnvelope
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
  }

  export type SeenMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<SeenMessageCreateWithoutUserInput, SeenMessageUncheckedCreateWithoutUserInput> | SeenMessageCreateWithoutUserInput[] | SeenMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeenMessageCreateOrConnectWithoutUserInput | SeenMessageCreateOrConnectWithoutUserInput[]
    createMany?: SeenMessageCreateManyUserInputEnvelope
    connect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
  }

  export type StatusViewerCreateNestedManyWithoutUserInput = {
    create?: XOR<StatusViewerCreateWithoutUserInput, StatusViewerUncheckedCreateWithoutUserInput> | StatusViewerCreateWithoutUserInput[] | StatusViewerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatusViewerCreateOrConnectWithoutUserInput | StatusViewerCreateOrConnectWithoutUserInput[]
    createMany?: StatusViewerCreateManyUserInputEnvelope
    connect?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
  }

  export type StatusUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StatusCreateWithoutUserInput, StatusUncheckedCreateWithoutUserInput> | StatusCreateWithoutUserInput[] | StatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatusCreateOrConnectWithoutUserInput | StatusCreateOrConnectWithoutUserInput[]
    createMany?: StatusCreateManyUserInputEnvelope
    connect?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatUserCreateWithoutUserInput, ChatUserUncheckedCreateWithoutUserInput> | ChatUserCreateWithoutUserInput[] | ChatUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutUserInput | ChatUserCreateOrConnectWithoutUserInput[]
    createMany?: ChatUserCreateManyUserInputEnvelope
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
  }

  export type SeenMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SeenMessageCreateWithoutUserInput, SeenMessageUncheckedCreateWithoutUserInput> | SeenMessageCreateWithoutUserInput[] | SeenMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeenMessageCreateOrConnectWithoutUserInput | SeenMessageCreateOrConnectWithoutUserInput[]
    createMany?: SeenMessageCreateManyUserInputEnvelope
    connect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
  }

  export type StatusViewerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StatusViewerCreateWithoutUserInput, StatusViewerUncheckedCreateWithoutUserInput> | StatusViewerCreateWithoutUserInput[] | StatusViewerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatusViewerCreateOrConnectWithoutUserInput | StatusViewerCreateOrConnectWithoutUserInput[]
    createMany?: StatusViewerCreateManyUserInputEnvelope
    connect?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StatusUpdateManyWithoutUserNestedInput = {
    create?: XOR<StatusCreateWithoutUserInput, StatusUncheckedCreateWithoutUserInput> | StatusCreateWithoutUserInput[] | StatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatusCreateOrConnectWithoutUserInput | StatusCreateOrConnectWithoutUserInput[]
    upsert?: StatusUpsertWithWhereUniqueWithoutUserInput | StatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StatusCreateManyUserInputEnvelope
    set?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
    disconnect?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
    delete?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
    connect?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
    update?: StatusUpdateWithWhereUniqueWithoutUserInput | StatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StatusUpdateManyWithWhereWithoutUserInput | StatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StatusScalarWhereInput | StatusScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatUserCreateWithoutUserInput, ChatUserUncheckedCreateWithoutUserInput> | ChatUserCreateWithoutUserInput[] | ChatUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutUserInput | ChatUserCreateOrConnectWithoutUserInput[]
    upsert?: ChatUserUpsertWithWhereUniqueWithoutUserInput | ChatUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatUserCreateManyUserInputEnvelope
    set?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    disconnect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    delete?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    update?: ChatUserUpdateWithWhereUniqueWithoutUserInput | ChatUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatUserUpdateManyWithWhereWithoutUserInput | ChatUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatUserScalarWhereInput | ChatUserScalarWhereInput[]
  }

  export type SeenMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<SeenMessageCreateWithoutUserInput, SeenMessageUncheckedCreateWithoutUserInput> | SeenMessageCreateWithoutUserInput[] | SeenMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeenMessageCreateOrConnectWithoutUserInput | SeenMessageCreateOrConnectWithoutUserInput[]
    upsert?: SeenMessageUpsertWithWhereUniqueWithoutUserInput | SeenMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SeenMessageCreateManyUserInputEnvelope
    set?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    disconnect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    delete?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    connect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    update?: SeenMessageUpdateWithWhereUniqueWithoutUserInput | SeenMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SeenMessageUpdateManyWithWhereWithoutUserInput | SeenMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SeenMessageScalarWhereInput | SeenMessageScalarWhereInput[]
  }

  export type StatusViewerUpdateManyWithoutUserNestedInput = {
    create?: XOR<StatusViewerCreateWithoutUserInput, StatusViewerUncheckedCreateWithoutUserInput> | StatusViewerCreateWithoutUserInput[] | StatusViewerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatusViewerCreateOrConnectWithoutUserInput | StatusViewerCreateOrConnectWithoutUserInput[]
    upsert?: StatusViewerUpsertWithWhereUniqueWithoutUserInput | StatusViewerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StatusViewerCreateManyUserInputEnvelope
    set?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
    disconnect?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
    delete?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
    connect?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
    update?: StatusViewerUpdateWithWhereUniqueWithoutUserInput | StatusViewerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StatusViewerUpdateManyWithWhereWithoutUserInput | StatusViewerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StatusViewerScalarWhereInput | StatusViewerScalarWhereInput[]
  }

  export type StatusUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StatusCreateWithoutUserInput, StatusUncheckedCreateWithoutUserInput> | StatusCreateWithoutUserInput[] | StatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatusCreateOrConnectWithoutUserInput | StatusCreateOrConnectWithoutUserInput[]
    upsert?: StatusUpsertWithWhereUniqueWithoutUserInput | StatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StatusCreateManyUserInputEnvelope
    set?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
    disconnect?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
    delete?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
    connect?: StatusWhereUniqueInput | StatusWhereUniqueInput[]
    update?: StatusUpdateWithWhereUniqueWithoutUserInput | StatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StatusUpdateManyWithWhereWithoutUserInput | StatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StatusScalarWhereInput | StatusScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatUserCreateWithoutUserInput, ChatUserUncheckedCreateWithoutUserInput> | ChatUserCreateWithoutUserInput[] | ChatUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutUserInput | ChatUserCreateOrConnectWithoutUserInput[]
    upsert?: ChatUserUpsertWithWhereUniqueWithoutUserInput | ChatUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatUserCreateManyUserInputEnvelope
    set?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    disconnect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    delete?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    update?: ChatUserUpdateWithWhereUniqueWithoutUserInput | ChatUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatUserUpdateManyWithWhereWithoutUserInput | ChatUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatUserScalarWhereInput | ChatUserScalarWhereInput[]
  }

  export type SeenMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SeenMessageCreateWithoutUserInput, SeenMessageUncheckedCreateWithoutUserInput> | SeenMessageCreateWithoutUserInput[] | SeenMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeenMessageCreateOrConnectWithoutUserInput | SeenMessageCreateOrConnectWithoutUserInput[]
    upsert?: SeenMessageUpsertWithWhereUniqueWithoutUserInput | SeenMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SeenMessageCreateManyUserInputEnvelope
    set?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    disconnect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    delete?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    connect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    update?: SeenMessageUpdateWithWhereUniqueWithoutUserInput | SeenMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SeenMessageUpdateManyWithWhereWithoutUserInput | SeenMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SeenMessageScalarWhereInput | SeenMessageScalarWhereInput[]
  }

  export type StatusViewerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StatusViewerCreateWithoutUserInput, StatusViewerUncheckedCreateWithoutUserInput> | StatusViewerCreateWithoutUserInput[] | StatusViewerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatusViewerCreateOrConnectWithoutUserInput | StatusViewerCreateOrConnectWithoutUserInput[]
    upsert?: StatusViewerUpsertWithWhereUniqueWithoutUserInput | StatusViewerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StatusViewerCreateManyUserInputEnvelope
    set?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
    disconnect?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
    delete?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
    connect?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
    update?: StatusViewerUpdateWithWhereUniqueWithoutUserInput | StatusViewerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StatusViewerUpdateManyWithWhereWithoutUserInput | StatusViewerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StatusViewerScalarWhereInput | StatusViewerScalarWhereInput[]
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatUserCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatUserCreateWithoutChatInput, ChatUserUncheckedCreateWithoutChatInput> | ChatUserCreateWithoutChatInput[] | ChatUserUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutChatInput | ChatUserCreateOrConnectWithoutChatInput[]
    createMany?: ChatUserCreateManyChatInputEnvelope
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatUserUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatUserCreateWithoutChatInput, ChatUserUncheckedCreateWithoutChatInput> | ChatUserCreateWithoutChatInput[] | ChatUserUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutChatInput | ChatUserCreateOrConnectWithoutChatInput[]
    createMany?: ChatUserCreateManyChatInputEnvelope
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatUserUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatUserCreateWithoutChatInput, ChatUserUncheckedCreateWithoutChatInput> | ChatUserCreateWithoutChatInput[] | ChatUserUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutChatInput | ChatUserCreateOrConnectWithoutChatInput[]
    upsert?: ChatUserUpsertWithWhereUniqueWithoutChatInput | ChatUserUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatUserCreateManyChatInputEnvelope
    set?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    disconnect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    delete?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    update?: ChatUserUpdateWithWhereUniqueWithoutChatInput | ChatUserUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatUserUpdateManyWithWhereWithoutChatInput | ChatUserUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatUserScalarWhereInput | ChatUserScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatUserUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatUserCreateWithoutChatInput, ChatUserUncheckedCreateWithoutChatInput> | ChatUserCreateWithoutChatInput[] | ChatUserUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatUserCreateOrConnectWithoutChatInput | ChatUserCreateOrConnectWithoutChatInput[]
    upsert?: ChatUserUpsertWithWhereUniqueWithoutChatInput | ChatUserUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatUserCreateManyChatInputEnvelope
    set?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    disconnect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    delete?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    connect?: ChatUserWhereUniqueInput | ChatUserWhereUniqueInput[]
    update?: ChatUserUpdateWithWhereUniqueWithoutChatInput | ChatUserUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatUserUpdateManyWithWhereWithoutChatInput | ChatUserUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatUserScalarWhereInput | ChatUserScalarWhereInput[]
  }

  export type ChatCreateNestedOneWithoutUsersInput = {
    create?: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ChatCreateOrConnectWithoutUsersInput
    connect?: ChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChatUsersInput = {
    create?: XOR<UserCreateWithoutChatUsersInput, UserUncheckedCreateWithoutChatUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatUsersInput
    connect?: UserWhereUniqueInput
  }

  export type ChatUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ChatCreateOrConnectWithoutUsersInput
    upsert?: ChatUpsertWithoutUsersInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutUsersInput, ChatUpdateWithoutUsersInput>, ChatUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutChatUsersNestedInput = {
    create?: XOR<UserCreateWithoutChatUsersInput, UserUncheckedCreateWithoutChatUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatUsersInput
    upsert?: UserUpsertWithoutChatUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatUsersInput, UserUpdateWithoutChatUsersInput>, UserUncheckedUpdateWithoutChatUsersInput>
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type SeenMessageCreateNestedManyWithoutMessageInput = {
    create?: XOR<SeenMessageCreateWithoutMessageInput, SeenMessageUncheckedCreateWithoutMessageInput> | SeenMessageCreateWithoutMessageInput[] | SeenMessageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: SeenMessageCreateOrConnectWithoutMessageInput | SeenMessageCreateOrConnectWithoutMessageInput[]
    createMany?: SeenMessageCreateManyMessageInputEnvelope
    connect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
  }

  export type SeenMessageUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<SeenMessageCreateWithoutMessageInput, SeenMessageUncheckedCreateWithoutMessageInput> | SeenMessageCreateWithoutMessageInput[] | SeenMessageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: SeenMessageCreateOrConnectWithoutMessageInput | SeenMessageCreateOrConnectWithoutMessageInput[]
    createMany?: SeenMessageCreateManyMessageInputEnvelope
    connect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
  }

  export type EnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type SeenMessageUpdateManyWithoutMessageNestedInput = {
    create?: XOR<SeenMessageCreateWithoutMessageInput, SeenMessageUncheckedCreateWithoutMessageInput> | SeenMessageCreateWithoutMessageInput[] | SeenMessageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: SeenMessageCreateOrConnectWithoutMessageInput | SeenMessageCreateOrConnectWithoutMessageInput[]
    upsert?: SeenMessageUpsertWithWhereUniqueWithoutMessageInput | SeenMessageUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: SeenMessageCreateManyMessageInputEnvelope
    set?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    disconnect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    delete?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    connect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    update?: SeenMessageUpdateWithWhereUniqueWithoutMessageInput | SeenMessageUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: SeenMessageUpdateManyWithWhereWithoutMessageInput | SeenMessageUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: SeenMessageScalarWhereInput | SeenMessageScalarWhereInput[]
  }

  export type SeenMessageUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<SeenMessageCreateWithoutMessageInput, SeenMessageUncheckedCreateWithoutMessageInput> | SeenMessageCreateWithoutMessageInput[] | SeenMessageUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: SeenMessageCreateOrConnectWithoutMessageInput | SeenMessageCreateOrConnectWithoutMessageInput[]
    upsert?: SeenMessageUpsertWithWhereUniqueWithoutMessageInput | SeenMessageUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: SeenMessageCreateManyMessageInputEnvelope
    set?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    disconnect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    delete?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    connect?: SeenMessageWhereUniqueInput | SeenMessageWhereUniqueInput[]
    update?: SeenMessageUpdateWithWhereUniqueWithoutMessageInput | SeenMessageUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: SeenMessageUpdateManyWithWhereWithoutMessageInput | SeenMessageUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: SeenMessageScalarWhereInput | SeenMessageScalarWhereInput[]
  }

  export type MessageCreateNestedOneWithoutSeenByInput = {
    create?: XOR<MessageCreateWithoutSeenByInput, MessageUncheckedCreateWithoutSeenByInput>
    connectOrCreate?: MessageCreateOrConnectWithoutSeenByInput
    connect?: MessageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSeenMessagesInput = {
    create?: XOR<UserCreateWithoutSeenMessagesInput, UserUncheckedCreateWithoutSeenMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeenMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type MessageUpdateOneRequiredWithoutSeenByNestedInput = {
    create?: XOR<MessageCreateWithoutSeenByInput, MessageUncheckedCreateWithoutSeenByInput>
    connectOrCreate?: MessageCreateOrConnectWithoutSeenByInput
    upsert?: MessageUpsertWithoutSeenByInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutSeenByInput, MessageUpdateWithoutSeenByInput>, MessageUncheckedUpdateWithoutSeenByInput>
  }

  export type UserUpdateOneRequiredWithoutSeenMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSeenMessagesInput, UserUncheckedCreateWithoutSeenMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeenMessagesInput
    upsert?: UserUpsertWithoutSeenMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSeenMessagesInput, UserUpdateWithoutSeenMessagesInput>, UserUncheckedUpdateWithoutSeenMessagesInput>
  }

  export type UserCreateNestedOneWithoutStatusesInput = {
    create?: XOR<UserCreateWithoutStatusesInput, UserUncheckedCreateWithoutStatusesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatusesInput
    connect?: UserWhereUniqueInput
  }

  export type StatusViewerCreateNestedManyWithoutStatusInput = {
    create?: XOR<StatusViewerCreateWithoutStatusInput, StatusViewerUncheckedCreateWithoutStatusInput> | StatusViewerCreateWithoutStatusInput[] | StatusViewerUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: StatusViewerCreateOrConnectWithoutStatusInput | StatusViewerCreateOrConnectWithoutStatusInput[]
    createMany?: StatusViewerCreateManyStatusInputEnvelope
    connect?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
  }

  export type StatusViewerUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<StatusViewerCreateWithoutStatusInput, StatusViewerUncheckedCreateWithoutStatusInput> | StatusViewerCreateWithoutStatusInput[] | StatusViewerUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: StatusViewerCreateOrConnectWithoutStatusInput | StatusViewerCreateOrConnectWithoutStatusInput[]
    createMany?: StatusViewerCreateManyStatusInputEnvelope
    connect?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutStatusesNestedInput = {
    create?: XOR<UserCreateWithoutStatusesInput, UserUncheckedCreateWithoutStatusesInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatusesInput
    upsert?: UserUpsertWithoutStatusesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStatusesInput, UserUpdateWithoutStatusesInput>, UserUncheckedUpdateWithoutStatusesInput>
  }

  export type StatusViewerUpdateManyWithoutStatusNestedInput = {
    create?: XOR<StatusViewerCreateWithoutStatusInput, StatusViewerUncheckedCreateWithoutStatusInput> | StatusViewerCreateWithoutStatusInput[] | StatusViewerUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: StatusViewerCreateOrConnectWithoutStatusInput | StatusViewerCreateOrConnectWithoutStatusInput[]
    upsert?: StatusViewerUpsertWithWhereUniqueWithoutStatusInput | StatusViewerUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: StatusViewerCreateManyStatusInputEnvelope
    set?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
    disconnect?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
    delete?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
    connect?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
    update?: StatusViewerUpdateWithWhereUniqueWithoutStatusInput | StatusViewerUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: StatusViewerUpdateManyWithWhereWithoutStatusInput | StatusViewerUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: StatusViewerScalarWhereInput | StatusViewerScalarWhereInput[]
  }

  export type StatusViewerUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<StatusViewerCreateWithoutStatusInput, StatusViewerUncheckedCreateWithoutStatusInput> | StatusViewerCreateWithoutStatusInput[] | StatusViewerUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: StatusViewerCreateOrConnectWithoutStatusInput | StatusViewerCreateOrConnectWithoutStatusInput[]
    upsert?: StatusViewerUpsertWithWhereUniqueWithoutStatusInput | StatusViewerUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: StatusViewerCreateManyStatusInputEnvelope
    set?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
    disconnect?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
    delete?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
    connect?: StatusViewerWhereUniqueInput | StatusViewerWhereUniqueInput[]
    update?: StatusViewerUpdateWithWhereUniqueWithoutStatusInput | StatusViewerUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: StatusViewerUpdateManyWithWhereWithoutStatusInput | StatusViewerUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: StatusViewerScalarWhereInput | StatusViewerScalarWhereInput[]
  }

  export type StatusCreateNestedOneWithoutViewersInput = {
    create?: XOR<StatusCreateWithoutViewersInput, StatusUncheckedCreateWithoutViewersInput>
    connectOrCreate?: StatusCreateOrConnectWithoutViewersInput
    connect?: StatusWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStatusViewsInput = {
    create?: XOR<UserCreateWithoutStatusViewsInput, UserUncheckedCreateWithoutStatusViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatusViewsInput
    connect?: UserWhereUniqueInput
  }

  export type StatusUpdateOneRequiredWithoutViewersNestedInput = {
    create?: XOR<StatusCreateWithoutViewersInput, StatusUncheckedCreateWithoutViewersInput>
    connectOrCreate?: StatusCreateOrConnectWithoutViewersInput
    upsert?: StatusUpsertWithoutViewersInput
    connect?: StatusWhereUniqueInput
    update?: XOR<XOR<StatusUpdateToOneWithWhereWithoutViewersInput, StatusUpdateWithoutViewersInput>, StatusUncheckedUpdateWithoutViewersInput>
  }

  export type UserUpdateOneRequiredWithoutStatusViewsNestedInput = {
    create?: XOR<UserCreateWithoutStatusViewsInput, UserUncheckedCreateWithoutStatusViewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatusViewsInput
    upsert?: UserUpsertWithoutStatusViewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStatusViewsInput, UserUpdateWithoutStatusViewsInput>, UserUncheckedUpdateWithoutStatusViewsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type StatusCreateWithoutUserInput = {
    id?: string
    mediaUrl: string
    caption?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    viewers?: StatusViewerCreateNestedManyWithoutStatusInput
  }

  export type StatusUncheckedCreateWithoutUserInput = {
    id?: string
    mediaUrl: string
    caption?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    viewers?: StatusViewerUncheckedCreateNestedManyWithoutStatusInput
  }

  export type StatusCreateOrConnectWithoutUserInput = {
    where: StatusWhereUniqueInput
    create: XOR<StatusCreateWithoutUserInput, StatusUncheckedCreateWithoutUserInput>
  }

  export type StatusCreateManyUserInputEnvelope = {
    data: StatusCreateManyUserInput | StatusCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content?: string | null
    type?: $Enums.MessageType
    mediaUrl?: string | null
    sentAt?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
    seenBy?: SeenMessageCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content?: string | null
    type?: $Enums.MessageType
    mediaUrl?: string | null
    chatId: string
    sentAt?: Date | string
    seenBy?: SeenMessageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ChatUserCreateWithoutUserInput = {
    id?: string
    role: string
    joinedAt?: Date | string
    chat: ChatCreateNestedOneWithoutUsersInput
  }

  export type ChatUserUncheckedCreateWithoutUserInput = {
    id?: string
    chatId: string
    role: string
    joinedAt?: Date | string
  }

  export type ChatUserCreateOrConnectWithoutUserInput = {
    where: ChatUserWhereUniqueInput
    create: XOR<ChatUserCreateWithoutUserInput, ChatUserUncheckedCreateWithoutUserInput>
  }

  export type ChatUserCreateManyUserInputEnvelope = {
    data: ChatUserCreateManyUserInput | ChatUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SeenMessageCreateWithoutUserInput = {
    id?: string
    seenAt?: Date | string
    message: MessageCreateNestedOneWithoutSeenByInput
  }

  export type SeenMessageUncheckedCreateWithoutUserInput = {
    id?: string
    messageId: string
    seenAt?: Date | string
  }

  export type SeenMessageCreateOrConnectWithoutUserInput = {
    where: SeenMessageWhereUniqueInput
    create: XOR<SeenMessageCreateWithoutUserInput, SeenMessageUncheckedCreateWithoutUserInput>
  }

  export type SeenMessageCreateManyUserInputEnvelope = {
    data: SeenMessageCreateManyUserInput | SeenMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StatusViewerCreateWithoutUserInput = {
    id?: string
    viewedAt?: Date | string
    status: StatusCreateNestedOneWithoutViewersInput
  }

  export type StatusViewerUncheckedCreateWithoutUserInput = {
    id?: string
    statusId: string
    viewedAt?: Date | string
  }

  export type StatusViewerCreateOrConnectWithoutUserInput = {
    where: StatusViewerWhereUniqueInput
    create: XOR<StatusViewerCreateWithoutUserInput, StatusViewerUncheckedCreateWithoutUserInput>
  }

  export type StatusViewerCreateManyUserInputEnvelope = {
    data: StatusViewerCreateManyUserInput | StatusViewerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StatusUpsertWithWhereUniqueWithoutUserInput = {
    where: StatusWhereUniqueInput
    update: XOR<StatusUpdateWithoutUserInput, StatusUncheckedUpdateWithoutUserInput>
    create: XOR<StatusCreateWithoutUserInput, StatusUncheckedCreateWithoutUserInput>
  }

  export type StatusUpdateWithWhereUniqueWithoutUserInput = {
    where: StatusWhereUniqueInput
    data: XOR<StatusUpdateWithoutUserInput, StatusUncheckedUpdateWithoutUserInput>
  }

  export type StatusUpdateManyWithWhereWithoutUserInput = {
    where: StatusScalarWhereInput
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyWithoutUserInput>
  }

  export type StatusScalarWhereInput = {
    AND?: StatusScalarWhereInput | StatusScalarWhereInput[]
    OR?: StatusScalarWhereInput[]
    NOT?: StatusScalarWhereInput | StatusScalarWhereInput[]
    id?: StringFilter<"Status"> | string
    userId?: StringFilter<"Status"> | string
    mediaUrl?: StringFilter<"Status"> | string
    caption?: StringNullableFilter<"Status"> | string | null
    expiresAt?: DateTimeFilter<"Status"> | Date | string
    createdAt?: DateTimeFilter<"Status"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringNullableFilter<"Message"> | string | null
    type?: EnumMessageTypeFilter<"Message"> | $Enums.MessageType
    mediaUrl?: StringNullableFilter<"Message"> | string | null
    senderId?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    sentAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type ChatUserUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatUserWhereUniqueInput
    update: XOR<ChatUserUpdateWithoutUserInput, ChatUserUncheckedUpdateWithoutUserInput>
    create: XOR<ChatUserCreateWithoutUserInput, ChatUserUncheckedCreateWithoutUserInput>
  }

  export type ChatUserUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatUserWhereUniqueInput
    data: XOR<ChatUserUpdateWithoutUserInput, ChatUserUncheckedUpdateWithoutUserInput>
  }

  export type ChatUserUpdateManyWithWhereWithoutUserInput = {
    where: ChatUserScalarWhereInput
    data: XOR<ChatUserUpdateManyMutationInput, ChatUserUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatUserScalarWhereInput = {
    AND?: ChatUserScalarWhereInput | ChatUserScalarWhereInput[]
    OR?: ChatUserScalarWhereInput[]
    NOT?: ChatUserScalarWhereInput | ChatUserScalarWhereInput[]
    id?: StringFilter<"ChatUser"> | string
    chatId?: StringFilter<"ChatUser"> | string
    userId?: StringFilter<"ChatUser"> | string
    role?: StringFilter<"ChatUser"> | string
    joinedAt?: DateTimeFilter<"ChatUser"> | Date | string
  }

  export type SeenMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: SeenMessageWhereUniqueInput
    update: XOR<SeenMessageUpdateWithoutUserInput, SeenMessageUncheckedUpdateWithoutUserInput>
    create: XOR<SeenMessageCreateWithoutUserInput, SeenMessageUncheckedCreateWithoutUserInput>
  }

  export type SeenMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: SeenMessageWhereUniqueInput
    data: XOR<SeenMessageUpdateWithoutUserInput, SeenMessageUncheckedUpdateWithoutUserInput>
  }

  export type SeenMessageUpdateManyWithWhereWithoutUserInput = {
    where: SeenMessageScalarWhereInput
    data: XOR<SeenMessageUpdateManyMutationInput, SeenMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type SeenMessageScalarWhereInput = {
    AND?: SeenMessageScalarWhereInput | SeenMessageScalarWhereInput[]
    OR?: SeenMessageScalarWhereInput[]
    NOT?: SeenMessageScalarWhereInput | SeenMessageScalarWhereInput[]
    id?: StringFilter<"SeenMessage"> | string
    messageId?: StringFilter<"SeenMessage"> | string
    userId?: StringFilter<"SeenMessage"> | string
    seenAt?: DateTimeFilter<"SeenMessage"> | Date | string
  }

  export type StatusViewerUpsertWithWhereUniqueWithoutUserInput = {
    where: StatusViewerWhereUniqueInput
    update: XOR<StatusViewerUpdateWithoutUserInput, StatusViewerUncheckedUpdateWithoutUserInput>
    create: XOR<StatusViewerCreateWithoutUserInput, StatusViewerUncheckedCreateWithoutUserInput>
  }

  export type StatusViewerUpdateWithWhereUniqueWithoutUserInput = {
    where: StatusViewerWhereUniqueInput
    data: XOR<StatusViewerUpdateWithoutUserInput, StatusViewerUncheckedUpdateWithoutUserInput>
  }

  export type StatusViewerUpdateManyWithWhereWithoutUserInput = {
    where: StatusViewerScalarWhereInput
    data: XOR<StatusViewerUpdateManyMutationInput, StatusViewerUncheckedUpdateManyWithoutUserInput>
  }

  export type StatusViewerScalarWhereInput = {
    AND?: StatusViewerScalarWhereInput | StatusViewerScalarWhereInput[]
    OR?: StatusViewerScalarWhereInput[]
    NOT?: StatusViewerScalarWhereInput | StatusViewerScalarWhereInput[]
    id?: StringFilter<"StatusViewer"> | string
    statusId?: StringFilter<"StatusViewer"> | string
    userId?: StringFilter<"StatusViewer"> | string
    viewedAt?: DateTimeFilter<"StatusViewer"> | Date | string
  }

  export type MessageCreateWithoutChatInput = {
    id?: string
    content?: string | null
    type?: $Enums.MessageType
    mediaUrl?: string | null
    sentAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
    seenBy?: SeenMessageCreateNestedManyWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: string
    content?: string | null
    type?: $Enums.MessageType
    mediaUrl?: string | null
    senderId: string
    sentAt?: Date | string
    seenBy?: SeenMessageUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type ChatUserCreateWithoutChatInput = {
    id?: string
    role: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutChatUsersInput
  }

  export type ChatUserUncheckedCreateWithoutChatInput = {
    id?: string
    userId: string
    role: string
    joinedAt?: Date | string
  }

  export type ChatUserCreateOrConnectWithoutChatInput = {
    where: ChatUserWhereUniqueInput
    create: XOR<ChatUserCreateWithoutChatInput, ChatUserUncheckedCreateWithoutChatInput>
  }

  export type ChatUserCreateManyChatInputEnvelope = {
    data: ChatUserCreateManyChatInput | ChatUserCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatUserUpsertWithWhereUniqueWithoutChatInput = {
    where: ChatUserWhereUniqueInput
    update: XOR<ChatUserUpdateWithoutChatInput, ChatUserUncheckedUpdateWithoutChatInput>
    create: XOR<ChatUserCreateWithoutChatInput, ChatUserUncheckedCreateWithoutChatInput>
  }

  export type ChatUserUpdateWithWhereUniqueWithoutChatInput = {
    where: ChatUserWhereUniqueInput
    data: XOR<ChatUserUpdateWithoutChatInput, ChatUserUncheckedUpdateWithoutChatInput>
  }

  export type ChatUserUpdateManyWithWhereWithoutChatInput = {
    where: ChatUserScalarWhereInput
    data: XOR<ChatUserUpdateManyMutationInput, ChatUserUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatCreateWithoutUsersInput = {
    id?: string
    isGroup?: boolean
    groupName?: string | null
    groupIcon?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutUsersInput = {
    id?: string
    isGroup?: boolean
    groupName?: string | null
    groupIcon?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutUsersInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutChatUsersInput = {
    id?: string
    username: string
    phoneNumber: string
    email: string
    password: string
    profilePicUrl?: string | null
    about?: string | null
    isOnline?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    statuses?: StatusCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    seenMessages?: SeenMessageCreateNestedManyWithoutUserInput
    statusViews?: StatusViewerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatUsersInput = {
    id?: string
    username: string
    phoneNumber: string
    email: string
    password: string
    profilePicUrl?: string | null
    about?: string | null
    isOnline?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    statuses?: StatusUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    seenMessages?: SeenMessageUncheckedCreateNestedManyWithoutUserInput
    statusViews?: StatusViewerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatUsersInput, UserUncheckedCreateWithoutChatUsersInput>
  }

  export type ChatUpsertWithoutUsersInput = {
    update: XOR<ChatUpdateWithoutUsersInput, ChatUncheckedUpdateWithoutUsersInput>
    create: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutUsersInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutUsersInput, ChatUncheckedUpdateWithoutUsersInput>
  }

  export type ChatUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    groupIcon?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    groupIcon?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UserUpsertWithoutChatUsersInput = {
    update: XOR<UserUpdateWithoutChatUsersInput, UserUncheckedUpdateWithoutChatUsersInput>
    create: XOR<UserCreateWithoutChatUsersInput, UserUncheckedCreateWithoutChatUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatUsersInput, UserUncheckedUpdateWithoutChatUsersInput>
  }

  export type UserUpdateWithoutChatUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statuses?: StatusUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    seenMessages?: SeenMessageUpdateManyWithoutUserNestedInput
    statusViews?: StatusViewerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statuses?: StatusUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    seenMessages?: SeenMessageUncheckedUpdateManyWithoutUserNestedInput
    statusViews?: StatusViewerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    username: string
    phoneNumber: string
    email: string
    password: string
    profilePicUrl?: string | null
    about?: string | null
    isOnline?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    statuses?: StatusCreateNestedManyWithoutUserInput
    chatUsers?: ChatUserCreateNestedManyWithoutUserInput
    seenMessages?: SeenMessageCreateNestedManyWithoutUserInput
    statusViews?: StatusViewerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    username: string
    phoneNumber: string
    email: string
    password: string
    profilePicUrl?: string | null
    about?: string | null
    isOnline?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    statuses?: StatusUncheckedCreateNestedManyWithoutUserInput
    chatUsers?: ChatUserUncheckedCreateNestedManyWithoutUserInput
    seenMessages?: SeenMessageUncheckedCreateNestedManyWithoutUserInput
    statusViews?: StatusViewerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type ChatCreateWithoutMessagesInput = {
    id?: string
    isGroup?: boolean
    groupName?: string | null
    groupIcon?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: ChatUserCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    isGroup?: boolean
    groupName?: string | null
    groupIcon?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: ChatUserUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type SeenMessageCreateWithoutMessageInput = {
    id?: string
    seenAt?: Date | string
    user: UserCreateNestedOneWithoutSeenMessagesInput
  }

  export type SeenMessageUncheckedCreateWithoutMessageInput = {
    id?: string
    userId: string
    seenAt?: Date | string
  }

  export type SeenMessageCreateOrConnectWithoutMessageInput = {
    where: SeenMessageWhereUniqueInput
    create: XOR<SeenMessageCreateWithoutMessageInput, SeenMessageUncheckedCreateWithoutMessageInput>
  }

  export type SeenMessageCreateManyMessageInputEnvelope = {
    data: SeenMessageCreateManyMessageInput | SeenMessageCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statuses?: StatusUpdateManyWithoutUserNestedInput
    chatUsers?: ChatUserUpdateManyWithoutUserNestedInput
    seenMessages?: SeenMessageUpdateManyWithoutUserNestedInput
    statusViews?: StatusViewerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statuses?: StatusUncheckedUpdateManyWithoutUserNestedInput
    chatUsers?: ChatUserUncheckedUpdateManyWithoutUserNestedInput
    seenMessages?: SeenMessageUncheckedUpdateManyWithoutUserNestedInput
    statusViews?: StatusViewerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    groupIcon?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ChatUserUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    groupIcon?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: ChatUserUncheckedUpdateManyWithoutChatNestedInput
  }

  export type SeenMessageUpsertWithWhereUniqueWithoutMessageInput = {
    where: SeenMessageWhereUniqueInput
    update: XOR<SeenMessageUpdateWithoutMessageInput, SeenMessageUncheckedUpdateWithoutMessageInput>
    create: XOR<SeenMessageCreateWithoutMessageInput, SeenMessageUncheckedCreateWithoutMessageInput>
  }

  export type SeenMessageUpdateWithWhereUniqueWithoutMessageInput = {
    where: SeenMessageWhereUniqueInput
    data: XOR<SeenMessageUpdateWithoutMessageInput, SeenMessageUncheckedUpdateWithoutMessageInput>
  }

  export type SeenMessageUpdateManyWithWhereWithoutMessageInput = {
    where: SeenMessageScalarWhereInput
    data: XOR<SeenMessageUpdateManyMutationInput, SeenMessageUncheckedUpdateManyWithoutMessageInput>
  }

  export type MessageCreateWithoutSeenByInput = {
    id?: string
    content?: string | null
    type?: $Enums.MessageType
    mediaUrl?: string | null
    sentAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSeenByInput = {
    id?: string
    content?: string | null
    type?: $Enums.MessageType
    mediaUrl?: string | null
    senderId: string
    chatId: string
    sentAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSeenByInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSeenByInput, MessageUncheckedCreateWithoutSeenByInput>
  }

  export type UserCreateWithoutSeenMessagesInput = {
    id?: string
    username: string
    phoneNumber: string
    email: string
    password: string
    profilePicUrl?: string | null
    about?: string | null
    isOnline?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    statuses?: StatusCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    chatUsers?: ChatUserCreateNestedManyWithoutUserInput
    statusViews?: StatusViewerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSeenMessagesInput = {
    id?: string
    username: string
    phoneNumber: string
    email: string
    password: string
    profilePicUrl?: string | null
    about?: string | null
    isOnline?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    statuses?: StatusUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    chatUsers?: ChatUserUncheckedCreateNestedManyWithoutUserInput
    statusViews?: StatusViewerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSeenMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSeenMessagesInput, UserUncheckedCreateWithoutSeenMessagesInput>
  }

  export type MessageUpsertWithoutSeenByInput = {
    update: XOR<MessageUpdateWithoutSeenByInput, MessageUncheckedUpdateWithoutSeenByInput>
    create: XOR<MessageCreateWithoutSeenByInput, MessageUncheckedCreateWithoutSeenByInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutSeenByInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutSeenByInput, MessageUncheckedUpdateWithoutSeenByInput>
  }

  export type MessageUpdateWithoutSeenByInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSeenByInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSeenMessagesInput = {
    update: XOR<UserUpdateWithoutSeenMessagesInput, UserUncheckedUpdateWithoutSeenMessagesInput>
    create: XOR<UserCreateWithoutSeenMessagesInput, UserUncheckedCreateWithoutSeenMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSeenMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSeenMessagesInput, UserUncheckedUpdateWithoutSeenMessagesInput>
  }

  export type UserUpdateWithoutSeenMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statuses?: StatusUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    chatUsers?: ChatUserUpdateManyWithoutUserNestedInput
    statusViews?: StatusViewerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSeenMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statuses?: StatusUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    chatUsers?: ChatUserUncheckedUpdateManyWithoutUserNestedInput
    statusViews?: StatusViewerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStatusesInput = {
    id?: string
    username: string
    phoneNumber: string
    email: string
    password: string
    profilePicUrl?: string | null
    about?: string | null
    isOnline?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutSenderInput
    chatUsers?: ChatUserCreateNestedManyWithoutUserInput
    seenMessages?: SeenMessageCreateNestedManyWithoutUserInput
    statusViews?: StatusViewerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStatusesInput = {
    id?: string
    username: string
    phoneNumber: string
    email: string
    password: string
    profilePicUrl?: string | null
    about?: string | null
    isOnline?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    chatUsers?: ChatUserUncheckedCreateNestedManyWithoutUserInput
    seenMessages?: SeenMessageUncheckedCreateNestedManyWithoutUserInput
    statusViews?: StatusViewerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStatusesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStatusesInput, UserUncheckedCreateWithoutStatusesInput>
  }

  export type StatusViewerCreateWithoutStatusInput = {
    id?: string
    viewedAt?: Date | string
    user: UserCreateNestedOneWithoutStatusViewsInput
  }

  export type StatusViewerUncheckedCreateWithoutStatusInput = {
    id?: string
    userId: string
    viewedAt?: Date | string
  }

  export type StatusViewerCreateOrConnectWithoutStatusInput = {
    where: StatusViewerWhereUniqueInput
    create: XOR<StatusViewerCreateWithoutStatusInput, StatusViewerUncheckedCreateWithoutStatusInput>
  }

  export type StatusViewerCreateManyStatusInputEnvelope = {
    data: StatusViewerCreateManyStatusInput | StatusViewerCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStatusesInput = {
    update: XOR<UserUpdateWithoutStatusesInput, UserUncheckedUpdateWithoutStatusesInput>
    create: XOR<UserCreateWithoutStatusesInput, UserUncheckedCreateWithoutStatusesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStatusesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStatusesInput, UserUncheckedUpdateWithoutStatusesInput>
  }

  export type UserUpdateWithoutStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutSenderNestedInput
    chatUsers?: ChatUserUpdateManyWithoutUserNestedInput
    seenMessages?: SeenMessageUpdateManyWithoutUserNestedInput
    statusViews?: StatusViewerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    chatUsers?: ChatUserUncheckedUpdateManyWithoutUserNestedInput
    seenMessages?: SeenMessageUncheckedUpdateManyWithoutUserNestedInput
    statusViews?: StatusViewerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StatusViewerUpsertWithWhereUniqueWithoutStatusInput = {
    where: StatusViewerWhereUniqueInput
    update: XOR<StatusViewerUpdateWithoutStatusInput, StatusViewerUncheckedUpdateWithoutStatusInput>
    create: XOR<StatusViewerCreateWithoutStatusInput, StatusViewerUncheckedCreateWithoutStatusInput>
  }

  export type StatusViewerUpdateWithWhereUniqueWithoutStatusInput = {
    where: StatusViewerWhereUniqueInput
    data: XOR<StatusViewerUpdateWithoutStatusInput, StatusViewerUncheckedUpdateWithoutStatusInput>
  }

  export type StatusViewerUpdateManyWithWhereWithoutStatusInput = {
    where: StatusViewerScalarWhereInput
    data: XOR<StatusViewerUpdateManyMutationInput, StatusViewerUncheckedUpdateManyWithoutStatusInput>
  }

  export type StatusCreateWithoutViewersInput = {
    id?: string
    mediaUrl: string
    caption?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStatusesInput
  }

  export type StatusUncheckedCreateWithoutViewersInput = {
    id?: string
    userId: string
    mediaUrl: string
    caption?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type StatusCreateOrConnectWithoutViewersInput = {
    where: StatusWhereUniqueInput
    create: XOR<StatusCreateWithoutViewersInput, StatusUncheckedCreateWithoutViewersInput>
  }

  export type UserCreateWithoutStatusViewsInput = {
    id?: string
    username: string
    phoneNumber: string
    email: string
    password: string
    profilePicUrl?: string | null
    about?: string | null
    isOnline?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    statuses?: StatusCreateNestedManyWithoutUserInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    chatUsers?: ChatUserCreateNestedManyWithoutUserInput
    seenMessages?: SeenMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStatusViewsInput = {
    id?: string
    username: string
    phoneNumber: string
    email: string
    password: string
    profilePicUrl?: string | null
    about?: string | null
    isOnline?: boolean
    lastSeen?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    statuses?: StatusUncheckedCreateNestedManyWithoutUserInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    chatUsers?: ChatUserUncheckedCreateNestedManyWithoutUserInput
    seenMessages?: SeenMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStatusViewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStatusViewsInput, UserUncheckedCreateWithoutStatusViewsInput>
  }

  export type StatusUpsertWithoutViewersInput = {
    update: XOR<StatusUpdateWithoutViewersInput, StatusUncheckedUpdateWithoutViewersInput>
    create: XOR<StatusCreateWithoutViewersInput, StatusUncheckedCreateWithoutViewersInput>
    where?: StatusWhereInput
  }

  export type StatusUpdateToOneWithWhereWithoutViewersInput = {
    where?: StatusWhereInput
    data: XOR<StatusUpdateWithoutViewersInput, StatusUncheckedUpdateWithoutViewersInput>
  }

  export type StatusUpdateWithoutViewersInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStatusesNestedInput
  }

  export type StatusUncheckedUpdateWithoutViewersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutStatusViewsInput = {
    update: XOR<UserUpdateWithoutStatusViewsInput, UserUncheckedUpdateWithoutStatusViewsInput>
    create: XOR<UserCreateWithoutStatusViewsInput, UserUncheckedCreateWithoutStatusViewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStatusViewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStatusViewsInput, UserUncheckedUpdateWithoutStatusViewsInput>
  }

  export type UserUpdateWithoutStatusViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statuses?: StatusUpdateManyWithoutUserNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    chatUsers?: ChatUserUpdateManyWithoutUserNestedInput
    seenMessages?: SeenMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStatusViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statuses?: StatusUncheckedUpdateManyWithoutUserNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    chatUsers?: ChatUserUncheckedUpdateManyWithoutUserNestedInput
    seenMessages?: SeenMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StatusCreateManyUserInput = {
    id?: string
    mediaUrl: string
    caption?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    content?: string | null
    type?: $Enums.MessageType
    mediaUrl?: string | null
    chatId: string
    sentAt?: Date | string
  }

  export type ChatUserCreateManyUserInput = {
    id?: string
    chatId: string
    role: string
    joinedAt?: Date | string
  }

  export type SeenMessageCreateManyUserInput = {
    id?: string
    messageId: string
    seenAt?: Date | string
  }

  export type StatusViewerCreateManyUserInput = {
    id?: string
    statusId: string
    viewedAt?: Date | string
  }

  export type StatusUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewers?: StatusViewerUpdateManyWithoutStatusNestedInput
  }

  export type StatusUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewers?: StatusViewerUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type StatusUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mediaUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
    seenBy?: SeenMessageUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seenBy?: SeenMessageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutUsersNestedInput
  }

  export type ChatUserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUserUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeenMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutSeenByNestedInput
  }

  export type SeenMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeenMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusViewerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StatusUpdateOneRequiredWithoutViewersNestedInput
  }

  export type StatusViewerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusViewerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyChatInput = {
    id?: string
    content?: string | null
    type?: $Enums.MessageType
    mediaUrl?: string | null
    senderId: string
    sentAt?: Date | string
  }

  export type ChatUserCreateManyChatInput = {
    id?: string
    userId: string
    role: string
    joinedAt?: Date | string
  }

  export type MessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    seenBy?: SeenMessageUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seenBy?: SeenMessageUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUserUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatUsersNestedInput
  }

  export type ChatUserUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUserUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeenMessageCreateManyMessageInput = {
    id?: string
    userId: string
    seenAt?: Date | string
  }

  export type SeenMessageUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSeenMessagesNestedInput
  }

  export type SeenMessageUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeenMessageUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    seenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusViewerCreateManyStatusInput = {
    id?: string
    userId: string
    viewedAt?: Date | string
  }

  export type StatusViewerUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStatusViewsNestedInput
  }

  export type StatusViewerUncheckedUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusViewerUncheckedUpdateManyWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}