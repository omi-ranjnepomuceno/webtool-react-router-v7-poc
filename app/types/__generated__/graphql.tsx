import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  DistanceScalar: { input: any; output: any; }
  GenericScalar: { input: any; output: any; }
  JSONString: { input: any; output: any; }
  PositiveDecimal: { input: any; output: any; }
  Time: { input: any; output: any; }
  UUID: { input: any; output: any; }
  Upload: { input: any; output: any; }
  WeightScalar: { input: any; output: any; }
  _Any: { input: any; output: any; }
};

export type Access = Node & ObjectWithMetadata & {
  __typename?: 'Access';
  accessGroup?: Maybe<AccessGroup>;
  accessType?: Maybe<AccessTypeEnum>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  objectId?: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  privateObjectId?: Maybe<Scalars['ID']['output']>;
  storeType?: Maybe<StoreTypeEnum>;
};

export type AccessCountableConnection = {
  __typename?: 'AccessCountableConnection';
  edges: Array<AccessCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AccessCountableEdge = {
  __typename?: 'AccessCountableEdge';
  cursor: Scalars['String']['output'];
  node: Access;
};

export type AccessCreate = {
  __typename?: 'AccessCreate';
  access?: Maybe<Access>;
  accessErrors: Array<AccessError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type AccessCreateInput = {
  accessGroup: Scalars['ID']['input'];
  accessType: AccessTypeEnum;
  description: Scalars['String']['input'];
  objectId: Scalars['ID']['input'];
};

export type AccessError = {
  __typename?: 'AccessError';
  code: AccessErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum AccessErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type AccessGroup = Node & {
  __typename?: 'AccessGroup';
  accesses: Array<Maybe<Access>>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isMfaEnabled?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  smopUsertypeCode?: Maybe<SmopUserTypeCode>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccessGroupCountableConnection = {
  __typename?: 'AccessGroupCountableConnection';
  edges: Array<AccessGroupCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AccessGroupCountableEdge = {
  __typename?: 'AccessGroupCountableEdge';
  cursor: Scalars['String']['output'];
  node: AccessGroup;
};

export type AccessGroupCreate = {
  __typename?: 'AccessGroupCreate';
  accessGroup?: Maybe<AccessGroup>;
  accessGroupErrors: Array<AccessGroupError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type AccessGroupCreateInput = {
  code: Scalars['String']['input'];
  description: Scalars['String']['input'];
  isMfaEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type AccessGroupError = {
  __typename?: 'AccessGroupError';
  code: AccessGroupErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum AccessGroupErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type AccessGroupInput = {
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type AccessGroupUpdate = {
  __typename?: 'AccessGroupUpdate';
  accessGroup?: Maybe<AccessGroup>;
  accessGroupErrors: Array<AccessGroupError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type AccessGroupUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMfaEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum AccessTypeEnum {
  Brand = 'BRAND',
  Mall = 'MALL',
  Tenant = 'TENANT'
}

export type AccountActivityLog = Node & {
  __typename?: 'AccountActivityLog';
  action: AccountActivityLogAction;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  field?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  modelName: Scalars['String']['output'];
  newValues?: Maybe<Scalars['JSONString']['output']>;
  subject?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export enum AccountActivityLogAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export type AccountActivityLogCountableConnection = {
  __typename?: 'AccountActivityLogCountableConnection';
  edges: Array<AccountActivityLogCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AccountActivityLogCountableEdge = {
  __typename?: 'AccountActivityLogCountableEdge';
  cursor: Scalars['String']['output'];
  node: AccountActivityLog;
};

export type AccountAddressCreate = {
  __typename?: 'AccountAddressCreate';
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type AccountAddressDelete = {
  __typename?: 'AccountAddressDelete';
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type AccountAddressUpdate = {
  __typename?: 'AccountAddressUpdate';
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type AccountDelete = {
  __typename?: 'AccountDelete';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type AccountDeleteRequest = {
  __typename?: 'AccountDeleteRequest';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  status?: Maybe<Scalars['String']['output']>;
};

export type AccountError = {
  __typename?: 'AccountError';
  code: AccountErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export enum AccountErrorCode {
  ActivateOwnAccount = 'ACTIVATE_OWN_ACCOUNT',
  ActivateSuperuserAccount = 'ACTIVATE_SUPERUSER_ACCOUNT',
  DeactivateOwnAccount = 'DEACTIVATE_OWN_ACCOUNT',
  DeactivateSuperuserAccount = 'DEACTIVATE_SUPERUSER_ACCOUNT',
  DeleteNonStaffUser = 'DELETE_NON_STAFF_USER',
  DeleteOwnAccount = 'DELETE_OWN_ACCOUNT',
  DeleteStaffAccount = 'DELETE_STAFF_ACCOUNT',
  DeleteSuperuserAccount = 'DELETE_SUPERUSER_ACCOUNT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidAccessObject = 'INVALID_ACCESS_OBJECT',
  InvalidCredentials = 'INVALID_CREDENTIALS',
  InvalidPassword = 'INVALID_PASSWORD',
  InvalidXenditToken = 'INVALID_XENDIT_TOKEN',
  JwtDecodeError = 'JWT_DECODE_ERROR',
  JwtInvalidCsrfToken = 'JWT_INVALID_CSRF_TOKEN',
  JwtInvalidToken = 'JWT_INVALID_TOKEN',
  JwtMissingToken = 'JWT_MISSING_TOKEN',
  JwtSignatureExpired = 'JWT_SIGNATURE_EXPIRED',
  LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
  NotFound = 'NOT_FOUND',
  OtpAlreadyUsed = 'OTP_ALREADY_USED',
  OtpUnverified = 'OTP_UNVERIFIED',
  OutOfScopeGroup = 'OUT_OF_SCOPE_GROUP',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  OutOfScopeServiceAccount = 'OUT_OF_SCOPE_SERVICE_ACCOUNT',
  OutOfScopeUser = 'OUT_OF_SCOPE_USER',
  PasswordEntirelyNumeric = 'PASSWORD_ENTIRELY_NUMERIC',
  PasswordTooCommon = 'PASSWORD_TOO_COMMON',
  PasswordTooPlain = 'PASSWORD_TOO_PLAIN',
  PasswordTooShort = 'PASSWORD_TOO_SHORT',
  PasswordTooSimilar = 'PASSWORD_TOO_SIMILAR',
  PermissionGroupNotFound = 'PERMISSION_GROUP_NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  UserBlocked = 'USER_BLOCKED',
  UserDeleted = 'USER_DELETED',
  UserUnverified = 'USER_UNVERIFIED'
}

export type AccountExists = {
  __typename?: 'AccountExists';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  exists?: Maybe<Scalars['Boolean']['output']>;
};

export type AccountInput = {
  age?: InputMaybe<UserAgeEnum>;
  birthMonth?: InputMaybe<UserBirthMonthEnum>;
  contactNo: Scalars['String']['input'];
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  defaultBillingAddress?: InputMaybe<AddressInput>;
  defaultShippingAddress?: InputMaybe<AddressInput>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<UserPrefixEnum>;
  smac?: InputMaybe<Scalars['String']['input']>;
};

export type AccountRegister = {
  __typename?: 'AccountRegister';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  requiresConfirmation?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
};

export type AccountRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AccountRequestDeletion = {
  __typename?: 'AccountRequestDeletion';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type AccountSmacSet = {
  __typename?: 'AccountSMACSet';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type AccountSmMarketReregister = {
  __typename?: 'AccountSMMarketReregister';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type AccountSetDefaultAddress = {
  __typename?: 'AccountSetDefaultAddress';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type AccountSetNewPassword = {
  __typename?: 'AccountSetNewPassword';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type AccountSetStatus = {
  __typename?: 'AccountSetStatus';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type AccountUpdate = {
  __typename?: 'AccountUpdate';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type AccountUpdateMeta = {
  __typename?: 'AccountUpdateMeta';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type ActivityLog = Node & {
  __typename?: 'ActivityLog';
  action: ActivityLogAction;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  field?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  modelName: Scalars['String']['output'];
  newValues?: Maybe<Scalars['JSONString']['output']>;
  subject?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export enum ActivityLogAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export enum ActivityLogActionsEnum {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export type ActivityLogCountableConnection = {
  __typename?: 'ActivityLogCountableConnection';
  edges: Array<ActivityLogCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ActivityLogCountableEdge = {
  __typename?: 'ActivityLogCountableEdge';
  cursor: Scalars['String']['output'];
  node: ActivityLog;
};

export type ActivityLogFilterInput = {
  action?: InputMaybe<ActivityLogActionsEnum>;
  created?: InputMaybe<DateRangeInput>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  updatedBy?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export enum ActivityLogSortField {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type ActivityLogSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: ActivityLogSortField;
};

export type AddItemToCart = {
  __typename?: 'AddItemToCart';
  cartErrors: Array<CartError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  line?: Maybe<CartLine>;
};

export type Address = Node & {
  __typename?: 'Address';
  alias?: Maybe<Scalars['String']['output']>;
  areaCode?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  cityArea: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  country: CountryDisplay;
  countryArea: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isComplete?: Maybe<Scalars['Boolean']['output']>;
  isDefaultBillingAddress?: Maybe<Scalars['Boolean']['output']>;
  isDefaultShippingAddress?: Maybe<Scalars['Boolean']['output']>;
  landmark?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  mapPlaceId?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  portCode?: Maybe<Scalars['String']['output']>;
  postalCode: Scalars['String']['output'];
  provinceCode?: Maybe<Scalars['String']['output']>;
  provinceName?: Maybe<Scalars['String']['output']>;
  streetAddress1: Scalars['String']['output'];
  streetAddress2: Scalars['String']['output'];
  streetBrgy?: Maybe<Scalars['String']['output']>;
  unitDetails?: Maybe<Scalars['String']['output']>;
};

export type AddressCreate = {
  __typename?: 'AddressCreate';
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type AddressDelete = {
  __typename?: 'AddressDelete';
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type AddressInput = {
  alias?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  cityArea?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<CountryCode>;
  countryArea?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  landmark?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Decimal']['input']>;
  longitude?: InputMaybe<Scalars['Decimal']['input']>;
  mapPlaceId?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  provinceCode?: InputMaybe<Scalars['String']['input']>;
  provinceName?: InputMaybe<Scalars['String']['input']>;
  streetAddress1?: InputMaybe<Scalars['String']['input']>;
  streetAddress2?: InputMaybe<Scalars['String']['input']>;
  streetBrgy?: InputMaybe<Scalars['String']['input']>;
  unitDetails?: InputMaybe<Scalars['String']['input']>;
};

export type AddressSetDefault = {
  __typename?: 'AddressSetDefault';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type AddressSetHome = {
  __typename?: 'AddressSetHome';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export enum AddressTypeEnum {
  Billing = 'BILLING',
  Shipping = 'SHIPPING'
}

export type AddressUpdate = {
  __typename?: 'AddressUpdate';
  accountErrors: Array<AccountError>;
  address?: Maybe<Address>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type AddressValidationData = {
  __typename?: 'AddressValidationData';
  addressFormat?: Maybe<Scalars['String']['output']>;
  addressLatinFormat?: Maybe<Scalars['String']['output']>;
  allowedFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  cityAreaChoices?: Maybe<Array<Maybe<ChoiceValue>>>;
  cityAreaType?: Maybe<Scalars['String']['output']>;
  cityChoices?: Maybe<Array<Maybe<ChoiceValue>>>;
  cityType?: Maybe<Scalars['String']['output']>;
  countryAreaChoices?: Maybe<Array<Maybe<ChoiceValue>>>;
  countryAreaType?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  countryName?: Maybe<Scalars['String']['output']>;
  postalCodeExamples?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  postalCodeMatchers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  postalCodePrefix?: Maybe<Scalars['String']['output']>;
  postalCodeType?: Maybe<Scalars['String']['output']>;
  requiredFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  upperFields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Allocation = Node & {
  __typename?: 'Allocation';
  id: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  warehouse: Warehouse;
};

export type Announcement = Node & {
  __typename?: 'Announcement';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  publishingStatus?: Maybe<AnnouncementPublishingStatusEnum>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type AnnouncementImageArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type AnnouncementBulkDelete = {
  __typename?: 'AnnouncementBulkDelete';
  announcementErrors: Array<AnnouncementError>;
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type AnnouncementCountableConnection = {
  __typename?: 'AnnouncementCountableConnection';
  edges: Array<AnnouncementCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AnnouncementCountableEdge = {
  __typename?: 'AnnouncementCountableEdge';
  cursor: Scalars['String']['output'];
  node: Announcement;
};

export type AnnouncementCreate = {
  __typename?: 'AnnouncementCreate';
  announcement?: Maybe<Announcement>;
  announcementError: Array<AnnouncementError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type AnnouncementCreateInput = {
  content: Scalars['String']['input'];
  endDate: Scalars['DateTime']['input'];
  image?: InputMaybe<Scalars['Upload']['input']>;
  startDate: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
};

export type AnnouncementDelete = {
  __typename?: 'AnnouncementDelete';
  Announcement?: Maybe<Announcement>;
  announcementError: Array<AnnouncementError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type AnnouncementError = {
  __typename?: 'AnnouncementError';
  code: AnnouncementErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum AnnouncementErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export type AnnouncementInput = {
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<AnnouncementPublishingStatusEnum>;
};

export enum AnnouncementPublishingStatusEnum {
  Deleted = 'DELETED',
  Published = 'PUBLISHED',
  Scheduled = 'SCHEDULED',
  Unpublished = 'UNPUBLISHED'
}

export enum AnnouncementSortField {
  PublishingDate = 'PUBLISHING_DATE'
}

export type AnnouncementSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: AnnouncementSortField;
};

export type AnnouncementUpdate = {
  __typename?: 'AnnouncementUpdate';
  announcement?: Maybe<Announcement>;
  announcementError: Array<AnnouncementError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type App = Node & ObjectWithMetadata & {
  __typename?: 'App';
  aboutApp?: Maybe<Scalars['String']['output']>;
  accessToken?: Maybe<Scalars['String']['output']>;
  appUrl?: Maybe<Scalars['String']['output']>;
  configurationUrl?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  dataPrivacy?: Maybe<Scalars['String']['output']>;
  dataPrivacyUrl?: Maybe<Scalars['String']['output']>;
  homepageUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  name?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  supportUrl?: Maybe<Scalars['String']['output']>;
  tokens?: Maybe<Array<Maybe<AppToken>>>;
  type?: Maybe<AppTypeEnum>;
  version?: Maybe<Scalars['String']['output']>;
  webhooks?: Maybe<Array<Maybe<Webhook>>>;
};

export type AppActivate = {
  __typename?: 'AppActivate';
  app?: Maybe<App>;
  appErrors: Array<AppError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type AppConfig = Node & {
  __typename?: 'AppConfig';
  apiKey?: Maybe<Scalars['String']['output']>;
  apiSecret?: Maybe<Scalars['String']['output']>;
  appConfigs?: Maybe<AppConfigCountableConnection>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy: User;
  file?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<User>;
  url?: Maybe<Scalars['String']['output']>;
  version: Scalars['Int']['output'];
};


export type AppConfigAppConfigsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AppConfigInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<AppConfigSortingInput>;
};

export type AppConfigCountableConnection = {
  __typename?: 'AppConfigCountableConnection';
  edges: Array<AppConfigCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AppConfigCountableEdge = {
  __typename?: 'AppConfigCountableEdge';
  cursor: Scalars['String']['output'];
  node: AppConfig;
};

export type AppConfigCreate = {
  __typename?: 'AppConfigCreate';
  appConfig?: Maybe<AppConfig>;
  appconfigError: Array<AppConfigError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type AppConfigCreateInput = {
  json: Scalars['Upload']['input'];
  name: Scalars['String']['input'];
};

export type AppConfigError = {
  __typename?: 'AppConfigError';
  code: AppConfigErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum AppConfigErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  Required = 'REQUIRED'
}

export type AppConfigInput = {
  createdBy?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export enum AppConfigOrderField {
  Name = 'NAME',
  Recent = 'RECENT',
  Version = 'VERSION'
}

export type AppConfigSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: AppConfigOrderField;
};

export type AppConfigUpdate = {
  __typename?: 'AppConfigUpdate';
  appConfig?: Maybe<AppConfig>;
  appconfigError: Array<AppConfigError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type AppCountableConnection = {
  __typename?: 'AppCountableConnection';
  edges: Array<AppCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AppCountableEdge = {
  __typename?: 'AppCountableEdge';
  cursor: Scalars['String']['output'];
  node: App;
};

export type AppCreate = {
  __typename?: 'AppCreate';
  app?: Maybe<App>;
  appErrors: Array<AppError>;
  authToken?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type AppDeactivate = {
  __typename?: 'AppDeactivate';
  app?: Maybe<App>;
  appErrors: Array<AppError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type AppDelete = {
  __typename?: 'AppDelete';
  app?: Maybe<App>;
  appErrors: Array<AppError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type AppDeleteFailedInstallation = {
  __typename?: 'AppDeleteFailedInstallation';
  appErrors: Array<AppError>;
  appInstallation?: Maybe<AppInstallation>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type AppError = {
  __typename?: 'AppError';
  code: AppErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<PermissionEnum>>;
};

export enum AppErrorCode {
  Forbidden = 'FORBIDDEN',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidManifestFormat = 'INVALID_MANIFEST_FORMAT',
  InvalidPermission = 'INVALID_PERMISSION',
  InvalidStatus = 'INVALID_STATUS',
  InvalidUrlFormat = 'INVALID_URL_FORMAT',
  ManifestUrlCantConnect = 'MANIFEST_URL_CANT_CONNECT',
  NotFound = 'NOT_FOUND',
  OutOfScopeApp = 'OUT_OF_SCOPE_APP',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type AppFetchManifest = {
  __typename?: 'AppFetchManifest';
  appErrors: Array<AppError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  manifest?: Maybe<Manifest>;
};

export type AppFilterInput = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AppTypeEnum>;
};

export type AppInput = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<PermissionEnum>>>;
};

export type AppInstall = {
  __typename?: 'AppInstall';
  appErrors: Array<AppError>;
  appInstallation?: Maybe<AppInstallation>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type AppInstallInput = {
  activateAfterInstallation?: InputMaybe<Scalars['Boolean']['input']>;
  appName?: InputMaybe<Scalars['String']['input']>;
  manifestUrl?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<PermissionEnum>>>;
};

export type AppInstallation = Job & Node & {
  __typename?: 'AppInstallation';
  appName: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  manifestUrl: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
  status: JobStatusEnum;
  updatedAt: Scalars['DateTime']['output'];
};

export type AppRetryInstall = {
  __typename?: 'AppRetryInstall';
  appErrors: Array<AppError>;
  appInstallation?: Maybe<AppInstallation>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export enum AppSortField {
  CreationDate = 'CREATION_DATE',
  Name = 'NAME'
}

export type AppSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: AppSortField;
};

export type AppToken = Node & {
  __typename?: 'AppToken';
  authToken?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type AppTokenCreate = {
  __typename?: 'AppTokenCreate';
  appErrors: Array<AppError>;
  appToken?: Maybe<AppToken>;
  authToken?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type AppTokenDelete = {
  __typename?: 'AppTokenDelete';
  appErrors: Array<AppError>;
  appToken?: Maybe<AppToken>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type AppTokenInput = {
  app: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AppTokenVerify = {
  __typename?: 'AppTokenVerify';
  appErrors: Array<AppError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  valid: Scalars['Boolean']['output'];
};

export enum AppTypeEnum {
  Local = 'LOCAL',
  Thirdparty = 'THIRDPARTY'
}

export type AppUpdate = {
  __typename?: 'AppUpdate';
  app?: Maybe<App>;
  appErrors: Array<AppError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type AssignNavigation = {
  __typename?: 'AssignNavigation';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  menu?: Maybe<Menu>;
  menuErrors: Array<MenuError>;
};

export type AssignRunnerToTaskAreas = {
  __typename?: 'AssignRunnerToTaskAreas';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  runner?: Maybe<User>;
  taskAreaError: Array<TaskAreaError>;
};

export type AssignStoreOrderRunner = {
  __typename?: 'AssignStoreOrderRunner';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
  storeOrder?: Maybe<StoreOrder>;
};

export type Attribute = Node & ObjectWithMetadata & {
  __typename?: 'Attribute';
  availableInGrid: Scalars['Boolean']['output'];
  filterableInDashboard: Scalars['Boolean']['output'];
  filterableInStorefront: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  inputType?: Maybe<AttributeInputTypeEnum>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  productTypes: ProductTypeCountableConnection;
  productVariantTypes: ProductTypeCountableConnection;
  slug?: Maybe<Scalars['String']['output']>;
  storefrontSearchPosition: Scalars['Int']['output'];
  translation?: Maybe<AttributeTranslation>;
  valueRequired: Scalars['Boolean']['output'];
  values?: Maybe<Array<Maybe<AttributeValue>>>;
  visibleInStorefront: Scalars['Boolean']['output'];
};


export type AttributeProductTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type AttributeProductVariantTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type AttributeTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type AttributeAssign = {
  __typename?: 'AttributeAssign';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export type AttributeAssignInput = {
  id: Scalars['ID']['input'];
  type: AttributeTypeEnum;
};

export type AttributeBulkDelete = {
  __typename?: 'AttributeBulkDelete';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type AttributeClearMeta = {
  __typename?: 'AttributeClearMeta';
  attribute?: Maybe<Attribute>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type AttributeClearPrivateMeta = {
  __typename?: 'AttributeClearPrivateMeta';
  attribute?: Maybe<Attribute>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type AttributeCountableConnection = {
  __typename?: 'AttributeCountableConnection';
  edges: Array<AttributeCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AttributeCountableEdge = {
  __typename?: 'AttributeCountableEdge';
  cursor: Scalars['String']['output'];
  node: Attribute;
};

export type AttributeCreate = {
  __typename?: 'AttributeCreate';
  attribute?: Maybe<Attribute>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type AttributeCreateInput = {
  availableInGrid?: InputMaybe<Scalars['Boolean']['input']>;
  filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  filterableInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
  inputType?: InputMaybe<AttributeInputTypeEnum>;
  isVariantOnly?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  storefrontSearchPosition?: InputMaybe<Scalars['Int']['input']>;
  valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  values?: InputMaybe<Array<InputMaybe<AttributeValueCreateInput>>>;
  visibleInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AttributeDelete = {
  __typename?: 'AttributeDelete';
  attribute?: Maybe<Attribute>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type AttributeFilterInput = {
  availableInGrid?: InputMaybe<Scalars['Boolean']['input']>;
  filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  filterableInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  inCategory?: InputMaybe<Scalars['ID']['input']>;
  inCollection?: InputMaybe<Scalars['ID']['input']>;
  isVariantOnly?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  visibleInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AttributeInput = {
  slug: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum AttributeInputTypeEnum {
  Dropdown = 'DROPDOWN',
  Multiselect = 'MULTISELECT'
}

export type AttributeReorderValues = {
  __typename?: 'AttributeReorderValues';
  attribute?: Maybe<Attribute>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export enum AttributeSortField {
  AvailableInGrid = 'AVAILABLE_IN_GRID',
  FilterableInDashboard = 'FILTERABLE_IN_DASHBOARD',
  FilterableInStorefront = 'FILTERABLE_IN_STOREFRONT',
  IsVariantOnly = 'IS_VARIANT_ONLY',
  Name = 'NAME',
  Slug = 'SLUG',
  StorefrontSearchPosition = 'STOREFRONT_SEARCH_POSITION',
  ValueRequired = 'VALUE_REQUIRED',
  VisibleInStorefront = 'VISIBLE_IN_STOREFRONT'
}

export type AttributeSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: AttributeSortField;
};

export type AttributeTranslatableContent = Node & {
  __typename?: 'AttributeTranslatableContent';
  attribute?: Maybe<Attribute>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  translation?: Maybe<AttributeTranslation>;
};


export type AttributeTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type AttributeTranslate = {
  __typename?: 'AttributeTranslate';
  attribute?: Maybe<Attribute>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
};

export type AttributeTranslation = Node & {
  __typename?: 'AttributeTranslation';
  id: Scalars['ID']['output'];
  language: LanguageDisplay;
  name: Scalars['String']['output'];
};

export enum AttributeTypeEnum {
  Product = 'PRODUCT',
  Variant = 'VARIANT'
}

export type AttributeUnassign = {
  __typename?: 'AttributeUnassign';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export type AttributeUpdate = {
  __typename?: 'AttributeUpdate';
  attribute?: Maybe<Attribute>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type AttributeUpdateInput = {
  addValues?: InputMaybe<Array<InputMaybe<AttributeValueCreateInput>>>;
  availableInGrid?: InputMaybe<Scalars['Boolean']['input']>;
  filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  filterableInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
  isVariantOnly?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  removeValues?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  storefrontSearchPosition?: InputMaybe<Scalars['Int']['input']>;
  valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  visibleInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AttributeUpdateMeta = {
  __typename?: 'AttributeUpdateMeta';
  attribute?: Maybe<Attribute>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type AttributeUpdatePrivateMeta = {
  __typename?: 'AttributeUpdatePrivateMeta';
  attribute?: Maybe<Attribute>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type AttributeValue = Node & {
  __typename?: 'AttributeValue';
  id: Scalars['ID']['output'];
  inputType?: Maybe<AttributeInputTypeEnum>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  translation?: Maybe<AttributeValueTranslation>;
  /** @deprecated Use the `inputType` field to determine the type of attribute's value. This field will be removed after 2020-07-31. */
  type?: Maybe<AttributeValueType>;
};


export type AttributeValueTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type AttributeValueBulkDelete = {
  __typename?: 'AttributeValueBulkDelete';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type AttributeValueCreate = {
  __typename?: 'AttributeValueCreate';
  attribute?: Maybe<Attribute>;
  attributeValue?: Maybe<AttributeValue>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type AttributeValueCreateInput = {
  name: Scalars['String']['input'];
};

export type AttributeValueDelete = {
  __typename?: 'AttributeValueDelete';
  attribute?: Maybe<Attribute>;
  attributeValue?: Maybe<AttributeValue>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type AttributeValueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  values: Array<InputMaybe<Scalars['String']['input']>>;
};

export type AttributeValueTranslatableContent = Node & {
  __typename?: 'AttributeValueTranslatableContent';
  attributeValue?: Maybe<AttributeValue>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  translation?: Maybe<AttributeValueTranslation>;
};


export type AttributeValueTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type AttributeValueTranslate = {
  __typename?: 'AttributeValueTranslate';
  attributeValue?: Maybe<AttributeValue>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
};

export type AttributeValueTranslation = Node & {
  __typename?: 'AttributeValueTranslation';
  id: Scalars['ID']['output'];
  language: LanguageDisplay;
  name: Scalars['String']['output'];
};

export enum AttributeValueType {
  Color = 'COLOR',
  Gradient = 'GRADIENT',
  String = 'STRING',
  Url = 'URL'
}

export type AttributeValueUpdate = {
  __typename?: 'AttributeValueUpdate';
  attribute?: Maybe<Attribute>;
  attributeValue?: Maybe<AttributeValue>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type AuthorizationKey = {
  __typename?: 'AuthorizationKey';
  key: Scalars['String']['output'];
  name: AuthorizationKeyType;
};

export type AuthorizationKeyAdd = {
  __typename?: 'AuthorizationKeyAdd';
  authorizationKey?: Maybe<AuthorizationKey>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shop?: Maybe<Shop>;
  shopErrors: Array<ShopError>;
};

export type AuthorizationKeyDelete = {
  __typename?: 'AuthorizationKeyDelete';
  authorizationKey?: Maybe<AuthorizationKey>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shop?: Maybe<Shop>;
  shopErrors: Array<ShopError>;
};

export type AuthorizationKeyInput = {
  key: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum AuthorizationKeyType {
  Facebook = 'FACEBOOK',
  GoogleOauth2 = 'GOOGLE_OAUTH2'
}

export type AutoBookingConfig = Node & {
  __typename?: 'AutoBookingConfig';
  anyStatusMinutes?: Maybe<Scalars['Int']['output']>;
  collectedStatusMinutes?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isEnabled: Scalars['Boolean']['output'];
  readyStatusMinutes?: Maybe<Scalars['Int']['output']>;
  storeType?: Maybe<StoreTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AutoBookingError = {
  __typename?: 'AutoBookingError';
  code: AutoBookingErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum AutoBookingErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type AutoBookingSetIsEnabled = {
  __typename?: 'AutoBookingSetIsEnabled';
  autoBookingConfigs?: Maybe<Array<Maybe<AutoBookingConfig>>>;
  autoBookingError: Array<AutoBookingError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  malls?: Maybe<Array<Maybe<Mall>>>;
};

export type AutoBookingSetIsEnabledInput = {
  enabled: Scalars['Boolean']['input'];
  storeTypes: Array<InputMaybe<StoreTypeEnum>>;
};

export type AutobookingConfigUpdateInput = {
  anyStatusMinutes?: InputMaybe<Scalars['Int']['input']>;
  collectedStatusMinutes?: InputMaybe<Scalars['Int']['input']>;
  enabled: Scalars['Boolean']['input'];
  readyStatusMinutes?: InputMaybe<Scalars['Int']['input']>;
  storeType: StoreTypeEnum;
};

export type Banner = Node & {
  __typename?: 'Banner';
  action?: Maybe<Scalars['JSONString']['output']>;
  brand?: Maybe<Brand>;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  coupon?: Maybe<Coupon>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deeplinkUrl?: Maybe<Scalars['String']['output']>;
  descriptionJson: Scalars['JSONString']['output'];
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Image>;
  isAppliedToAllMalls?: Maybe<Scalars['Boolean']['output']>;
  isSplashBanner: Scalars['Boolean']['output'];
  mall?: Maybe<Mall>;
  malls?: Maybe<MallCountableConnection>;
  name?: Maybe<Scalars['String']['output']>;
  page?: Maybe<DynamicLink>;
  product?: Maybe<Product>;
  sale?: Maybe<Sale>;
  shortDynamicLink?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<SmopStatusEnum>;
  targetDeeplink?: Maybe<Scalars['String']['output']>;
  targetDynamicLink?: Maybe<Scalars['String']['output']>;
  type?: Maybe<SmopBannerTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verticals?: Maybe<Array<Maybe<BannerVerticalEnum>>>;
  voucher?: Maybe<Voucher>;
};


export type BannerImageUrlArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
  size2?: InputMaybe<Scalars['Int']['input']>;
};


export type BannerMallsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type BannerAddMalls = {
  __typename?: 'BannerAddMalls';
  banner?: Maybe<Banner>;
  bannerErrors: Array<BannerError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type BannerAnnouncementLinkInput = {
  brandId?: InputMaybe<Scalars['ID']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  collectionId?: InputMaybe<Scalars['ID']['input']>;
  couponId?: InputMaybe<Scalars['ID']['input']>;
  productId?: InputMaybe<Scalars['ID']['input']>;
};

export type BannerAnnouncementLinkUpdate = {
  __typename?: 'BannerAnnouncementLinkUpdate';
  banner?: Maybe<Banner>;
  bannerErrors: Array<BannerError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type BannerBulkDelete = {
  __typename?: 'BannerBulkDelete';
  bannerErrors: Array<BannerError>;
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type BannerCountableConnection = {
  __typename?: 'BannerCountableConnection';
  edges: Array<BannerCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type BannerCountableEdge = {
  __typename?: 'BannerCountableEdge';
  cursor: Scalars['String']['output'];
  node: Banner;
};

export type BannerCreate = {
  __typename?: 'BannerCreate';
  banner?: Maybe<Banner>;
  bannerErrors: Array<BannerError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type BannerCreateInput = {
  action?: InputMaybe<Scalars['JSONString']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONString']['input']>;
  dynamicLinkId?: InputMaybe<Scalars['ID']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  imageUrl?: InputMaybe<Scalars['Upload']['input']>;
  isSplashBanner?: InputMaybe<Scalars['Boolean']['input']>;
  mall?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  sale?: InputMaybe<Scalars['ID']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status: SmopStatusEnum;
  type: SmopBannerTypeEnum;
  verticals?: InputMaybe<Array<InputMaybe<BannerVerticalEnum>>>;
  voucher?: InputMaybe<Scalars['ID']['input']>;
};

export type BannerDelete = {
  __typename?: 'BannerDelete';
  banner?: Maybe<Banner>;
  bannerErrors: Array<BannerError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type BannerError = {
  __typename?: 'BannerError';
  code: BannerErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum BannerErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type BannerGenerateDynamicLink = {
  __typename?: 'BannerGenerateDynamicLink';
  banner?: Maybe<Banner>;
  bannerErrors: Array<BannerError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type BannerImageCreate = {
  __typename?: 'BannerImageCreate';
  banner?: Maybe<Banner>;
  bannerErrors: Array<BannerError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type BannerImageCreateInput = {
  banner: Scalars['ID']['input'];
  image: Scalars['Upload']['input'];
};

export type BannerInput = {
  couponIsClaimable?: InputMaybe<Scalars['Boolean']['input']>;
  couponIsRedeemable?: InputMaybe<Scalars['Boolean']['input']>;
  isSplashBanner?: InputMaybe<Scalars['Boolean']['input']>;
  mall?: InputMaybe<Scalars['ID']['input']>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<SmopStatusEnum>;
  type?: InputMaybe<SmopBannerTypeEnum>;
  verticals?: InputMaybe<Array<InputMaybe<BannerVerticalEnum>>>;
};

export type BannerMallsInput = {
  isAppliedToAllMalls: Scalars['Boolean']['input'];
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type BannerRemoveMalls = {
  __typename?: 'BannerRemoveMalls';
  banner?: Maybe<Banner>;
  bannerErrors: Array<BannerError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export enum BannerSortField {
  BannerName = 'BANNER_NAME',
  CreationDate = 'CREATION_DATE',
  EndDate = 'END_DATE',
  Name = 'NAME',
  Number = 'NUMBER',
  SortOrder = 'SORT_ORDER',
  StartDate = 'START_DATE',
  UpdatedAt = 'UPDATED_AT'
}

export type BannerSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: BannerSortField;
};

export type BannerUpdate = {
  __typename?: 'BannerUpdate';
  banner?: Maybe<Banner>;
  bannerErrors: Array<BannerError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type BannerUpdateInput = {
  action?: InputMaybe<Scalars['JSONString']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONString']['input']>;
  dynamicLinkId?: InputMaybe<Scalars['ID']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  imageUrl?: InputMaybe<Scalars['Upload']['input']>;
  isSplashBanner?: InputMaybe<Scalars['Boolean']['input']>;
  mall?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sale?: InputMaybe<Scalars['ID']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<SmopStatusEnum>;
  verticals?: InputMaybe<Array<InputMaybe<BannerVerticalEnum>>>;
  voucher?: InputMaybe<Scalars['ID']['input']>;
};

export enum BannerVerticalEnum {
  Cinema = 'CINEMA',
  Food = 'FOOD',
  Grocery = 'GROCERY',
  Homepage = 'HOMEPAGE',
  InMallDeals = 'IN_MALL_DEALS',
  Shops = 'SHOPS',
  SmFulfilled = 'SM_FULFILLED'
}

export type Bin = Node & ObjectWithMetadata & {
  __typename?: 'Bin';
  binNo: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  isVisible?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  rack?: Maybe<Rack>;
};

export type BinCountableConnection = {
  __typename?: 'BinCountableConnection';
  edges: Array<BinCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type BinCountableEdge = {
  __typename?: 'BinCountableEdge';
  cursor: Scalars['String']['output'];
  node: Bin;
};

export type Book2go = {
  __typename?: 'Book2go';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type Book2goInput = {
  packageHeight?: InputMaybe<Scalars['DistanceScalar']['input']>;
  packageLength?: InputMaybe<Scalars['DistanceScalar']['input']>;
  packageWeight?: InputMaybe<Scalars['WeightScalar']['input']>;
  packageWidth?: InputMaybe<Scalars['DistanceScalar']['input']>;
};

export type BookThirdPartyRider = {
  __typename?: 'BookThirdPartyRider';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type Brand = Node & ObjectWithMetadata & {
  __typename?: 'Brand';
  accountManager?: Maybe<User>;
  address?: Maybe<Address>;
  brandGroup?: Maybe<BrandGroup>;
  cluster?: Maybe<Cluster>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deeplinkUrl?: Maybe<Scalars['String']['output']>;
  fiscalYearTrigger?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isFeatured: Scalars['Boolean']['output'];
  legalName?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Image>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  mobileNo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  originalLogo?: Maybe<Image>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  shopifyApiKey?: Maybe<Scalars['String']['output']>;
  shopifyApiSecret?: Maybe<Scalars['String']['output']>;
  shopifyApiShop?: Maybe<Scalars['String']['output']>;
  shopifyExclusionTags?: Maybe<Array<Maybe<ShopifyTags>>>;
  shopifyNonCodTags?: Maybe<Array<Maybe<ShopifyTags>>>;
  shortDynamicLink?: Maybe<Scalars['String']['output']>;
  status?: Maybe<SmopStatusEnum>;
  storeType?: Maybe<StoreTypeEnum>;
  swornDeclarationsFlag?: Maybe<Scalars['Boolean']['output']>;
  tenants?: Maybe<Array<Maybe<Tenant>>>;
  tinNo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId?: Maybe<Scalars['String']['output']>;
  vertical?: Maybe<BrandVerticalEnum>;
};


export type BrandLogoArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type BrandTenantsArgs = {
  mallDistance?: InputMaybe<Array<InputMaybe<MallDistanceInput>>>;
  mallIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  status?: InputMaybe<SmopStatusEnum>;
  withReservation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BrandCountableConnection = {
  __typename?: 'BrandCountableConnection';
  edges: Array<BrandCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type BrandCountableEdge = {
  __typename?: 'BrandCountableEdge';
  cursor: Scalars['String']['output'];
  node: Brand;
};

export type BrandCreate = {
  __typename?: 'BrandCreate';
  brand?: Maybe<BrandPrivate>;
  brandErrors: Array<BrandError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type BrandCreateInput = {
  accountManager?: InputMaybe<Scalars['ID']['input']>;
  address?: InputMaybe<AddressInput>;
  attachTo?: InputMaybe<Scalars['ID']['input']>;
  bankAccountName: Scalars['String']['input'];
  bankAccountNo: Scalars['String']['input'];
  bankName: Scalars['String']['input'];
  brandGroup?: InputMaybe<Scalars['ID']['input']>;
  brands?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  classification?: InputMaybe<ClassificationTypeEnum>;
  cluster?: InputMaybe<Scalars['ID']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  completeAddress?: InputMaybe<Scalars['String']['input']>;
  customerCode?: InputMaybe<Scalars['String']['input']>;
  dynamicLink?: InputMaybe<Scalars['String']['input']>;
  financeEmail: Scalars['String']['input'];
  financeMobileNo: Scalars['String']['input'];
  financeName: Scalars['String']['input'];
  groupCode?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  imageAlt?: InputMaybe<Scalars['String']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isLargeTaxpayer?: InputMaybe<Scalars['Boolean']['input']>;
  isPayoutEligible?: InputMaybe<Scalars['Boolean']['input']>;
  isSmacAffiliate?: InputMaybe<Scalars['Boolean']['input']>;
  legalName: Scalars['String']['input'];
  logo?: InputMaybe<Scalars['Upload']['input']>;
  mobileNo?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  shopifyApiKey?: InputMaybe<Scalars['String']['input']>;
  shopifyApiSecret?: InputMaybe<Scalars['String']['input']>;
  shopifyApiShop?: InputMaybe<Scalars['String']['input']>;
  signatoryDesignation?: InputMaybe<Scalars['String']['input']>;
  signatoryEmail: Scalars['String']['input'];
  signatoryMobileNo: Scalars['String']['input'];
  signatoryName: Scalars['String']['input'];
  status?: InputMaybe<SmopStatusEnum>;
  storeType?: InputMaybe<StoreTypeEnum>;
  swornDeclarationsFlag?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tagsStr?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tinNo: Scalars['String']['input'];
  vendorCode?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['String']['input']>;
  vertical?: InputMaybe<BrandVerticalEnum>;
};

export type BrandError = {
  __typename?: 'BrandError';
  code: BrandErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum BrandErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  MissingInternalDetails = 'MISSING_INTERNAL_DETAILS',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type BrandGenerateDynamicLink = {
  __typename?: 'BrandGenerateDynamicLink';
  brand?: Maybe<BrandPrivate>;
  brandErrors: Array<BrandError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type BrandGroup = Node & {
  __typename?: 'BrandGroup';
  category?: Maybe<Scalars['String']['output']>;
  classification?: Maybe<BrandGroupClassification>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  dynamicLink?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  isSmacAffiliate: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  sellers?: Maybe<Array<Maybe<Brand>>>;
  status?: Maybe<SmopStatusEnum>;
  tags?: Maybe<Array<Maybe<BrandTag>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vertical?: Maybe<BrandVerticalEnum>;
};


export type BrandGroupSellersArgs = {
  mallDistance?: InputMaybe<Array<InputMaybe<MallDistanceInput>>>;
  withReservation?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum BrandGroupClassification {
  FoodAndBeverages = 'FOOD_AND_BEVERAGES',
  GeneralMerchandise = 'GENERAL_MERCHANDISE'
}

export type BrandGroupCountableConnection = {
  __typename?: 'BrandGroupCountableConnection';
  edges: Array<BrandGroupCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type BrandGroupCountableEdge = {
  __typename?: 'BrandGroupCountableEdge';
  cursor: Scalars['String']['output'];
  node: BrandGroup;
};

export type BrandGroupCreate = {
  __typename?: 'BrandGroupCreate';
  brandErrors: Array<BrandError>;
  brandGroup?: Maybe<BrandGroup>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type BrandGroupCreateInput = {
  brands?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  classification?: InputMaybe<ClassificationTypeEnum>;
  code: Scalars['String']['input'];
  dynamicLink?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  imageAlt?: InputMaybe<Scalars['String']['input']>;
  isSmacAffiliate?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tagsStr?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vertical: BrandVerticalEnum;
};

export type BrandGroupDelete = {
  __typename?: 'BrandGroupDelete';
  brandErrors: Array<BrandError>;
  brandGroup?: Maybe<BrandGroup>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type BrandGroupInput = {
  classification?: InputMaybe<ClassificationTypeEnum>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isSmacAffiliate?: InputMaybe<Scalars['Boolean']['input']>;
  mallDistance?: InputMaybe<Array<InputMaybe<MallDistanceInput>>>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchInTags?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  vertical?: InputMaybe<BrandVerticalEnum>;
  withReservation?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum BrandGroupSortField {
  BrandGroupName = 'BRAND_GROUP_NAME',
  CreationDate = 'CREATION_DATE',
  MallDistance = 'MALL_DISTANCE',
  UpdateDate = 'UPDATE_DATE'
}

export type BrandGroupSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: BrandGroupSortField;
};

export type BrandGroupUpdate = {
  __typename?: 'BrandGroupUpdate';
  brandErrors: Array<BrandError>;
  brandGroup?: Maybe<BrandGroup>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type BrandGroupUpdateInput = {
  brands?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  classification?: InputMaybe<ClassificationTypeEnum>;
  code?: InputMaybe<Scalars['String']['input']>;
  dynamicLink?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  imageAlt?: InputMaybe<Scalars['String']['input']>;
  isSmacAffiliate?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tagsStr?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vertical?: InputMaybe<BrandVerticalEnum>;
};

export type BrandInput = {
  accountManager?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<DateTimeRangeInput>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isSmacAffiliate?: InputMaybe<Scalars['Boolean']['input']>;
  mall?: InputMaybe<Scalars['ID']['input']>;
  mallDistance?: InputMaybe<Array<InputMaybe<MallDistanceInput>>>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  storeType?: InputMaybe<StoreTypeEnum>;
};

export type BrandPrivate = Node & ObjectWithMetadata & {
  __typename?: 'BrandPrivate';
  accountManager?: Maybe<User>;
  address?: Maybe<Address>;
  bankAccountName?: Maybe<Scalars['String']['output']>;
  bankAccountNo?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  brandGroup?: Maybe<BrandGroup>;
  cluster?: Maybe<Cluster>;
  code?: Maybe<Scalars['String']['output']>;
  completeAddress?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customerCode?: Maybe<Scalars['String']['output']>;
  deeplinkUrl?: Maybe<Scalars['String']['output']>;
  financeEmail?: Maybe<Scalars['String']['output']>;
  financeMobileNo?: Maybe<Scalars['String']['output']>;
  financeName?: Maybe<Scalars['String']['output']>;
  fiscalYearTrigger?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isFeatured: Scalars['Boolean']['output'];
  isLargeTaxpayer?: Maybe<Scalars['Boolean']['output']>;
  isPayoutEligible?: Maybe<Scalars['Boolean']['output']>;
  legalName?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Image>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  mobileNo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  sellerId?: Maybe<Scalars['String']['output']>;
  shopifyApiKey?: Maybe<Scalars['String']['output']>;
  shopifyApiSecret?: Maybe<Scalars['String']['output']>;
  shopifyApiShop?: Maybe<Scalars['String']['output']>;
  shopifyExclusionTags?: Maybe<Array<Maybe<ShopifyTags>>>;
  shopifyNonCodTags?: Maybe<Array<Maybe<ShopifyTags>>>;
  shortDynamicLink?: Maybe<Scalars['String']['output']>;
  signatoryDesignation?: Maybe<Scalars['String']['output']>;
  signatoryEmail?: Maybe<Scalars['String']['output']>;
  signatoryMobileNo?: Maybe<Scalars['String']['output']>;
  signatoryName?: Maybe<Scalars['String']['output']>;
  status?: Maybe<SmopStatusEnum>;
  storeType?: Maybe<StoreTypeEnum>;
  swornDeclarationsFlag: Scalars['Boolean']['output'];
  tenants?: Maybe<Array<Maybe<TenantPrivate>>>;
  tinNo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorCode?: Maybe<Scalars['String']['output']>;
  vendorId?: Maybe<Scalars['String']['output']>;
  vertical?: Maybe<BrandVerticalEnum>;
};


export type BrandPrivateLogoArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type BrandPrivateCountableConnection = {
  __typename?: 'BrandPrivateCountableConnection';
  edges: Array<BrandPrivateCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type BrandPrivateCountableEdge = {
  __typename?: 'BrandPrivateCountableEdge';
  cursor: Scalars['String']['output'];
  node: BrandPrivate;
};

export enum BrandSortField {
  CreationDate = 'CREATION_DATE',
  MallDistance = 'MALL_DISTANCE',
  Number = 'NUMBER'
}

export type BrandSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: BrandSortField;
};

export type BrandTag = Node & {
  __typename?: 'BrandTag';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BrandTagCountableConnection = {
  __typename?: 'BrandTagCountableConnection';
  edges: Array<BrandTagCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type BrandTagCountableEdge = {
  __typename?: 'BrandTagCountableEdge';
  cursor: Scalars['String']['output'];
  node: BrandTag;
};

export type BrandTagCreate = {
  __typename?: 'BrandTagCreate';
  brandErrors: Array<BrandError>;
  brandTag?: Maybe<BrandTag>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type BrandTagCreateInput = {
  name: Scalars['String']['input'];
};

export type BrandTagDelete = {
  __typename?: 'BrandTagDelete';
  brandErrors: Array<BrandError>;
  brandTag?: Maybe<BrandTag>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type BrandTagInput = {
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type BrandTagUpdate = {
  __typename?: 'BrandTagUpdate';
  brandErrors: Array<BrandError>;
  brandTag?: Maybe<BrandTag>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type BrandUpdate = {
  __typename?: 'BrandUpdate';
  brand?: Maybe<BrandPrivate>;
  brandErrors: Array<BrandError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type BrandUpdateInput = {
  accountManager?: InputMaybe<Scalars['ID']['input']>;
  address?: InputMaybe<AddressInput>;
  attachTo?: InputMaybe<Scalars['ID']['input']>;
  bankAccountName?: InputMaybe<Scalars['String']['input']>;
  bankAccountNo?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  brandGroup?: InputMaybe<Scalars['ID']['input']>;
  cluster?: InputMaybe<Scalars['ID']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  completeAddress?: InputMaybe<Scalars['String']['input']>;
  customerCode?: InputMaybe<Scalars['String']['input']>;
  financeEmail?: InputMaybe<Scalars['String']['input']>;
  financeMobileNo?: InputMaybe<Scalars['String']['input']>;
  financeName?: InputMaybe<Scalars['String']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isLargeTaxpayer?: InputMaybe<Scalars['Boolean']['input']>;
  isPayoutEligible?: InputMaybe<Scalars['Boolean']['input']>;
  legalName?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['Upload']['input']>;
  mobileNo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  shopifyApiKey?: InputMaybe<Scalars['String']['input']>;
  shopifyApiSecret?: InputMaybe<Scalars['String']['input']>;
  shopifyApiShop?: InputMaybe<Scalars['String']['input']>;
  signatoryDesignation?: InputMaybe<Scalars['String']['input']>;
  signatoryEmail?: InputMaybe<Scalars['String']['input']>;
  signatoryMobileNo?: InputMaybe<Scalars['String']['input']>;
  signatoryName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SmopStatusEnum>;
  storeType?: InputMaybe<StoreTypeEnum>;
  swornDeclarationsFlag?: InputMaybe<Scalars['Boolean']['input']>;
  tinNo?: InputMaybe<Scalars['String']['input']>;
  vendorCode?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['String']['input']>;
  vertical?: InputMaybe<BrandVerticalEnum>;
};

export enum BrandVerticalEnum {
  Cyberzone = 'CYBERZONE',
  FoodAndBeverages = 'FOOD_AND_BEVERAGES',
  Grocery = 'GROCERY',
  Marketplace = 'MARKETPLACE',
  RetailAffiliates = 'RETAIL_AFFILIATES',
  SmFulfilled = 'SM_FULFILLED'
}

export type BulkProductError = {
  __typename?: 'BulkProductError';
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  code: ProductErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  products?: Maybe<Array<Scalars['ID']['output']>>;
  warehouses?: Maybe<Array<Scalars['ID']['output']>>;
};

export type BulkStockError = {
  __typename?: 'BulkStockError';
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  code: ProductErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type CancelAutoBooking = {
  __typename?: 'CancelAutoBooking';
  autoBookingError: Array<AutoBookingError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
};

export type Cart = Node & ObjectWithMetadata & {
  __typename?: 'Cart';
  cartLines?: Maybe<CartLineCountableConnection>;
  created: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lastChange: Scalars['DateTime']['output'];
  lines?: Maybe<Array<Maybe<CartLine>>>;
  mall: Mall;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  quantity: Scalars['Int']['output'];
  shippingMethod?: Maybe<ShippingMethod>;
  token: Scalars['UUID']['output'];
  user?: Maybe<User>;
  verticalType: StoreTypeEnum;
};


export type CartCartLinesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CartLineFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type CartCountableConnection = {
  __typename?: 'CartCountableConnection';
  edges: Array<CartCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CartCountableEdge = {
  __typename?: 'CartCountableEdge';
  cursor: Scalars['String']['output'];
  node: Cart;
};

export type CartCreate = {
  __typename?: 'CartCreate';
  cart?: Maybe<Cart>;
  cartErrors: Array<CartError>;
  created?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CartCreateInput = {
  lines: Array<InputMaybe<CartLineInput>>;
  mall: Scalars['ID']['input'];
  verticalType: StoreTypeEnum;
};

export type CartError = {
  __typename?: 'CartError';
  code: CartErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  variants?: Maybe<Array<Scalars['ID']['output']>>;
};

export enum CartErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
  QuantityGreaterThanLimit = 'QUANTITY_GREATER_THAN_LIMIT',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  ZeroQuantity = 'ZERO_QUANTITY'
}

export type CartFilterInput = {
  created?: InputMaybe<DateRangeInput>;
  excludeEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  mall?: InputMaybe<Scalars['ID']['input']>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  verticalType?: InputMaybe<Array<InputMaybe<StoreTypeEnum>>>;
  withQuantity?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CartLine = Node & {
  __typename?: 'CartLine';
  id: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  pricing?: Maybe<VariantPricingInfo>;
  product?: Maybe<Product>;
  quantity: Scalars['Int']['output'];
  stockOnMall?: Maybe<Stock>;
  tenant?: Maybe<Tenant>;
  variant: ProductVariant;
};


export type CartLinePricingArgs = {
  mallId?: InputMaybe<Scalars['ID']['input']>;
};

export type CartLineAddNote = {
  __typename?: 'CartLineAddNote';
  cartErrors: Array<CartError>;
  cartLine?: Maybe<CartLine>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CartLineCountableConnection = {
  __typename?: 'CartLineCountableConnection';
  edges: Array<CartLineCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CartLineCountableEdge = {
  __typename?: 'CartLineCountableEdge';
  cursor: Scalars['String']['output'];
  node: CartLine;
};

export type CartLineDelete = {
  __typename?: 'CartLineDelete';
  cart?: Maybe<Cart>;
  cartErrors: Array<CartError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CartLineFilterInput = {
  brands?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type CartLineInput = {
  notes?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  tenantId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};

export type CartLinesAdd = {
  __typename?: 'CartLinesAdd';
  cart?: Maybe<Cart>;
  cartErrors: Array<CartError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CartLinesUpdate = {
  __typename?: 'CartLinesUpdate';
  cart?: Maybe<Cart>;
  cartErrors: Array<CartError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export enum CartSortField {
  CreationDate = 'CREATION_DATE',
  Mall = 'MALL',
  Quantity = 'QUANTITY',
  UpdatedAt = 'UPDATED_AT'
}

export type CartSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: CartSortField;
};

export type CartSummaries = Node & {
  __typename?: 'CartSummaries';
  fbCart?: Maybe<CartSummary>;
  gmCart?: Maybe<CartSummary>;
  groceryCart?: Maybe<CartSummary>;
  id: Scalars['ID']['output'];
  sfCart?: Maybe<CartSummary>;
};

export type CartSummary = {
  __typename?: 'CartSummary';
  carts?: Maybe<CartCountableConnection>;
  subtotal?: Maybe<Scalars['Decimal']['output']>;
  totalQuantity?: Maybe<Scalars['Int']['output']>;
  verticalType: StoreTypeEnum;
};


export type CartSummaryCartsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type CartSummaryFilterInput = {
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  vertical?: InputMaybe<StoreTypeEnum>;
};

export type Category = Node & ObjectWithMetadata & {
  __typename?: 'Category';
  ancestors?: Maybe<CategoryCountableConnection>;
  backgroundImage?: Maybe<Image>;
  children?: Maybe<CategoryCountableConnection>;
  code?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  deeplinkUrl?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  descriptionJson: Scalars['JSONString']['output'];
  iconImage?: Maybe<Image>;
  id: Scalars['ID']['output'];
  isFeatured: Scalars['Boolean']['output'];
  level: Scalars['Int']['output'];
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  name: Scalars['String']['output'];
  parent?: Maybe<Category>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  products?: Maybe<ProductCountableConnection>;
  rootCategory?: Maybe<Category>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  shortDynamicLink?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  smMarketsId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<SmopStatusEnum>;
  storeType?: Maybe<StoreTypeEnum>;
  translation?: Maybe<CategoryTranslation>;
  /** @deprecated This field will be removed after 2020-07-31. */
  url?: Maybe<Scalars['String']['output']>;
};


export type CategoryAncestorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryBackgroundImageArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryIconImageArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type CategoryBulkDelete = {
  __typename?: 'CategoryBulkDelete';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CategoryClearMeta = {
  __typename?: 'CategoryClearMeta';
  category?: Maybe<Category>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CategoryClearPrivateMeta = {
  __typename?: 'CategoryClearPrivateMeta';
  category?: Maybe<Category>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CategoryCountableConnection = {
  __typename?: 'CategoryCountableConnection';
  edges: Array<CategoryCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CategoryCountableEdge = {
  __typename?: 'CategoryCountableEdge';
  cursor: Scalars['String']['output'];
  node: Category;
};

export type CategoryCreate = {
  __typename?: 'CategoryCreate';
  category?: Maybe<Category>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CategoryDelete = {
  __typename?: 'CategoryDelete';
  category?: Maybe<Category>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CategoryFilterInput = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isMappedToSmMarket?: InputMaybe<Scalars['Boolean']['input']>;
  malls?: InputMaybe<CategoryMallsInput>;
  onlyWithVisibleProducts?: InputMaybe<CategoryVisibilityInput>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  secondLevelWithSaleOnMall?: InputMaybe<Scalars['ID']['input']>;
  smMarketsIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  storeType?: InputMaybe<StoreTypeEnum>;
};

export type CategoryGenerateDynamicLink = {
  __typename?: 'CategoryGenerateDynamicLink';
  category?: Maybe<Category>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CategoryInput = {
  backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  backgroundImageAlt?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONString']['input']>;
  iconImage?: InputMaybe<Scalars['Upload']['input']>;
  iconImageAlt?: InputMaybe<Scalars['String']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<SeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  smMarketsId?: InputMaybe<Scalars['Int']['input']>;
  storeType?: InputMaybe<StoreTypeEnum>;
};

export type CategoryMallsInput = {
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  withPublishedProductOnMalls: Array<Scalars['ID']['input']>;
};

export enum CategorySortField {
  Name = 'NAME',
  ProductCount = 'PRODUCT_COUNT',
  Random = 'RANDOM',
  SubcategoryCount = 'SUBCATEGORY_COUNT'
}

export type CategorySortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: CategorySortField;
};

export type CategoryTranslatableContent = Node & {
  __typename?: 'CategoryTranslatableContent';
  category?: Maybe<Category>;
  description: Scalars['String']['output'];
  descriptionJson: Scalars['JSONString']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  translation?: Maybe<CategoryTranslation>;
};


export type CategoryTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type CategoryTranslate = {
  __typename?: 'CategoryTranslate';
  category?: Maybe<Category>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
};

export type CategoryTranslation = Node & {
  __typename?: 'CategoryTranslation';
  description: Scalars['String']['output'];
  descriptionJson: Scalars['JSONString']['output'];
  id: Scalars['ID']['output'];
  language: LanguageDisplay;
  name: Scalars['String']['output'];
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
};

export type CategoryUpdate = {
  __typename?: 'CategoryUpdate';
  category?: Maybe<Category>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CategoryUpdateMeta = {
  __typename?: 'CategoryUpdateMeta';
  category?: Maybe<Category>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CategoryUpdatePrivateMeta = {
  __typename?: 'CategoryUpdatePrivateMeta';
  category?: Maybe<Category>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CategoryVisibilityInput = {
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  level: Scalars['Int']['input'];
  malls?: InputMaybe<Array<Scalars['ID']['input']>>;
  onlyWithVisibleProducts: Scalars['Boolean']['input'];
};

export type Checkout = Node & ObjectWithMetadata & {
  __typename?: 'Checkout';
  availablePaymentGateways: Array<PaymentGateway>;
  availableShippingMethods: Array<Maybe<ShippingMethod>>;
  billingAddress?: Maybe<Address>;
  created: Scalars['DateTime']['output'];
  discount?: Maybe<Money>;
  discountName?: Maybe<Scalars['String']['output']>;
  distanceFromMall?: Maybe<Scalars['Float']['output']>;
  email: Scalars['String']['output'];
  giftCards?: Maybe<Array<Maybe<GiftCard>>>;
  hasCutlery: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isServiceable: Scalars['Boolean']['output'];
  isShippingRequired: Scalars['Boolean']['output'];
  lastChange: Scalars['DateTime']['output'];
  lines?: Maybe<Array<Maybe<CheckoutLine>>>;
  linkSmac?: Maybe<Scalars['Boolean']['output']>;
  mall?: Maybe<Mall>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  mobileAppVersion?: Maybe<Scalars['String']['output']>;
  note: Scalars['String']['output'];
  orderShopifyReference?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  quantity: Scalars['Int']['output'];
  shippingAddress?: Maybe<Address>;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingPrice?: Maybe<TaxedMoney>;
  showSmac?: Maybe<Scalars['Boolean']['output']>;
  subtotalPrice?: Maybe<TaxedMoney>;
  token: Scalars['UUID']['output'];
  totalPrice?: Maybe<TaxedMoney>;
  translatedDiscountName?: Maybe<Scalars['String']['output']>;
  travelTime?: Maybe<TravelTime>;
  user?: Maybe<User>;
  verticalType?: Maybe<CheckoutVerticalType>;
  voucherCode?: Maybe<Scalars['String']['output']>;
};

export type CheckoutAddPromoCode = {
  __typename?: 'CheckoutAddPromoCode';
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CheckoutAddressUpdate = {
  __typename?: 'CheckoutAddressUpdate';
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CheckoutBillingAddressUpdate = {
  __typename?: 'CheckoutBillingAddressUpdate';
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CheckoutClearMeta = {
  __typename?: 'CheckoutClearMeta';
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CheckoutClearPrivateMeta = {
  __typename?: 'CheckoutClearPrivateMeta';
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CheckoutComplete = {
  __typename?: 'CheckoutComplete';
  checkoutErrors: Array<CheckoutError>;
  confirmationData?: Maybe<Scalars['JSONString']['output']>;
  confirmationNeeded: Scalars['Boolean']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
};

export type CheckoutCountableConnection = {
  __typename?: 'CheckoutCountableConnection';
  edges: Array<CheckoutCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CheckoutCountableEdge = {
  __typename?: 'CheckoutCountableEdge';
  cursor: Scalars['String']['output'];
  node: Checkout;
};

export type CheckoutCreate = {
  __typename?: 'CheckoutCreate';
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  created?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CheckoutCreateInput = {
  billingAddress?: InputMaybe<AddressInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  lines: Array<InputMaybe<CheckoutLineInput>>;
  mall: Scalars['ID']['input'];
  mobileAppVersion?: InputMaybe<Scalars['String']['input']>;
  shippingAddress?: InputMaybe<AddressInput>;
  verticalType: StoreTypeEnum;
};

export type CheckoutCustomerAttach = {
  __typename?: 'CheckoutCustomerAttach';
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CheckoutCustomerDetach = {
  __typename?: 'CheckoutCustomerDetach';
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CheckoutEmailUpdate = {
  __typename?: 'CheckoutEmailUpdate';
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CheckoutError = {
  __typename?: 'CheckoutError';
  code: CheckoutErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  variants?: Maybe<Array<Scalars['ID']['output']>>;
};

export enum CheckoutErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  CheckoutNotFullyPaid = 'CHECKOUT_NOT_FULLY_PAID',
  GraphqlError = 'GRAPHQL_ERROR',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Invalid = 'INVALID',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  NotFound = 'NOT_FOUND',
  PaymentError = 'PAYMENT_ERROR',
  ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
  ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
  QuantityGreaterThanLimit = 'QUANTITY_GREATER_THAN_LIMIT',
  Required = 'REQUIRED',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  ShippingNotRequired = 'SHIPPING_NOT_REQUIRED',
  TaxError = 'TAX_ERROR',
  TenantNotActive = 'TENANT_NOT_ACTIVE',
  Unique = 'UNIQUE',
  VoucherNotApplicable = 'VOUCHER_NOT_APPLICABLE',
  ZeroQuantity = 'ZERO_QUANTITY'
}

export type CheckoutHasCutlery = {
  __typename?: 'CheckoutHasCutlery';
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CheckoutLine = Node & {
  __typename?: 'CheckoutLine';
  appliedSale?: Maybe<Sale>;
  discountedRetailPriceAmount?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  notes: Scalars['String']['output'];
  originalRetailPriceAmount?: Maybe<Scalars['Float']['output']>;
  quantity: Scalars['Int']['output'];
  requiresShipping?: Maybe<Scalars['Boolean']['output']>;
  totalPrice?: Maybe<TaxedMoney>;
  variant: ProductVariant;
};

export type CheckoutLineAddNote = {
  __typename?: 'CheckoutLineAddNote';
  checkoutErrors: Array<CheckoutError>;
  checkoutLine?: Maybe<CheckoutLine>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CheckoutLineCountableConnection = {
  __typename?: 'CheckoutLineCountableConnection';
  edges: Array<CheckoutLineCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CheckoutLineCountableEdge = {
  __typename?: 'CheckoutLineCountableEdge';
  cursor: Scalars['String']['output'];
  node: CheckoutLine;
};

export type CheckoutLineDelete = {
  __typename?: 'CheckoutLineDelete';
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CheckoutLineInput = {
  notes?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  tenantId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};

export type CheckoutLinesAdd = {
  __typename?: 'CheckoutLinesAdd';
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CheckoutLinesUpdate = {
  __typename?: 'CheckoutLinesUpdate';
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CheckoutPaymentCreate = {
  __typename?: 'CheckoutPaymentCreate';
  checkout?: Maybe<Checkout>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  payment?: Maybe<Payment>;
  paymentErrors: Array<PaymentError>;
};

export type CheckoutRemovePromoCode = {
  __typename?: 'CheckoutRemovePromoCode';
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CheckoutShippingAddressUpdate = {
  __typename?: 'CheckoutShippingAddressUpdate';
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CheckoutShippingMethodUpdate = {
  __typename?: 'CheckoutShippingMethodUpdate';
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CheckoutSubTotalError = {
  __typename?: 'CheckoutSubTotalError';
  code?: Maybe<CheckoutSubTotalErrorCodeEnum>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum CheckoutSubTotalErrorCodeEnum {
  FoodMaxAmountLimitError = 'FOOD_MAX_AMOUNT_LIMIT_ERROR',
  MinAmountError = 'MIN_AMOUNT_ERROR',
  NonFoodMaxAmountLimitError = 'NON_FOOD_MAX_AMOUNT_LIMIT_ERROR',
  SomethingWentWrongError = 'SOMETHING_WENT_WRONG_ERROR',
  UnavailableError = 'UNAVAILABLE_ERROR'
}

export type CheckoutUpdateMeta = {
  __typename?: 'CheckoutUpdateMeta';
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CheckoutUpdatePrivateMeta = {
  __typename?: 'CheckoutUpdatePrivateMeta';
  checkout?: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export enum CheckoutVerticalType {
  FoodAndBeverages = 'FOOD_AND_BEVERAGES',
  GeneralMerchandise = 'GENERAL_MERCHANDISE',
  Grocery = 'GROCERY',
  SmFulfilled = 'SM_FULFILLED'
}

export type Choice = Node & {
  __typename?: 'Choice';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  maximumChoice?: Maybe<Scalars['Int']['output']>;
  minimumChoice?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<Tenant>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ChoiceCountableConnection = {
  __typename?: 'ChoiceCountableConnection';
  edges: Array<ChoiceCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ChoiceCountableEdge = {
  __typename?: 'ChoiceCountableEdge';
  cursor: Scalars['String']['output'];
  node: Choice;
};

export type ChoiceCreate = {
  __typename?: 'ChoiceCreate';
  choice?: Maybe<Choice>;
  choiceErrors: Array<ChoiceError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type ChoiceCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  maximumChoice?: InputMaybe<Scalars['Int']['input']>;
  minimumChoice?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['ID']['input'];
};

export type ChoiceError = {
  __typename?: 'ChoiceError';
  code: ChoiceErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum ChoiceErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type ChoiceUpdate = {
  __typename?: 'ChoiceUpdate';
  choice?: Maybe<Choice>;
  choiceErrors: Array<ChoiceError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type ChoiceUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  maximumChoice?: InputMaybe<Scalars['Int']['input']>;
  minimumChoice?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenant: Scalars['ID']['input'];
};

export type ChoiceValue = {
  __typename?: 'ChoiceValue';
  raw?: Maybe<Scalars['String']['output']>;
  verbose?: Maybe<Scalars['String']['output']>;
};

export enum ClassificationTypeEnum {
  FoodAndBeverages = 'FOOD_AND_BEVERAGES',
  GeneralMerchandise = 'GENERAL_MERCHANDISE'
}

export type ClearCachePcb = {
  __typename?: 'ClearCachePCB';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Cluster = Node & {
  __typename?: 'Cluster';
  id: Scalars['ID']['output'];
  lowerPrepTimeDays?: Maybe<Scalars['Int']['output']>;
  lowerPrepTimeHours?: Maybe<Scalars['Int']['output']>;
  lowerPrepTimeMins?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  productType?: Maybe<ProductType>;
  upperPrepTimeDays?: Maybe<Scalars['Int']['output']>;
  upperPrepTimeHours?: Maybe<Scalars['Int']['output']>;
  upperPrepTimeMins?: Maybe<Scalars['Int']['output']>;
};

export type ClusterBulkDelete = {
  __typename?: 'ClusterBulkDelete';
  clusterErrors: Array<ClusterError>;
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type ClusterCountableConnection = {
  __typename?: 'ClusterCountableConnection';
  edges: Array<ClusterCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ClusterCountableEdge = {
  __typename?: 'ClusterCountableEdge';
  cursor: Scalars['String']['output'];
  node: Cluster;
};

export type ClusterCreate = {
  __typename?: 'ClusterCreate';
  cluster?: Maybe<Cluster>;
  clusterError: Array<ClusterError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  pauseConfig?: Maybe<ServicePauseConfig>;
};

export type ClusterCreateInput = {
  lowerPrepTimeDays: Scalars['Int']['input'];
  lowerPrepTimeHours: Scalars['Int']['input'];
  lowerPrepTimeMins: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  pauseCooldownPeriodMins?: InputMaybe<Scalars['Int']['input']>;
  pauseDurationMins?: InputMaybe<Scalars['Int']['input']>;
  pauseMaxExtensionMins?: InputMaybe<Scalars['Int']['input']>;
  productType: Scalars['ID']['input'];
  upperPrepTimeDays: Scalars['Int']['input'];
  upperPrepTimeHours: Scalars['Int']['input'];
  upperPrepTimeMins: Scalars['Int']['input'];
};

export type ClusterDelete = {
  __typename?: 'ClusterDelete';
  Cluster?: Maybe<Cluster>;
  clusterError: Array<ClusterError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type ClusterError = {
  __typename?: 'ClusterError';
  code: ClusterErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum ClusterErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export type ClusterInput = {
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ClusterUpdate = {
  __typename?: 'ClusterUpdate';
  cluster?: Maybe<Cluster>;
  clusterError: Array<ClusterError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  pauseConfig?: Maybe<ServicePauseConfig>;
};

export type Collection = Node & ObjectWithMetadata & {
  __typename?: 'Collection';
  backgroundImage?: Maybe<Image>;
  brand?: Maybe<Brand>;
  categories?: Maybe<CategoryCountableConnection>;
  color?: Maybe<Scalars['String']['output']>;
  deeplinkUrl?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  descriptionJson: Scalars['JSONString']['output'];
  featuredIn?: Maybe<Array<Maybe<PageTypeEnum>>>;
  iconImage?: Maybe<Image>;
  id: Scalars['ID']['output'];
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  isFeaturedOnSmFulfilledPage?: Maybe<Scalars['Boolean']['output']>;
  isFromShopify?: Maybe<Scalars['Boolean']['output']>;
  isPromo?: Maybe<Scalars['Boolean']['output']>;
  isPublished: Scalars['Boolean']['output'];
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  name: Scalars['String']['output'];
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  products?: Maybe<ProductCountableConnection>;
  publicationDate?: Maybe<Scalars['Date']['output']>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  shortDynamicLink?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  status?: Maybe<SmopStatusEnum>;
  thumbnailLinkImage?: Maybe<Image>;
  translation?: Maybe<CollectionTranslation>;
};


export type CollectionBackgroundImageArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type CollectionCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CategoryFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CategorySortingInput>;
};


export type CollectionIconImageArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type CollectionProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ProductOrder>;
};


export type CollectionThumbnailLinkImageArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type CollectionTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type CollectionAddProducts = {
  __typename?: 'CollectionAddProducts';
  collection?: Maybe<Collection>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CollectionBulkDelete = {
  __typename?: 'CollectionBulkDelete';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CollectionBulkPublish = {
  __typename?: 'CollectionBulkPublish';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CollectionClearMeta = {
  __typename?: 'CollectionClearMeta';
  collection?: Maybe<Collection>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CollectionClearPrivateMeta = {
  __typename?: 'CollectionClearPrivateMeta';
  collection?: Maybe<Collection>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CollectionCountableConnection = {
  __typename?: 'CollectionCountableConnection';
  edges: Array<CollectionCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CollectionCountableEdge = {
  __typename?: 'CollectionCountableEdge';
  cursor: Scalars['String']['output'];
  node: Collection;
};

export type CollectionCreate = {
  __typename?: 'CollectionCreate';
  collection?: Maybe<Collection>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CollectionCreateInput = {
  backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  backgroundImageAlt?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['ID']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONString']['input']>;
  featuredIn?: InputMaybe<Array<PageTypeEnum>>;
  iconImage?: InputMaybe<Scalars['Upload']['input']>;
  iconImageAlt?: InputMaybe<Scalars['String']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isFeaturedOnSmFulfilledPage?: InputMaybe<Scalars['Boolean']['input']>;
  isPromo?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  seo?: InputMaybe<SeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnailLinkImage?: InputMaybe<Scalars['Upload']['input']>;
  thumbnailLinkImageAlt?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionDelete = {
  __typename?: 'CollectionDelete';
  collection?: Maybe<Collection>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CollectionFilterInput = {
  brand?: InputMaybe<Scalars['ID']['input']>;
  featuredIn?: InputMaybe<Array<InputMaybe<PageTypeEnum>>>;
  featuredOnly?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isFromShopify?: InputMaybe<Scalars['Boolean']['input']>;
  isPromo?: InputMaybe<Scalars['Boolean']['input']>;
  isShopifyDefault?: InputMaybe<Scalars['Boolean']['input']>;
  published?: InputMaybe<CollectionPublished>;
  search?: InputMaybe<Scalars['String']['input']>;
  smFulfilledFeaturedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  verticals?: InputMaybe<Array<InputMaybe<StoreTypeEnum>>>;
};

export type CollectionGenerateDynamicLink = {
  __typename?: 'CollectionGenerateDynamicLink';
  collection?: Maybe<Collection>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CollectionInput = {
  backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  backgroundImageAlt?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['ID']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONString']['input']>;
  featuredIn?: InputMaybe<Array<PageTypeEnum>>;
  iconImage?: InputMaybe<Scalars['Upload']['input']>;
  iconImageAlt?: InputMaybe<Scalars['String']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isFeaturedOnSmFulfilledPage?: InputMaybe<Scalars['Boolean']['input']>;
  isPromo?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  seo?: InputMaybe<SeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnailLinkImage?: InputMaybe<Scalars['Upload']['input']>;
  thumbnailLinkImageAlt?: InputMaybe<Scalars['String']['input']>;
};

export enum CollectionPublished {
  Hidden = 'HIDDEN',
  Published = 'PUBLISHED'
}

export type CollectionRemoveProducts = {
  __typename?: 'CollectionRemoveProducts';
  collection?: Maybe<Collection>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CollectionReorderProducts = {
  __typename?: 'CollectionReorderProducts';
  collection?: Maybe<Collection>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export enum CollectionSortField {
  Availability = 'AVAILABILITY',
  Name = 'NAME',
  ProductCount = 'PRODUCT_COUNT',
  PublicationDate = 'PUBLICATION_DATE'
}

export type CollectionSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: CollectionSortField;
};

export type CollectionTranslatableContent = Node & {
  __typename?: 'CollectionTranslatableContent';
  collection?: Maybe<Collection>;
  description: Scalars['String']['output'];
  descriptionJson: Scalars['JSONString']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  translation?: Maybe<CollectionTranslation>;
};


export type CollectionTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type CollectionTranslate = {
  __typename?: 'CollectionTranslate';
  collection?: Maybe<Collection>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
};

export type CollectionTranslation = Node & {
  __typename?: 'CollectionTranslation';
  description: Scalars['String']['output'];
  descriptionJson: Scalars['JSONString']['output'];
  id: Scalars['ID']['output'];
  language: LanguageDisplay;
  name: Scalars['String']['output'];
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
};

export type CollectionUpdate = {
  __typename?: 'CollectionUpdate';
  collection?: Maybe<Collection>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CollectionUpdateMeta = {
  __typename?: 'CollectionUpdateMeta';
  collection?: Maybe<Collection>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type CollectionUpdatePrivateMeta = {
  __typename?: 'CollectionUpdatePrivateMeta';
  collection?: Maybe<Collection>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export enum CompletedReasonsEnum {
  Delivered = 'DELIVERED',
  Other = 'OTHER',
  PickedUp = 'PICKED_UP'
}

export type ConfigurationItem = {
  __typename?: 'ConfigurationItem';
  helpText?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type?: Maybe<ConfigurationTypeFieldEnum>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ConfigurationItemInput = {
  name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export enum ConfigurationTypeFieldEnum {
  Boolean = 'BOOLEAN',
  Password = 'PASSWORD',
  Secret = 'SECRET',
  Secretmultiline = 'SECRETMULTILINE',
  String = 'STRING'
}

export type ConfirmAccount = {
  __typename?: 'ConfirmAccount';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type ConfirmEmailChange = {
  __typename?: 'ConfirmEmailChange';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type ContactUsEmail = {
  __typename?: 'ContactUsEmail';
  contactUsError: Array<ContactUsError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ContactUsEmailInput = {
  company: Scalars['String']['input'];
  concern: Scalars['String']['input'];
  contactNumber: Scalars['String']['input'];
  emailAddress: Scalars['String']['input'];
  fileUpload?: InputMaybe<Scalars['Upload']['input']>;
  fullName: Scalars['String']['input'];
  mallBranch: Scalars['ID']['input'];
  message: Scalars['String']['input'];
};

export type ContactUsError = {
  __typename?: 'ContactUsError';
  code: ContactUsErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum ContactUsErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  Required = 'REQUIRED'
}

export enum CountryCode {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Eu = 'EU',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export type CountryDisplay = {
  __typename?: 'CountryDisplay';
  code: Scalars['String']['output'];
  country: Scalars['String']['output'];
  vat: Vat;
};

export type Coupon = Node & {
  __typename?: 'Coupon';
  accessImage?: Maybe<Image>;
  accessPageDescription: Scalars['String']['output'];
  accessPageSubtitle: Scalars['String']['output'];
  accessPageTagline: Scalars['String']['output'];
  assignedAt?: Maybe<Scalars['DateTime']['output']>;
  assignee: CouponAssignee;
  availableQuantity?: Maybe<Scalars['Int']['output']>;
  availableUsageLeft?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<CouponCategoryEnum>;
  code: Scalars['String']['output'];
  collection?: Maybe<CouponCollection>;
  couponActivityLogs?: Maybe<DiscountActivityLogCountableConnection>;
  couponRedemptions?: Maybe<CouponRedemptionCountableConnection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  currency: Scalars['String']['output'];
  dealType: CouponDealType;
  deeplinkUrl: Scalars['String']['output'];
  discountValue?: Maybe<Scalars['Float']['output']>;
  endDate: Scalars['DateTime']['output'];
  eventEndDate?: Maybe<Scalars['DateTime']['output']>;
  eventLocation: Scalars['String']['output'];
  eventStartDate?: Maybe<Scalars['DateTime']['output']>;
  hasMalls?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isClaimable?: Maybe<Scalars['Boolean']['output']>;
  isDuplicate: Scalars['Boolean']['output'];
  isFeatured: Scalars['Boolean']['output'];
  isHidden: Scalars['Boolean']['output'];
  isNationwide?: Maybe<Scalars['Boolean']['output']>;
  isRedeemable?: Maybe<Scalars['Boolean']['output']>;
  isUsageTimerApplied: Scalars['Boolean']['output'];
  mainPromoDescription: Scalars['String']['output'];
  mainPromoTitle: Scalars['String']['output'];
  malls?: Maybe<MallCountableConnection>;
  marksNewCustomer: Scalars['Boolean']['output'];
  mechanics: Scalars['String']['output'];
  name: Scalars['String']['output'];
  occurence?: Maybe<CouponOccurenceEnum>;
  occurenceExclude?: Maybe<Array<Maybe<CouponOccurenceExcludeEnum>>>;
  promoImage?: Maybe<Image>;
  quantity?: Maybe<Scalars['Int']['output']>;
  redeemEndDate: Scalars['DateTime']['output'];
  redeemStartDate: Scalars['DateTime']['output'];
  redeemType?: Maybe<CouponRedeemTypeEnum>;
  redemptionExclude?: Maybe<Array<Maybe<CouponOccurenceExcludeEnum>>>;
  redemptionFrequency?: Maybe<CouponOccurenceEnum>;
  shortDynamicLink: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
  status?: Maybe<CouponStatusEnum>;
  usageLimit?: Maybe<Scalars['Int']['output']>;
  usageTimerHour?: Maybe<Scalars['Int']['output']>;
  usageTimerMinute?: Maybe<Scalars['Int']['output']>;
  usageTimerSecond?: Maybe<Scalars['Int']['output']>;
  userType?: Maybe<CouponUserTypeEnum>;
};


export type CouponAccessImageArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type CouponCouponActivityLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type CouponCouponRedemptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CouponRedemptionFilterInput>;
  filterByToken?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CouponRedemptionSortingInput>;
};


export type CouponMallsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MallInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<MallSortingInput>;
  status?: InputMaybe<SmopStatusEnum>;
};


export type CouponPromoImageArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type CouponActivate = {
  __typename?: 'CouponActivate';
  coupon?: Maybe<Coupon>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export enum CouponAssignee {
  AppDevelopment = 'APP_DEVELOPMENT',
  HoMarketing = 'HO_MARKETING',
  MallMarketing = 'MALL_MARKETING',
  SmoCommercial = 'SMO_COMMERCIAL',
  SmoMarketing = 'SMO_MARKETING',
  SmDeals = 'SM_DEALS'
}

export enum CouponAssigneeEnum {
  AppDevelopment = 'APP_DEVELOPMENT',
  HoMarketing = 'HO_MARKETING',
  MallMarketing = 'MALL_MARKETING',
  SmoCommercial = 'SMO_COMMERCIAL',
  SmoMarketing = 'SMO_MARKETING',
  SmDeals = 'SM_DEALS'
}

export enum CouponCategoryEnum {
  Cyberzone = 'CYBERZONE',
  Dining = 'DINING',
  Entertainment = 'ENTERTAINMENT',
  Groceries = 'GROCERIES',
  Shopping = 'SHOPPING',
  Wellness = 'WELLNESS'
}

export type CouponClaim = {
  __typename?: 'CouponClaim';
  couponRedemption?: Maybe<CouponRedemption>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CouponCollection = Node & {
  __typename?: 'CouponCollection';
  bannerImage?: Maybe<Image>;
  categories?: Maybe<Array<Maybe<CouponCollectionCategoryEnum>>>;
  classification?: Maybe<CouponCollectionClassificationEnum>;
  coupons?: Maybe<CouponCountableConnection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deeplinkUrl: Scalars['String']['output'];
  endDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isHidden: Scalars['Boolean']['output'];
  shortDynamicLink: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
  status?: Maybe<CouponCollectionStatusEnum>;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
  writeup: Scalars['String']['output'];
};


export type CouponCollectionBannerImageArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type CouponCollectionCouponsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CouponFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CouponSortingInput>;
};

export enum CouponCollectionCategoryEnum {
  Cyberzone = 'CYBERZONE',
  Dining = 'DINING',
  Entertainment = 'ENTERTAINMENT',
  Events = 'EVENTS',
  Groceries = 'GROCERIES',
  Shopping = 'SHOPPING',
  Wellness = 'WELLNESS'
}

export enum CouponCollectionClassificationEnum {
  All = 'ALL',
  Deals = 'DEALS',
  Events = 'EVENTS'
}

export type CouponCollectionCountableConnection = {
  __typename?: 'CouponCollectionCountableConnection';
  edges: Array<CouponCollectionCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CouponCollectionCountableEdge = {
  __typename?: 'CouponCollectionCountableEdge';
  cursor: Scalars['String']['output'];
  node: CouponCollection;
};

export type CouponCollectionCreate = {
  __typename?: 'CouponCollectionCreate';
  couponCollection?: Maybe<CouponCollection>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CouponCollectionCreateInput = {
  bannerImage?: InputMaybe<Scalars['Upload']['input']>;
  bannerImageAlt?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<CouponCollectionCategoryEnum>>>;
  classification?: InputMaybe<CouponCollectionClassificationEnum>;
  coupons?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<CouponCollectionStatusEnum>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  writeup?: InputMaybe<Scalars['String']['input']>;
};

export type CouponCollectionDelete = {
  __typename?: 'CouponCollectionDelete';
  couponCollection?: Maybe<CouponCollection>;
  couponcollection?: Maybe<CouponCollection>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CouponCollectionFilterInput = {
  categories?: InputMaybe<Array<InputMaybe<CouponCollectionCategoryEnum>>>;
  classification?: InputMaybe<Array<InputMaybe<CouponCollectionClassificationEnum>>>;
  createdAt?: InputMaybe<DateTimeRangeInput>;
  endDate?: InputMaybe<DateTimeRangeInput>;
  featureIndex?: InputMaybe<IntRangeInput>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mallCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mallIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<Array<InputMaybe<CouponCollectionStatusEnum>>>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
  userTypes?: InputMaybe<Array<InputMaybe<CouponUserTypeEnum>>>;
};

export type CouponCollectionGenerateDynamicLink = {
  __typename?: 'CouponCollectionGenerateDynamicLink';
  couponCollection?: Maybe<CouponCollection>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export enum CouponCollectionSortField {
  CreatedAt = 'CREATED_AT',
  EndDate = 'END_DATE',
  FeatureIndex = 'FEATURE_INDEX',
  StartDate = 'START_DATE',
  Title = 'TITLE',
  UpdatedAt = 'UPDATED_AT'
}

export type CouponCollectionSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: CouponCollectionSortField;
};

export enum CouponCollectionStatusEnum {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Draft = 'DRAFT',
  Expired = 'EXPIRED',
  Inactive = 'INACTIVE',
  Scheduled = 'SCHEDULED'
}

export type CouponCollectionToggleActivate = {
  __typename?: 'CouponCollectionToggleActivate';
  couponCollection?: Maybe<CouponCollection>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CouponCollectionToggleIsHidden = {
  __typename?: 'CouponCollectionToggleIsHidden';
  couponCollection?: Maybe<CouponCollection>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CouponCollectionUpdate = {
  __typename?: 'CouponCollectionUpdate';
  couponCollection?: Maybe<CouponCollection>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CouponCollectionUpdateInput = {
  bannerImage?: InputMaybe<Scalars['Upload']['input']>;
  bannerImageAlt?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<CouponCollectionCategoryEnum>>>;
  classification?: InputMaybe<CouponCollectionClassificationEnum>;
  coupons?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<CouponCollectionStatusEnum>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  writeup?: InputMaybe<Scalars['String']['input']>;
};

export type CouponCountableConnection = {
  __typename?: 'CouponCountableConnection';
  categoriesAvailable?: Maybe<Array<Maybe<CouponCategoryEnum>>>;
  categoriesList?: Maybe<Array<Maybe<CouponCategoryEnum>>>;
  edges: Array<CouponCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CouponCountableEdge = {
  __typename?: 'CouponCountableEdge';
  cursor: Scalars['String']['output'];
  node: Coupon;
};

export type CouponCreate = {
  __typename?: 'CouponCreate';
  coupon?: Maybe<Coupon>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CouponCreateInput = {
  accessImage: Scalars['Upload']['input'];
  accessImageAlt?: InputMaybe<Scalars['String']['input']>;
  accessPageDescription: Scalars['String']['input'];
  accessPageSubtitle: Scalars['String']['input'];
  accessPageTagline: Scalars['String']['input'];
  assignee?: InputMaybe<CouponAssigneeEnum>;
  category?: InputMaybe<CouponCategoryEnum>;
  code: Scalars['String']['input'];
  collection?: InputMaybe<Scalars['ID']['input']>;
  dealType: CouponDealTypeEnum;
  discountValue: Scalars['PositiveDecimal']['input'];
  endDate: Scalars['DateTime']['input'];
  eventEndDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventLocation?: InputMaybe<Scalars['String']['input']>;
  eventStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  hasMalls?: InputMaybe<Scalars['Boolean']['input']>;
  isDuplicate: Scalars['Boolean']['input'];
  isFeatured: Scalars['Boolean']['input'];
  isHidden: Scalars['Boolean']['input'];
  isNationwide?: InputMaybe<Scalars['Boolean']['input']>;
  isUsageTimerApplied: Scalars['Boolean']['input'];
  mainPromoDescription: Scalars['String']['input'];
  mainPromoTitle: Scalars['String']['input'];
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mechanics: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  occurence: CouponOccurenceEnum;
  occurenceExclude: Array<InputMaybe<CouponOccurenceExcludeEnum>>;
  promoImage: Scalars['Upload']['input'];
  promoImageAlt?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  redeemEndDate: Scalars['DateTime']['input'];
  redeemStartDate: Scalars['DateTime']['input'];
  redeemType: CouponRedeemTypeEnum;
  redemptionExclude: Array<InputMaybe<CouponOccurenceExcludeEnum>>;
  redemptionFrequency: CouponOccurenceEnum;
  startDate: Scalars['DateTime']['input'];
  usageLimit: Scalars['Int']['input'];
  usageTimerHour?: InputMaybe<Scalars['Int']['input']>;
  usageTimerMinute?: InputMaybe<Scalars['Int']['input']>;
  usageTimerSecond?: InputMaybe<Scalars['Int']['input']>;
  userType: CouponUserTypeEnum;
};

export type CouponDeactivate = {
  __typename?: 'CouponDeactivate';
  coupon?: Maybe<Coupon>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export enum CouponDealType {
  Deals = 'DEALS',
  Events = 'EVENTS'
}

export enum CouponDealTypeEnum {
  Deals = 'DEALS',
  Events = 'EVENTS'
}

export type CouponDelete = {
  __typename?: 'CouponDelete';
  coupon?: Maybe<Coupon>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CouponFilterInput = {
  assignee?: InputMaybe<Array<InputMaybe<CouponAssigneeEnum>>>;
  category?: InputMaybe<Array<InputMaybe<CouponCategoryEnum>>>;
  collectionIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dealType?: InputMaybe<Array<InputMaybe<CouponDealTypeEnum>>>;
  discountValue?: InputMaybe<PriceRangeInput>;
  endDate?: InputMaybe<DateTimeRangeInput>;
  eventEndDate?: InputMaybe<DateTimeRangeInput>;
  eventStartDate?: InputMaybe<DateTimeRangeInput>;
  exactStartEndDate?: InputMaybe<Scalars['DateTime']['input']>;
  hasMalls?: InputMaybe<Scalars['Boolean']['input']>;
  isAppliedToAllMalls?: InputMaybe<Scalars['Boolean']['input']>;
  isClaimable?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  isNationwide?: InputMaybe<Scalars['Boolean']['input']>;
  isRedeemable?: InputMaybe<Scalars['Boolean']['input']>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  occurence?: InputMaybe<Array<InputMaybe<CouponOccurenceEnum>>>;
  occurenceExclude?: InputMaybe<Array<InputMaybe<CouponOccurenceExcludeEnum>>>;
  participatingMalls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  quantity?: InputMaybe<IntRangeInput>;
  redeemEndDate?: InputMaybe<DateTimeRangeInput>;
  redeemStartDate?: InputMaybe<DateTimeRangeInput>;
  redeemType?: InputMaybe<Array<InputMaybe<CouponRedeemTypeEnum>>>;
  redemptionClaimedAt?: InputMaybe<DateTimeRangeInput>;
  redemptionExclude?: InputMaybe<Array<InputMaybe<CouponOccurenceExcludeEnum>>>;
  redemptionFrequency?: InputMaybe<Array<InputMaybe<CouponOccurenceEnum>>>;
  redemptionRedeemedAt?: InputMaybe<DateTimeRangeInput>;
  redemptionSearch?: InputMaybe<Scalars['String']['input']>;
  redemptionStatus?: InputMaybe<Array<InputMaybe<CouponRedemptionStatusEnum>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchName?: InputMaybe<Scalars['String']['input']>;
  showHiddenCoupons?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<Array<InputMaybe<CouponStatusEnum>>>;
  usageLimit?: InputMaybe<IntRangeInput>;
  useMallsFilterFallback?: InputMaybe<Scalars['Boolean']['input']>;
  userHasRedemption?: InputMaybe<Scalars['Boolean']['input']>;
  userType?: InputMaybe<Array<InputMaybe<CouponUserTypeEnum>>>;
  validRedeemEndDate?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CouponGenerateDynamicLink = {
  __typename?: 'CouponGenerateDynamicLink';
  coupon?: Maybe<Coupon>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CouponManualReorder = {
  __typename?: 'CouponManualReorder';
  coupons?: Maybe<Array<Maybe<Coupon>>>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CouponManualReorderInput = {
  coupons: Array<InputMaybe<Scalars['ID']['input']>>;
  exchangeIndices?: InputMaybe<Scalars['Boolean']['input']>;
  insertAfter?: InputMaybe<Scalars['ID']['input']>;
  insertBefore?: InputMaybe<Scalars['ID']['input']>;
};

export enum CouponNotificationStatusEnum {
  ForRedemption = 'FOR_REDEMPTION',
  Idle = 'IDLE',
  NearExpiry = 'NEAR_EXPIRY',
  ReadNearExpiry = 'READ_NEAR_EXPIRY',
  ReadRedemption = 'READ_REDEMPTION'
}

export enum CouponOccurenceEnum {
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
  Yearly = 'YEARLY'
}

export enum CouponOccurenceExcludeEnum {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type CouponPresetReorder = {
  __typename?: 'CouponPresetReorder';
  coupon?: Maybe<Coupon>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CouponPresetReorderInput = {
  couponId: Scalars['ID']['input'];
  reorderPreset: CouponReorderActionEnum;
};

export type CouponRedeem = {
  __typename?: 'CouponRedeem';
  couponRedemption?: Maybe<CouponRedemption>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export enum CouponRedeemTypeEnum {
  RedeemLater = 'REDEEM_LATER',
  RedeemNow = 'REDEEM_NOW'
}

export type CouponRedemption = Node & {
  __typename?: 'CouponRedemption';
  claimedAt?: Maybe<Scalars['DateTime']['output']>;
  code: Scalars['String']['output'];
  coupon?: Maybe<Coupon>;
  id: Scalars['ID']['output'];
  notifStatus: CouponRedemptionNotifStatus;
  redeemedAt?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<CouponRedemptionStatusEnum>;
  user?: Maybe<User>;
};

export type CouponRedemptionCountableConnection = {
  __typename?: 'CouponRedemptionCountableConnection';
  edges: Array<CouponRedemptionCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CouponRedemptionCountableEdge = {
  __typename?: 'CouponRedemptionCountableEdge';
  cursor: Scalars['String']['output'];
  node: CouponRedemption;
};

export type CouponRedemptionFilterInput = {
  claimedAt?: InputMaybe<DateTimeRangeInput>;
  coupon?: InputMaybe<Scalars['ID']['input']>;
  date?: InputMaybe<DateTimeRangeInput>;
  notifStatus?: InputMaybe<Array<InputMaybe<CouponNotificationStatusEnum>>>;
  redeemedAt?: InputMaybe<DateTimeRangeInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<CouponRedemptionStatusEnum>>>;
  user?: InputMaybe<Scalars['ID']['input']>;
};

export enum CouponRedemptionNotifStatus {
  ForRedemption = 'FOR_REDEMPTION',
  Idle = 'IDLE',
  NearExpiry = 'NEAR_EXPIRY',
  ReadNearExpiry = 'READ_NEAR_EXPIRY',
  ReadRedemption = 'READ_REDEMPTION'
}

export enum CouponRedemptionSortField {
  ClaimedAt = 'CLAIMED_AT',
  Code = 'CODE',
  Coupon = 'COUPON',
  ExpiredAt = 'EXPIRED_AT',
  RedeemedAt = 'REDEEMED_AT'
}

export type CouponRedemptionSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: CouponRedemptionSortField;
};

export enum CouponRedemptionStatusEnum {
  Claimed = 'CLAIMED',
  Expired = 'EXPIRED',
  Redeemed = 'REDEEMED'
}

export type CouponRedemptionUpdateNotifStatus = {
  __typename?: 'CouponRedemptionUpdateNotifStatus';
  couponRedemptions?: Maybe<Array<Maybe<CouponRedemption>>>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export enum CouponReorderActionEnum {
  BottomMost = 'BOTTOM_MOST',
  OneDown = 'ONE_DOWN',
  OneUp = 'ONE_UP',
  TopMost = 'TOP_MOST'
}

export enum CouponSortField {
  AssignedAt = 'ASSIGNED_AT',
  Code = 'CODE',
  CreatedAt = 'CREATED_AT',
  EndDate = 'END_DATE',
  EventEndDate = 'EVENT_END_DATE',
  EventEndDateName = 'EVENT_END_DATE_NAME',
  EventEndDatePromo = 'EVENT_END_DATE_PROMO',
  EventStartDate = 'EVENT_START_DATE',
  EventStartDateName = 'EVENT_START_DATE_NAME',
  EventStartDatePromo = 'EVENT_START_DATE_PROMO',
  IsFeaturedName = 'IS_FEATURED_NAME',
  IsFeaturedPromoTitle = 'IS_FEATURED_PROMO_TITLE',
  MainPromoTitle = 'MAIN_PROMO_TITLE',
  MallDistanceNationwide = 'MALL_DISTANCE_NATIONWIDE',
  MallDistanceOrChoice = 'MALL_DISTANCE_OR_CHOICE',
  MallFeatureNationwide = 'MALL_FEATURE_NATIONWIDE',
  MallNationwideCreationDate = 'MALL_NATIONWIDE_CREATION_DATE',
  MostRecentFeatured = 'MOST_RECENT_FEATURED',
  Name = 'NAME',
  OrderedFeatured = 'ORDERED_FEATURED',
  OrderedFeaturedName = 'ORDERED_FEATURED_NAME',
  OrderedFeaturedPromoTitle = 'ORDERED_FEATURED_PROMO_TITLE',
  RedeemEndDate = 'REDEEM_END_DATE',
  RedeemEndDateName = 'REDEEM_END_DATE_NAME',
  RedeemEndDatePromo = 'REDEEM_END_DATE_PROMO',
  RedeemStartDate = 'REDEEM_START_DATE',
  RedeemStartDateName = 'REDEEM_START_DATE_NAME',
  RedeemStartDatePromo = 'REDEEM_START_DATE_PROMO',
  RedemptionClaimedAt = 'REDEMPTION_CLAIMED_AT',
  RedemptionExpiredAt = 'REDEMPTION_EXPIRED_AT',
  RedemptionRedeemedAt = 'REDEMPTION_REDEEMED_AT',
  StartDate = 'START_DATE',
  UpdatedAt = 'UPDATED_AT'
}

export type CouponSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: CouponSortField;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  userLocation?: InputMaybe<UserLocationInput>;
};

export enum CouponStatusEnum {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Deleted = 'DELETED',
  Draft = 'DRAFT',
  Expired = 'EXPIRED',
  Inactive = 'INACTIVE',
  Scheduled = 'SCHEDULED'
}

export type CouponToggleIsFeatured = {
  __typename?: 'CouponToggleIsFeatured';
  coupon?: Maybe<Coupon>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CouponUpdate = {
  __typename?: 'CouponUpdate';
  coupon?: Maybe<Coupon>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CouponUpdateInput = {
  accessImage?: InputMaybe<Scalars['Upload']['input']>;
  accessImageAlt?: InputMaybe<Scalars['String']['input']>;
  accessPageDescription: Scalars['String']['input'];
  accessPageSubtitle: Scalars['String']['input'];
  accessPageTagline: Scalars['String']['input'];
  assignee?: InputMaybe<CouponAssigneeEnum>;
  category?: InputMaybe<CouponCategoryEnum>;
  code: Scalars['String']['input'];
  collection?: InputMaybe<Scalars['ID']['input']>;
  dealType: CouponDealTypeEnum;
  discountValue: Scalars['PositiveDecimal']['input'];
  endDate: Scalars['DateTime']['input'];
  eventEndDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventLocation?: InputMaybe<Scalars['String']['input']>;
  eventStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  hasMalls?: InputMaybe<Scalars['Boolean']['input']>;
  isDuplicate: Scalars['Boolean']['input'];
  isFeatured: Scalars['Boolean']['input'];
  isHidden: Scalars['Boolean']['input'];
  isNationwide?: InputMaybe<Scalars['Boolean']['input']>;
  isUsageTimerApplied: Scalars['Boolean']['input'];
  mainPromoDescription: Scalars['String']['input'];
  mainPromoTitle: Scalars['String']['input'];
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mechanics: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  occurence: CouponOccurenceEnum;
  occurenceExclude: Array<InputMaybe<CouponOccurenceExcludeEnum>>;
  promoImage?: InputMaybe<Scalars['Upload']['input']>;
  promoImageAlt?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  redeemEndDate: Scalars['DateTime']['input'];
  redeemStartDate: Scalars['DateTime']['input'];
  redeemType: CouponRedeemTypeEnum;
  redemptionExclude: Array<InputMaybe<CouponOccurenceExcludeEnum>>;
  redemptionFrequency: CouponOccurenceEnum;
  startDate: Scalars['DateTime']['input'];
  usageLimit: Scalars['Int']['input'];
  usageTimerHour?: InputMaybe<Scalars['Int']['input']>;
  usageTimerMinute?: InputMaybe<Scalars['Int']['input']>;
  usageTimerSecond?: InputMaybe<Scalars['Int']['input']>;
  userType: CouponUserTypeEnum;
};

export enum CouponUserTypeEnum {
  All = 'ALL',
  Existing = 'EXISTING',
  New = 'NEW'
}

export enum CourierTypeEnum {
  Grab = 'GRAB',
  InHouse = 'IN_HOUSE',
  Lalamove = 'LALAMOVE',
  Others = 'OTHERS',
  Pandago = 'PANDAGO'
}

export type CreatePauseReason = {
  __typename?: 'CreatePauseReason';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  pauseReason?: Maybe<ServicePauseReason>;
  servicePauseError: Array<ServicePauseError>;
};

export type CreatePauseReasonInput = {
  pauseType: PauseTypeEnum;
  reasonTitle: Scalars['String']['input'];
};

export type CreateRemittanceManualAdjustment = {
  __typename?: 'CreateRemittanceManualAdjustment';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type CreateRemittanceManualOverride = {
  __typename?: 'CreateRemittanceManualOverride';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
  remittance?: Maybe<Remittance>;
};

export type CreateToken = {
  __typename?: 'CreateToken';
  accountErrors: Array<AccountError>;
  csrfToken?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type CreditCard = {
  __typename?: 'CreditCard';
  brand: Scalars['String']['output'];
  expMonth?: Maybe<Scalars['Int']['output']>;
  expYear?: Maybe<Scalars['Int']['output']>;
  firstDigits?: Maybe<Scalars['String']['output']>;
  lastDigits: Scalars['String']['output'];
};

export enum CreditCardSortField {
  Created = 'CREATED',
  ExpirationDate = 'EXPIRATION_DATE',
  Name = 'NAME',
  Type = 'TYPE'
}

export type CreditCardSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: CreditCardSortField;
};

export type CustomerBulkDelete = {
  __typename?: 'CustomerBulkDelete';
  accountErrors: Array<AccountError>;
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type CustomerCreate = {
  __typename?: 'CustomerCreate';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type CustomerDelete = {
  __typename?: 'CustomerDelete';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type CustomerEmailUpdateOtpGenerate = {
  __typename?: 'CustomerEmailUpdateOtpGenerate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  oTP?: Maybe<OtpPrivate>;
  otp?: Maybe<OtpPrivate>;
  otpErrors: Array<OtpError>;
};

export type CustomerEmailUpdateOtpVerify = {
  __typename?: 'CustomerEmailUpdateOtpVerify';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  otp?: Maybe<OtpPrivate>;
  otpErrors: Array<OtpError>;
  user?: Maybe<User>;
};

export type CustomerEvent = Node & {
  __typename?: 'CustomerEvent';
  count?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Order>;
  orderLine?: Maybe<OrderLine>;
  type?: Maybe<CustomerEventsEnum>;
  user?: Maybe<User>;
};

export enum CustomerEventsEnum {
  AccountCreated = 'ACCOUNT_CREATED',
  CustomerDeleted = 'CUSTOMER_DELETED',
  DigitalLinkDownloaded = 'DIGITAL_LINK_DOWNLOADED',
  EmailAssigned = 'EMAIL_ASSIGNED',
  EmailChanged = 'EMAIL_CHANGED',
  EmailChangedRequest = 'EMAIL_CHANGED_REQUEST',
  MobileChanged = 'MOBILE_CHANGED',
  NameAssigned = 'NAME_ASSIGNED',
  NoteAdded = 'NOTE_ADDED',
  NoteAddedToOrder = 'NOTE_ADDED_TO_ORDER',
  PasswordChanged = 'PASSWORD_CHANGED',
  PasswordReset = 'PASSWORD_RESET',
  PasswordResetLinkSent = 'PASSWORD_RESET_LINK_SENT',
  PlacedOrder = 'PLACED_ORDER'
}

export type CustomerFilterInput = {
  dateJoined?: InputMaybe<DateRangeInput>;
  moneySpent?: InputMaybe<PriceRangeInput>;
  newCustomerStatus?: InputMaybe<Array<InputMaybe<CustomerStatus>>>;
  numberOfOrders?: InputMaybe<IntRangeInput>;
  placedOrders?: InputMaybe<DateRangeInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  smac?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<LockStatus>;
};

export type CustomerInput = {
  accessGroup?: InputMaybe<Scalars['ID']['input']>;
  customerSegment?: InputMaybe<CustomerSegment>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  defaultBillingAddress?: InputMaybe<AddressInput>;
  defaultShippingAddress?: InputMaybe<AddressInput>;
  distanceFromMall?: InputMaybe<Scalars['Decimal']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firebaseRegistrationId?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastOnlineDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastOrderDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastOrderStatus?: InputMaybe<OrderStatusFilter>;
  note?: InputMaybe<Scalars['String']['input']>;
  osUsed?: InputMaybe<Scalars['String']['input']>;
  riskCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<LockStatus>;
};

export type CustomerOtpGenerate = {
  __typename?: 'CustomerOTPGenerate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  oTP?: Maybe<OtpPrivate>;
  otp?: Maybe<OtpPrivate>;
  otpErrors: Array<OtpError>;
};

export type CustomerOtpGenerateInput = {
  email: Scalars['String']['input'];
};

export type CustomerOtpVerify = {
  __typename?: 'CustomerOTPVerify';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  otp?: Maybe<OtpPrivate>;
  otpErrors: Array<OtpError>;
  user?: Maybe<User>;
};

export type CustomerOtpVerifyInput = {
  email: Scalars['String']['input'];
  pin: Scalars['String']['input'];
};

export type CustomerReregister = {
  __typename?: 'CustomerReregister';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export enum CustomerSegment {
  Segment1 = 'SEGMENT1',
  Segment2 = 'SEGMENT2',
  Segment3 = 'SEGMENT3'
}

export type CustomerSoftDelete = {
  __typename?: 'CustomerSoftDelete';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export enum CustomerStatus {
  Act = 'ACT',
  New = 'NEW'
}

export type CustomerUpdate = {
  __typename?: 'CustomerUpdate';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type DateRangeInput = {
  gte?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeRangeInput = {
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeactivateAllUserTokens = {
  __typename?: 'DeactivateAllUserTokens';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type DeactivateUserToken = {
  __typename?: 'DeactivateUserToken';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type DeleteCreditCard = {
  __typename?: 'DeleteCreditCard';
  accountErrors: Array<AccountError>;
  creditCard?: Maybe<UserCreditCard>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type DeleteMetadata = {
  __typename?: 'DeleteMetadata';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  item?: Maybe<ObjectWithMetadata>;
  metadataErrors: Array<MetadataError>;
};

export type DeletePrivateMetadata = {
  __typename?: 'DeletePrivateMetadata';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  item?: Maybe<ObjectWithMetadata>;
  metadataErrors: Array<MetadataError>;
};

export enum DeliveriesStatus {
  GeneralAssigning = 'GENERAL_ASSIGNING',
  GeneralCancelled = 'GENERAL_CANCELLED',
  GeneralCompleted = 'GENERAL_COMPLETED',
  GeneralDelayed = 'GENERAL_DELAYED',
  GeneralFailed = 'GENERAL_FAILED',
  GeneralInDelivery = 'GENERAL_IN_DELIVERY',
  GeneralInReturn = 'GENERAL_IN_RETURN',
  GeneralPickingUp = 'GENERAL_PICKING_UP',
  GeneralReturned = 'GENERAL_RETURNED',
  GeneralUserCancelled = 'GENERAL_USER_CANCELLED',
  GrabAllocating = 'GRAB_ALLOCATING',
  GrabCanceled = 'GRAB_CANCELED',
  GrabCompleted = 'GRAB_COMPLETED',
  GrabFailed = 'GRAB_FAILED',
  GrabInDelivery = 'GRAB_IN_DELIVERY',
  GrabInReturn = 'GRAB_IN_RETURN',
  GrabPendingDropOff = 'GRAB_PENDING_DROP_OFF',
  GrabPendingPickup = 'GRAB_PENDING_PICKUP',
  GrabPickingUp = 'GRAB_PICKING_UP',
  GrabQueueing = 'GRAB_QUEUEING',
  GrabReturned = 'GRAB_RETURNED',
  GrabUserCanceled = 'GRAB_USER_CANCELED',
  PandagoAssignedToTransport = 'PANDAGO_ASSIGNED_TO_TRANSPORT',
  PandagoCancelled = 'PANDAGO_CANCELLED',
  PandagoCourierAcceptedDelivery = 'PANDAGO_COURIER_ACCEPTED_DELIVERY',
  PandagoCourierLeftVendor = 'PANDAGO_COURIER_LEFT_VENDOR',
  PandagoDelayed = 'PANDAGO_DELAYED',
  PandagoNearCustomer = 'PANDAGO_NEAR_CUSTOMER',
  PandagoNearVendor = 'PANDAGO_NEAR_VENDOR',
  PandagoNew = 'PANDAGO_NEW',
  PandagoPickedUp = 'PANDAGO_PICKED_UP',
  PandagoReceived = 'PANDAGO_RECEIVED',
  PandagoReturnedToVendor = 'PANDAGO_RETURNED_TO_VENDOR',
  PandagoUserCancelled = 'PANDAGO_USER_CANCELLED',
  PandagoWaitingForTransport = 'PANDAGO_WAITING_FOR_TRANSPORT',
  PandagoDelivered = 'PANDAGO__DELIVERED',
  Tp_2GoAcceptance = 'TP_2GO_ACCEPTANCE',
  Tp_2GoArrival = 'TP_2GO_ARRIVAL',
  Tp_2GoBadAddress = 'TP_2GO_BAD_ADDRESS',
  Tp_2GoBusinessClosed = 'TP_2GO_BUSINESS_CLOSED',
  Tp_2GoCancelled = 'TP_2GO_CANCELLED',
  Tp_2GoConsigneeNotAround = 'TP_2GO_CONSIGNEE_NOT_AROUND',
  Tp_2GoDelivered = 'TP_2GO_DELIVERED',
  Tp_2GoDeliveryCancelled = 'TP_2GO_DELIVERY_CANCELLED',
  Tp_2GoFailedBooking = 'TP_2GO_FAILED_BOOKING',
  Tp_2GoFloodedArea = 'TP_2GO_FLOODED_AREA',
  Tp_2GoHoldTransaction = 'TP_2GO_HOLD_TRANSACTION',
  Tp_2GoInvoiceForChecking = 'TP_2GO_INVOICE_FOR_CHECKING',
  Tp_2GoInTransit = 'TP_2GO_IN_TRANSIT',
  Tp_2GoLoaded = 'TP_2GO_LOADED',
  Tp_2GoLostCargo = 'TP_2GO_LOST_CARGO',
  Tp_2GoMisrouted = 'TP_2GO_MISROUTED',
  Tp_2GoNoShow = 'TP_2GO_NO_SHOW',
  Tp_2GoOfficeClosed = 'TP_2GO_OFFICE_CLOSED',
  Tp_2GoOffLoaded = 'TP_2GO_OFF_LOADED',
  Tp_2GoOnForwarded = 'TP_2GO_ON_FORWARDED',
  Tp_2GoOnHold = 'TP_2GO_ON_HOLD',
  Tp_2GoOutForDelivery = 'TP_2GO_OUT_FOR_DELIVERY',
  Tp_2GoPaymentNotReady = 'TP_2GO_PAYMENT_NOT_READY',
  Tp_2GoRefusedToAccept = 'TP_2GO_REFUSED_TO_ACCEPT',
  Tp_2GoRefusedToPay = 'TP_2GO_REFUSED_TO_PAY',
  Tp_2GoResidenceClosed = 'TP_2GO_RESIDENCE_CLOSED',
  Tp_2GoReturnedToCustomer = 'TP_2GO_RETURNED_TO_CUSTOMER',
  Tp_2GoReturnedToSender = 'TP_2GO_RETURNED_TO_SENDER',
  Tp_2GoRoadClosed = 'TP_2GO_ROAD_CLOSED',
  Tp_2GoSent = 'TP_2GO_SENT',
  Tp_2GoServed = 'TP_2GO_SERVED',
  Tp_2GoToSend = 'TP_2GO_TO_SEND',
  Tp_2GoTransferred = 'TP_2GO_TRANSFERRED',
  Tp_2GoUnknownConsignee = 'TP_2GO_UNKNOWN_CONSIGNEE',
  Tp_2GoUnserved = 'TP_2GO_UNSERVED',
  Tp_2GoWithFiledClaims = 'TP_2GO_WITH_FILED_CLAIMS'
}

export type DeliveryCourier = Node & {
  __typename?: 'DeliveryCourier';
  bookedAt?: Maybe<Scalars['DateTime']['output']>;
  bookedBy?: Maybe<User>;
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  deliveryCostAmount?: Maybe<Scalars['Float']['output']>;
  dropOffImageUrl?: Maybe<Image>;
  dropOffLocation?: Maybe<DropOffLocation>;
  failedReason?: Maybe<Scalars['String']['output']>;
  homeLocation?: Maybe<HomeLocation>;
  id: Scalars['ID']['output'];
  notes: Scalars['String']['output'];
  order?: Maybe<Order>;
  pickUpImageUrl?: Maybe<Image>;
  referenceNo?: Maybe<Scalars['String']['output']>;
  returnImageUrl?: Maybe<Image>;
  returnedAt?: Maybe<Scalars['DateTime']['output']>;
  riderPickUpLocation?: Maybe<RiderPickUpLocation>;
  senderContactNo?: Maybe<Scalars['String']['output']>;
  senderFirstName?: Maybe<Scalars['String']['output']>;
  senderLastName?: Maybe<Scalars['String']['output']>;
  shippedAt?: Maybe<Scalars['DateTime']['output']>;
  shippingCompany?: Maybe<Scalars['String']['output']>;
  status?: Maybe<DeliveriesStatus>;
  trackingUrl?: Maybe<Scalars['String']['output']>;
  tripDistance?: Maybe<Scalars['Int']['output']>;
};

export enum DeliveryTypeEnum {
  Express = 'EXPRESS',
  ExpressLongDistance = 'EXPRESS_LONG_DISTANCE',
  InStorePickup = 'IN_STORE_PICKUP',
  NationwideDelivery = 'NATIONWIDE_DELIVERY',
  NextDay = 'NEXT_DAY',
  SameDay = 'SAME_DAY'
}

export type DigitalContent = Node & ObjectWithMetadata & {
  __typename?: 'DigitalContent';
  automaticFulfillment: Scalars['Boolean']['output'];
  contentFile: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  maxDownloads?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  productVariant: ProductVariant;
  urlValidDays?: Maybe<Scalars['Int']['output']>;
  urls?: Maybe<Array<Maybe<DigitalContentUrl>>>;
  useDefaultSettings: Scalars['Boolean']['output'];
};

export type DigitalContentCountableConnection = {
  __typename?: 'DigitalContentCountableConnection';
  edges: Array<DigitalContentCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type DigitalContentCountableEdge = {
  __typename?: 'DigitalContentCountableEdge';
  cursor: Scalars['String']['output'];
  node: DigitalContent;
};

export type DigitalContentCreate = {
  __typename?: 'DigitalContentCreate';
  content?: Maybe<DigitalContent>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  variant?: Maybe<ProductVariant>;
};

export type DigitalContentDelete = {
  __typename?: 'DigitalContentDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  variant?: Maybe<ProductVariant>;
};

export type DigitalContentInput = {
  automaticFulfillment?: InputMaybe<Scalars['Boolean']['input']>;
  maxDownloads?: InputMaybe<Scalars['Int']['input']>;
  urlValidDays?: InputMaybe<Scalars['Int']['input']>;
  useDefaultSettings: Scalars['Boolean']['input'];
};

export type DigitalContentUpdate = {
  __typename?: 'DigitalContentUpdate';
  content?: Maybe<DigitalContent>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  variant?: Maybe<ProductVariant>;
};

export type DigitalContentUploadInput = {
  automaticFulfillment?: InputMaybe<Scalars['Boolean']['input']>;
  contentFile: Scalars['Upload']['input'];
  maxDownloads?: InputMaybe<Scalars['Int']['input']>;
  urlValidDays?: InputMaybe<Scalars['Int']['input']>;
  useDefaultSettings: Scalars['Boolean']['input'];
};

export type DigitalContentUrl = Node & {
  __typename?: 'DigitalContentUrl';
  content: DigitalContent;
  created: Scalars['DateTime']['output'];
  downloadNum: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['UUID']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type DigitalContentUrlCreate = {
  __typename?: 'DigitalContentUrlCreate';
  digitalContentUrl?: Maybe<DigitalContentUrl>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type DigitalContentUrlCreateInput = {
  content: Scalars['ID']['input'];
};

export type DiscountActivityLog = Node & {
  __typename?: 'DiscountActivityLog';
  action: DiscountActivityLogAction;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  field?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  modelName: Scalars['String']['output'];
  newValues?: Maybe<Scalars['JSONString']['output']>;
  subject?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export enum DiscountActivityLogAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export type DiscountActivityLogCountableConnection = {
  __typename?: 'DiscountActivityLogCountableConnection';
  edges: Array<DiscountActivityLogCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type DiscountActivityLogCountableEdge = {
  __typename?: 'DiscountActivityLogCountableEdge';
  cursor: Scalars['String']['output'];
  node: DiscountActivityLog;
};

export enum DiscountDeliveryTypeEnum {
  All = 'ALL',
  ExpressDelivery = 'EXPRESS_DELIVERY',
  ExpressLongDistanceDelivery = 'EXPRESS_LONG_DISTANCE_DELIVERY',
  InStore = 'IN_STORE',
  NationwideDelivery = 'NATIONWIDE_DELIVERY',
  NextDay = 'NEXT_DAY',
  SameDay = 'SAME_DAY'
}

export type DiscountError = {
  __typename?: 'DiscountError';
  code: DiscountErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum DiscountErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  Expired = 'EXPIRED',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  UnsupportedFileType = 'UNSUPPORTED_FILE_TYPE'
}

export enum DiscountPaymentMethodEnum {
  All = 'ALL',
  Card = 'CARD',
  Cash = 'CASH'
}

export enum DiscountStatusEnum {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Expired = 'EXPIRED',
  Inactive = 'INACTIVE',
  Scheduled = 'SCHEDULED'
}

export type DiscountUploadEvent = Node & {
  __typename?: 'DiscountUploadEvent';
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  job?: Maybe<DiscountUploadJob>;
  type: UploadEventsEnum;
};

export type DiscountUploadJob = Job & Node & {
  __typename?: 'DiscountUploadJob';
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  errorFileUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  status: JobStatusEnum;
  templateType?: Maybe<DiscountUploadTemplateTypeEnum>;
  updatedAt: Scalars['DateTime']['output'];
  uploadEvents?: Maybe<Array<DiscountUploadEvent>>;
  user?: Maybe<User>;
};

export type DiscountUploadTemplate = {
  __typename?: 'DiscountUploadTemplate';
  discountErrors: Array<DiscountError>;
  discountUpload?: Maybe<DiscountUploadJob>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type DiscountUploadTemplateInput = {
  brand?: InputMaybe<Scalars['ID']['input']>;
  file: Scalars['Upload']['input'];
  templateType: DiscountUploadTemplateTypeEnum;
  uploadAs?: InputMaybe<ProductUserViewEnum>;
};

export enum DiscountUploadTemplateTypeEnum {
  SaleMerchantAbsoluteValueProductFile = 'SALE_MERCHANT_ABSOLUTE_VALUE_PRODUCT_FILE',
  SaleMerchantPercentageProductFile = 'SALE_MERCHANT_PERCENTAGE_PRODUCT_FILE',
  SalePartnershipAbsoluteValueProductFile = 'SALE_PARTNERSHIP_ABSOLUTE_VALUE_PRODUCT_FILE',
  SalePartnershipPercentageProductFile = 'SALE_PARTNERSHIP_PERCENTAGE_PRODUCT_FILE'
}

export enum DiscountValueTypeEnum {
  AbsoluteValue = 'ABSOLUTE_VALUE',
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE'
}

export type Distance = {
  __typename?: 'Distance';
  unit: DistanceUnitsEnum;
  value: Scalars['Float']['output'];
};

export enum DistanceUnitsEnum {
  Cm = 'CM',
  Ft = 'FT',
  M = 'M',
  Mm = 'MM'
}

export type Domain = {
  __typename?: 'Domain';
  host: Scalars['String']['output'];
  sslEnabled: Scalars['Boolean']['output'];
  url: Scalars['String']['output'];
};

export type DraftCouponCreate = {
  __typename?: 'DraftCouponCreate';
  coupon?: Maybe<Coupon>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type DraftCouponCreateInput = {
  accessImage?: InputMaybe<Scalars['Upload']['input']>;
  accessImageAlt?: InputMaybe<Scalars['String']['input']>;
  accessPageDescription?: InputMaybe<Scalars['String']['input']>;
  accessPageSubtitle?: InputMaybe<Scalars['String']['input']>;
  accessPageTagline?: InputMaybe<Scalars['String']['input']>;
  assignee?: InputMaybe<CouponAssigneeEnum>;
  category?: InputMaybe<CouponCategoryEnum>;
  code?: InputMaybe<Scalars['String']['input']>;
  collection?: InputMaybe<Scalars['ID']['input']>;
  dealType?: InputMaybe<CouponDealTypeEnum>;
  discountValue?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventEndDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventLocation?: InputMaybe<Scalars['String']['input']>;
  eventStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  hasMalls?: InputMaybe<Scalars['Boolean']['input']>;
  isDuplicate?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  isNationwide?: InputMaybe<Scalars['Boolean']['input']>;
  isUsageTimerApplied: Scalars['Boolean']['input'];
  mainPromoDescription?: InputMaybe<Scalars['String']['input']>;
  mainPromoTitle: Scalars['String']['input'];
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mechanics?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  occurence?: InputMaybe<CouponOccurenceEnum>;
  occurenceExclude?: InputMaybe<Array<InputMaybe<CouponOccurenceExcludeEnum>>>;
  promoImage?: InputMaybe<Scalars['Upload']['input']>;
  promoImageAlt?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  redeemEndDate?: InputMaybe<Scalars['DateTime']['input']>;
  redeemStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  redeemType?: InputMaybe<CouponRedeemTypeEnum>;
  redemptionExclude?: InputMaybe<Array<InputMaybe<CouponOccurenceExcludeEnum>>>;
  redemptionFrequency?: InputMaybe<CouponOccurenceEnum>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  usageLimit?: InputMaybe<Scalars['Int']['input']>;
  usageTimerHour?: InputMaybe<Scalars['Int']['input']>;
  usageTimerMinute?: InputMaybe<Scalars['Int']['input']>;
  usageTimerSecond?: InputMaybe<Scalars['Int']['input']>;
  userType?: InputMaybe<CouponUserTypeEnum>;
};

export type DraftCouponUpdate = {
  __typename?: 'DraftCouponUpdate';
  coupon?: Maybe<Coupon>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type DraftCouponUpdateInput = {
  accessImage?: InputMaybe<Scalars['Upload']['input']>;
  accessImageAlt?: InputMaybe<Scalars['String']['input']>;
  accessPageDescription?: InputMaybe<Scalars['String']['input']>;
  accessPageSubtitle?: InputMaybe<Scalars['String']['input']>;
  accessPageTagline?: InputMaybe<Scalars['String']['input']>;
  assignee?: InputMaybe<CouponAssigneeEnum>;
  category?: InputMaybe<CouponCategoryEnum>;
  code?: InputMaybe<Scalars['String']['input']>;
  collection?: InputMaybe<Scalars['ID']['input']>;
  dealType?: InputMaybe<CouponDealTypeEnum>;
  discountValue?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventEndDate?: InputMaybe<Scalars['DateTime']['input']>;
  eventLocation?: InputMaybe<Scalars['String']['input']>;
  eventStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  hasMalls?: InputMaybe<Scalars['Boolean']['input']>;
  isDuplicate?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  isNationwide?: InputMaybe<Scalars['Boolean']['input']>;
  isUsageTimerApplied: Scalars['Boolean']['input'];
  mainPromoDescription?: InputMaybe<Scalars['String']['input']>;
  mainPromoTitle: Scalars['String']['input'];
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mechanics?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  occurence?: InputMaybe<CouponOccurenceEnum>;
  occurenceExclude?: InputMaybe<Array<InputMaybe<CouponOccurenceExcludeEnum>>>;
  promoImage?: InputMaybe<Scalars['Upload']['input']>;
  promoImageAlt?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  redeemEndDate?: InputMaybe<Scalars['DateTime']['input']>;
  redeemStartDate?: InputMaybe<Scalars['DateTime']['input']>;
  redeemType?: InputMaybe<CouponRedeemTypeEnum>;
  redemptionExclude?: InputMaybe<Array<InputMaybe<CouponOccurenceExcludeEnum>>>;
  redemptionFrequency?: InputMaybe<CouponOccurenceEnum>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  usageLimit?: InputMaybe<Scalars['Int']['input']>;
  usageTimerHour?: InputMaybe<Scalars['Int']['input']>;
  usageTimerMinute?: InputMaybe<Scalars['Int']['input']>;
  usageTimerSecond?: InputMaybe<Scalars['Int']['input']>;
  userType?: InputMaybe<CouponUserTypeEnum>;
};

export type DraftOrderBulkDelete = {
  __typename?: 'DraftOrderBulkDelete';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
};

export type DraftOrderComplete = {
  __typename?: 'DraftOrderComplete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type DraftOrderCreate = {
  __typename?: 'DraftOrderCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type DraftOrderCreateInput = {
  billingAddress?: InputMaybe<AddressInput>;
  customerNote?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  lines?: InputMaybe<Array<InputMaybe<OrderLineCreateInput>>>;
  mall?: InputMaybe<Scalars['ID']['input']>;
  shippingAddress?: InputMaybe<AddressInput>;
  shippingMethod?: InputMaybe<Scalars['ID']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
  voucher?: InputMaybe<Scalars['ID']['input']>;
};

export type DraftOrderDelete = {
  __typename?: 'DraftOrderDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type DraftOrderInput = {
  billingAddress?: InputMaybe<AddressInput>;
  customerNote?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  mall?: InputMaybe<Scalars['ID']['input']>;
  shippingAddress?: InputMaybe<AddressInput>;
  shippingMethod?: InputMaybe<Scalars['ID']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
  voucher?: InputMaybe<Scalars['ID']['input']>;
};

export type DraftOrderLineDelete = {
  __typename?: 'DraftOrderLineDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
  orderLine?: Maybe<OrderLine>;
};

export type DraftOrderLineUpdate = {
  __typename?: 'DraftOrderLineUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
  orderLine?: Maybe<OrderLine>;
};

export type DraftOrderLinesBulkDelete = {
  __typename?: 'DraftOrderLinesBulkDelete';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
};

export type DraftOrderLinesCreate = {
  __typename?: 'DraftOrderLinesCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
  orderLines?: Maybe<Array<OrderLine>>;
};

export type DraftOrderUpdate = {
  __typename?: 'DraftOrderUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type DropOffLocation = Node & ObjectWithMetadata & {
  __typename?: 'DropOffLocation';
  code?: Maybe<Scalars['String']['output']>;
  contactNo?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  defaultDropOffLocation?: Maybe<Scalars['Boolean']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dropOffAddress?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  mall?: Maybe<Mall>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  racks?: Maybe<RackCountableConnection>;
  remarks?: Maybe<Scalars['String']['output']>;
  status?: Maybe<LogisticsStatusEnum>;
  taskAreas?: Maybe<Array<Maybe<TaskArea>>>;
  template?: Maybe<Template>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type DropOffLocationRacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DropOffLocationCountableConnection = {
  __typename?: 'DropOffLocationCountableConnection';
  edges: Array<DropOffLocationCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type DropOffLocationCountableEdge = {
  __typename?: 'DropOffLocationCountableEdge';
  cursor: Scalars['String']['output'];
  node: DropOffLocation;
};

export type DropOffLocationCreate = {
  __typename?: 'DropOffLocationCreate';
  dropOffLocation?: Maybe<DropOffLocation>;
  dropOffLocationError: Array<DropOffLocationError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type DropOffLocationCreateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  contactNo?: InputMaybe<Scalars['String']['input']>;
  defaultDropOffLocation?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dropOffAddress?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Decimal']['input']>;
  longitude?: InputMaybe<Scalars['Decimal']['input']>;
  mall: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  remarks?: InputMaybe<Scalars['String']['input']>;
  status: LogisticsStatusEnum;
  templateId?: InputMaybe<Scalars['ID']['input']>;
};

export type DropOffLocationError = {
  __typename?: 'DropOffLocationError';
  code: DropOffLocationErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum DropOffLocationErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type DropOffLocationInput = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mall?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<LogisticsStatusEnum>;
  templateStatus?: InputMaybe<TemplateStatusEnum>;
};

export type DropOffLocationUpdate = {
  __typename?: 'DropOffLocationUpdate';
  dropOffLocation?: Maybe<DropOffLocation>;
  dropOffLocationError: Array<DropOffLocationError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type DropOffLocationUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  contactNo?: InputMaybe<Scalars['String']['input']>;
  defaultDropOffLocation?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dropOffAddress?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Decimal']['input']>;
  longitude?: InputMaybe<Scalars['Decimal']['input']>;
  mall?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  remarks?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<LogisticsStatusEnum>;
};

export type DynamicLink = Node & {
  __typename?: 'DynamicLink';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deeplinkUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  longDynamicLink?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  shortDynamicLink?: Maybe<Scalars['String']['output']>;
  type?: Maybe<PageTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DynamicLinkCountableConnection = {
  __typename?: 'DynamicLinkCountableConnection';
  edges: Array<DynamicLinkCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type DynamicLinkCountableEdge = {
  __typename?: 'DynamicLinkCountableEdge';
  cursor: Scalars['String']['output'];
  node: DynamicLink;
};

export type EnableAllMallRemittance = {
  __typename?: 'EnableAllMallRemittance';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  malls?: Maybe<Array<Maybe<Mall>>>;
  remittanceErrors: Array<RemittanceError>;
};

export type EnableMallRemittance = {
  __typename?: 'EnableMallRemittance';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  mall?: Maybe<Mall>;
  remittanceErrors: Array<RemittanceError>;
};

export type EndServicePause = {
  __typename?: 'EndServicePause';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  servicePause?: Maybe<ServicePause>;
  servicePauseError: Array<ServicePauseError>;
};

export type EndServicePauseInput = {
  mallId?: InputMaybe<Scalars['ID']['input']>;
  tenantId?: InputMaybe<Scalars['ID']['input']>;
};

export type Error = {
  __typename?: 'Error';
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type ExportCouponRedemptions = {
  __typename?: 'ExportCouponRedemptions';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  exportErrors: Array<ExportError>;
  exportFile?: Maybe<ExportFile>;
};

export type ExportCouponRedemptionsInput = {
  couponId: Scalars['ID']['input'];
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileType: FileTypesEnum;
  filter?: InputMaybe<CouponRedemptionFilterInput>;
};

export type ExportError = {
  __typename?: 'ExportError';
  code: ExportErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum ExportErrorCode {
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export type ExportEvent = Node & {
  __typename?: 'ExportEvent';
  app?: Maybe<App>;
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  type: ExportEventsEnum;
  user?: Maybe<User>;
};

export enum ExportEventsEnum {
  ExportedFileSent = 'EXPORTED_FILE_SENT',
  ExportDeleted = 'EXPORT_DELETED',
  ExportFailed = 'EXPORT_FAILED',
  ExportFailedInfoSent = 'EXPORT_FAILED_INFO_SENT',
  ExportPending = 'EXPORT_PENDING',
  ExportSuccess = 'EXPORT_SUCCESS'
}

export type ExportFile = Job & Node & {
  __typename?: 'ExportFile';
  app?: Maybe<App>;
  createdAt: Scalars['DateTime']['output'];
  events?: Maybe<Array<ExportEvent>>;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  status: JobStatusEnum;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type ExportFileCountableConnection = {
  __typename?: 'ExportFileCountableConnection';
  edges: Array<ExportFileCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ExportFileCountableEdge = {
  __typename?: 'ExportFileCountableEdge';
  cursor: Scalars['String']['output'];
  node: ExportFile;
};

export type ExportFileFilterInput = {
  app?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<JobStatusEnum>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export enum ExportFileSortField {
  CreatedAt = 'CREATED_AT',
  Status = 'STATUS',
  UpdatedAt = 'UPDATED_AT'
}

export type ExportFileSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: ExportFileSortField;
};

export type ExportInfoInput = {
  attributes?: InputMaybe<Array<Scalars['ID']['input']>>;
  fields?: InputMaybe<Array<ProductFieldEnum>>;
  template?: InputMaybe<ProductTemplateEnum>;
  warehouses?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ExportOrders = {
  __typename?: 'ExportOrders';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  exportErrors: Array<ExportError>;
  exportFile?: Maybe<ExportFile>;
};

export type ExportOrdersInput = {
  fileName: Scalars['String']['input'];
  fileType: FileTypesEnum;
  filter?: InputMaybe<OrderFilterInput>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  scope: ExportScope;
};

export type ExportProducts = {
  __typename?: 'ExportProducts';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  exportErrors: Array<ExportError>;
  exportFile?: Maybe<ExportFile>;
};

export type ExportProductsInput = {
  exportInfo?: InputMaybe<ExportInfoInput>;
  fileType: FileTypesEnum;
  filter?: InputMaybe<ProductFilterInput>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  scope: ExportScope;
  viewAs?: InputMaybe<ProductUserViewEnum>;
};

export type ExportRemittanceOrders = {
  __typename?: 'ExportRemittanceOrders';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  exportErrors: Array<ExportError>;
  exportFile?: Maybe<ExportFile>;
};

export type ExportRemittanceOrdersInput = {
  fileName: Scalars['String']['input'];
  fileType: FileTypesEnum;
  filter?: InputMaybe<RemittanceOrderFilterInput>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  scope: ExportScope;
};

export type ExportSaleErrorVariants = {
  __typename?: 'ExportSaleErrorVariants';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  exportErrors: Array<ExportError>;
  exportFile?: Maybe<ExportFile>;
};

export type ExportSaleErrorVariantsInput = {
  fileName: Scalars['String']['input'];
  fileNameTimestamp?: InputMaybe<Scalars['String']['input']>;
  fileType: FileTypesEnum;
  saleId: Scalars['ID']['input'];
};

export enum ExportScope {
  All = 'ALL',
  Filter = 'FILTER',
  Ids = 'IDS',
  IdsAndFilter = 'IDS_AND_FILTER'
}

export type ExportStoreOrders = {
  __typename?: 'ExportStoreOrders';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  exportErrors: Array<ExportError>;
  exportFile?: Maybe<ExportFile>;
};

export type ExportStoreOrdersInput = {
  fileName: Scalars['String']['input'];
  fileType: FileTypesEnum;
  filter?: InputMaybe<StoreOrderFilterInput>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  scope: ExportScope;
};

export enum FileTypesEnum {
  Csv = 'CSV',
  Xlsx = 'XLSX'
}

export type FirebaseDetailsInput = {
  firebaseRegistrationId: Scalars['String']['input'];
};

export type FirebaseDetailsUpdate = {
  __typename?: 'FirebaseDetailsUpdate';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type FollowBrand = {
  __typename?: 'FollowBrand';
  brand?: Maybe<Brand>;
  brandErrors: Array<BrandError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type FreshdeskDetailsInput = {
  freshdeskRestoreId: Scalars['String']['input'];
};

export type FreshdeskDetailsUpdate = {
  __typename?: 'FreshdeskDetailsUpdate';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type Fulfillment = Node & ObjectWithMetadata & {
  __typename?: 'Fulfillment';
  created: Scalars['DateTime']['output'];
  fulfillmentOrder: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  lines?: Maybe<Array<Maybe<FulfillmentLine>>>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  status: FulfillmentStatus;
  statusDisplay?: Maybe<Scalars['String']['output']>;
  trackingNumber: Scalars['String']['output'];
  warehouse?: Maybe<Warehouse>;
};

export type FulfillmentCancel = {
  __typename?: 'FulfillmentCancel';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  fulfillment?: Maybe<Fulfillment>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type FulfillmentCancelInput = {
  warehouseId: Scalars['ID']['input'];
};

export type FulfillmentClearMeta = {
  __typename?: 'FulfillmentClearMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  fulfillment?: Maybe<Fulfillment>;
};

export type FulfillmentClearPrivateMeta = {
  __typename?: 'FulfillmentClearPrivateMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  fulfillment?: Maybe<Fulfillment>;
};

export type FulfillmentLine = Node & {
  __typename?: 'FulfillmentLine';
  id: Scalars['ID']['output'];
  orderLine?: Maybe<OrderLine>;
  quantity: Scalars['Int']['output'];
};

export enum FulfillmentStatus {
  Canceled = 'CANCELED',
  Fulfilled = 'FULFILLED'
}

export type FulfillmentUpdateMeta = {
  __typename?: 'FulfillmentUpdateMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  fulfillment?: Maybe<Fulfillment>;
};

export type FulfillmentUpdatePrivateMeta = {
  __typename?: 'FulfillmentUpdatePrivateMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  fulfillment?: Maybe<Fulfillment>;
};

export type FulfillmentUpdateTracking = {
  __typename?: 'FulfillmentUpdateTracking';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  fulfillment?: Maybe<Fulfillment>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type FulfillmentUpdateTrackingInput = {
  notifyCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  trackingNumber?: InputMaybe<Scalars['String']['input']>;
};

export type GatewayConfigLine = {
  __typename?: 'GatewayConfigLine';
  field: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  NonBinary = 'NON_BINARY',
  PreferNotToSay = 'PREFER_NOT_TO_SAY'
}

export type GenerateRemittanceId = {
  __typename?: 'GenerateRemittanceId';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  remittance?: Maybe<Remittance>;
  remittanceErrors: Array<RemittanceError>;
};

export type Geolocalization = {
  __typename?: 'Geolocalization';
  country?: Maybe<CountryDisplay>;
};

export type GiftCard = Node & {
  __typename?: 'GiftCard';
  brand?: Maybe<Brand>;
  code?: Maybe<Scalars['String']['output']>;
  created: Scalars['DateTime']['output'];
  currentBalance?: Maybe<Money>;
  displayCode?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  initialBalance?: Maybe<Money>;
  isActive: Scalars['Boolean']['output'];
  lastUsedOn?: Maybe<Scalars['DateTime']['output']>;
  startDate: Scalars['Date']['output'];
  tenant?: Maybe<Tenant>;
  user?: Maybe<User>;
};

export type GiftCardActivate = {
  __typename?: 'GiftCardActivate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  giftCard?: Maybe<GiftCard>;
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardCountableConnection = {
  __typename?: 'GiftCardCountableConnection';
  edges: Array<GiftCardCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type GiftCardCountableEdge = {
  __typename?: 'GiftCardCountableEdge';
  cursor: Scalars['String']['output'];
  node: GiftCard;
};

export type GiftCardCreate = {
  __typename?: 'GiftCardCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  giftCard?: Maybe<GiftCard>;
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardCreateInput = {
  balance?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  brand?: InputMaybe<Scalars['ID']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  tenant?: InputMaybe<Scalars['ID']['input']>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
};

export type GiftCardDeactivate = {
  __typename?: 'GiftCardDeactivate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  giftCard?: Maybe<GiftCard>;
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardError = {
  __typename?: 'GiftCardError';
  code: GiftCardErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum GiftCardErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type GiftCardUpdate = {
  __typename?: 'GiftCardUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  giftCard?: Maybe<GiftCard>;
  giftCardErrors: Array<GiftCardError>;
};

export type GiftCardUpdateInput = {
  balance?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  brand?: InputMaybe<Scalars['ID']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  tenant?: InputMaybe<Scalars['ID']['input']>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
};

export type Group = Node & {
  __typename?: 'Group';
  id: Scalars['ID']['output'];
  isLocked?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Maybe<Permission>>>;
  smopUsertypeCode?: Maybe<SmopUserTypeCode>;
  userCanManage: Scalars['Boolean']['output'];
  users?: Maybe<Array<Maybe<User>>>;
};

export type GroupCountableConnection = {
  __typename?: 'GroupCountableConnection';
  edges: Array<GroupCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type GroupCountableEdge = {
  __typename?: 'GroupCountableEdge';
  cursor: Scalars['String']['output'];
  node: Group;
};

export type HasCouponInput = {
  category?: InputMaybe<Array<InputMaybe<CouponCategoryEnum>>>;
  dealType?: InputMaybe<Array<InputMaybe<CouponDealTypeEnum>>>;
  status?: InputMaybe<Array<InputMaybe<CouponStatusEnum>>>;
  value?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HidePauseReason = {
  __typename?: 'HidePauseReason';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  pauseReason?: Maybe<ServicePauseReason>;
  servicePauseError: Array<ServicePauseError>;
};

export type HidePauseReasonInput = {
  isHidden: Scalars['Boolean']['input'];
  reasonId?: InputMaybe<Scalars['ID']['input']>;
};

export type HomeLocation = Node & {
  __typename?: 'HomeLocation';
  id: Scalars['ID']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  remarks?: Maybe<Scalars['String']['output']>;
  warehouse?: Maybe<Warehouse>;
};

export type HomeLocationCountableConnection = {
  __typename?: 'HomeLocationCountableConnection';
  edges: Array<HomeLocationCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type HomeLocationCountableEdge = {
  __typename?: 'HomeLocationCountableEdge';
  cursor: Scalars['String']['output'];
  node: HomeLocation;
};

export type HomeLocationCreate = {
  __typename?: 'HomeLocationCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  homeLocation?: Maybe<HomeLocation>;
  homeLocationErrors: Array<HomeLocationError>;
};

export type HomeLocationDelete = {
  __typename?: 'HomeLocationDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  homeLocation?: Maybe<HomeLocation>;
  homeLocationErrors: Array<HomeLocationError>;
};

export type HomeLocationError = {
  __typename?: 'HomeLocationError';
  code: HomeLocationErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum HomeLocationErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type HomeLocationUpdate = {
  __typename?: 'HomeLocationUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  homeLocation?: Maybe<HomeLocation>;
  homeLocationErrors: Array<HomeLocationError>;
};

export type HomepageCollectionUpdate = {
  __typename?: 'HomepageCollectionUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shop?: Maybe<Shop>;
  shopErrors: Array<ShopError>;
};

export type Image = {
  __typename?: 'Image';
  alt?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type InStorePickupLocation = Node & {
  __typename?: 'InStorePickupLocation';
  addressLine1: Scalars['String']['output'];
  addressLine2: Scalars['String']['output'];
  brand: BrandPrivateCountableConnection;
  city: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  mall: MallCountableConnection;
  pickuplocationservicetimeSet: ServiceHoursCountableConnection;
  postalCode: Scalars['String']['output'];
  region: Scalars['String']['output'];
  serviceHours?: Maybe<Array<Maybe<ServiceHours>>>;
  timezone: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type InStorePickupLocationBrandArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type InStorePickupLocationMallArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type InStorePickupLocationPickuplocationservicetimeSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type InStorePickupLocationCountableConnection = {
  __typename?: 'InStorePickupLocationCountableConnection';
  edges: Array<InStorePickupLocationCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type InStorePickupLocationCountableEdge = {
  __typename?: 'InStorePickupLocationCountableEdge';
  cursor: Scalars['String']['output'];
  node: InStorePickupLocation;
};

export type IntRangeInput = {
  gte?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
};

export type Invoice = Job & Node & ObjectWithMetadata & {
  __typename?: 'Invoice';
  createdAt: Scalars['DateTime']['output'];
  externalUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  number?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  status: JobStatusEnum;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type InvoiceCreate = {
  __typename?: 'InvoiceCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  invoice?: Maybe<Invoice>;
  invoiceErrors: Array<InvoiceError>;
};

export type InvoiceCreateInput = {
  number: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type InvoiceDelete = {
  __typename?: 'InvoiceDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  invoice?: Maybe<Invoice>;
  invoiceErrors: Array<InvoiceError>;
};

export type InvoiceError = {
  __typename?: 'InvoiceError';
  code: InvoiceErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum InvoiceErrorCode {
  EmailNotSet = 'EMAIL_NOT_SET',
  InvalidStatus = 'INVALID_STATUS',
  NotFound = 'NOT_FOUND',
  NotReady = 'NOT_READY',
  NumberNotSet = 'NUMBER_NOT_SET',
  Required = 'REQUIRED',
  UrlNotSet = 'URL_NOT_SET'
}

export type InvoiceRequest = {
  __typename?: 'InvoiceRequest';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  invoice?: Maybe<Invoice>;
  invoiceErrors: Array<InvoiceError>;
  order?: Maybe<Order>;
};

export type InvoiceRequestDelete = {
  __typename?: 'InvoiceRequestDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  invoice?: Maybe<Invoice>;
  invoiceErrors: Array<InvoiceError>;
};

export type InvoiceSendEmail = {
  __typename?: 'InvoiceSendEmail';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  invoice?: Maybe<Invoice>;
  invoiceErrors: Array<InvoiceError>;
};

export type InvoiceUpdate = {
  __typename?: 'InvoiceUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  invoice?: Maybe<Invoice>;
  invoiceErrors: Array<InvoiceError>;
};

export type Job = {
  createdAt: Scalars['DateTime']['output'];
  message?: Maybe<Scalars['String']['output']>;
  status: JobStatusEnum;
  updatedAt: Scalars['DateTime']['output'];
};

export enum JobStatusEnum {
  Deleted = 'DELETED',
  EmptyFile = 'EMPTY_FILE',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS',
  WithErrorFile = 'WITH_ERROR_FILE'
}

export enum LanguageCodeEnum {
  Ar = 'AR',
  Az = 'AZ',
  Bg = 'BG',
  Bn = 'BN',
  Ca = 'CA',
  Cs = 'CS',
  Da = 'DA',
  De = 'DE',
  El = 'EL',
  En = 'EN',
  Es = 'ES',
  EsCo = 'ES_CO',
  Et = 'ET',
  Fa = 'FA',
  Fi = 'FI',
  Fr = 'FR',
  Hi = 'HI',
  Hu = 'HU',
  Hy = 'HY',
  Id = 'ID',
  Is = 'IS',
  It = 'IT',
  Ja = 'JA',
  Ka = 'KA',
  Km = 'KM',
  Ko = 'KO',
  Lt = 'LT',
  Mn = 'MN',
  My = 'MY',
  Nb = 'NB',
  Nl = 'NL',
  Pl = 'PL',
  Pt = 'PT',
  PtBr = 'PT_BR',
  Ro = 'RO',
  Ru = 'RU',
  Sk = 'SK',
  Sl = 'SL',
  Sq = 'SQ',
  Sr = 'SR',
  Sv = 'SV',
  Sw = 'SW',
  Ta = 'TA',
  Th = 'TH',
  Tr = 'TR',
  Uk = 'UK',
  Vi = 'VI',
  ZhHans = 'ZH_HANS',
  ZhHant = 'ZH_HANT'
}

export type LanguageDisplay = {
  __typename?: 'LanguageDisplay';
  code: LanguageCodeEnum;
  language: Scalars['String']['output'];
};

export enum LockStatus {
  Active = 'ACTIVE',
  Blocked = 'BLOCKED',
  Deleted = 'DELETED',
  Inactive = 'INACTIVE',
  Unverified = 'UNVERIFIED'
}

export enum LogisticsStatusEnum {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Draft = 'DRAFT',
  Inactive = 'INACTIVE'
}

export type Mall = Node & ObjectWithMetadata & {
  __typename?: 'Mall';
  address?: Maybe<Address>;
  autoBookingConfig?: Maybe<Array<Maybe<AutoBookingConfig>>>;
  city?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  contactPerson?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dropOffLocations?: Maybe<DropOffLocationCountableConnection>;
  email?: Maybe<Scalars['String']['output']>;
  expressDeliveryAvailable?: Maybe<Scalars['Boolean']['output']>;
  expressLongDistanceAvailable?: Maybe<Scalars['Boolean']['output']>;
  fbAutoBookingConfig?: Maybe<AutoBookingConfig>;
  firstLevelCategories?: Maybe<Array<Maybe<Category>>>;
  firstShippingZone?: Maybe<ShippingZone>;
  foodAndBevCutoffTime?: Maybe<Scalars['Time']['output']>;
  genMerchCutoffTime?: Maybe<Scalars['Time']['output']>;
  gmAutoBookingConfig?: Maybe<AutoBookingConfig>;
  groceryCutoffTime?: Maybe<Scalars['Time']['output']>;
  hasActiveCoupons?: Maybe<Scalars['Boolean']['output']>;
  hasCoupons?: Maybe<Scalars['Boolean']['output']>;
  hasEnabledAutoBooking?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isInMallPickup?: Maybe<Scalars['Boolean']['output']>;
  isNationwideDelivery?: Maybe<Scalars['Boolean']['output']>;
  isServiceable?: Maybe<Scalars['Boolean']['output']>;
  latitude?: Maybe<Scalars['Decimal']['output']>;
  longitude?: Maybe<Scalars['Decimal']['output']>;
  mallAdmin?: Maybe<User>;
  mallClosing?: Maybe<Scalars['Time']['output']>;
  mallOpening?: Maybe<Scalars['Time']['output']>;
  mallShippingMethod?: Maybe<Array<Maybe<MallShippingMethod>>>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  mobileNo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nextDayAvailable?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  provinceCode?: Maybe<Scalars['String']['output']>;
  provinceName?: Maybe<Scalars['String']['output']>;
  remittanceConfig?: Maybe<RemittanceConfig>;
  sameDayAvailable?: Maybe<Scalars['Boolean']['output']>;
  sameDayGmCutoffTime?: Maybe<Scalars['Time']['output']>;
  secondLevelCategories?: Maybe<Array<Maybe<Category>>>;
  serviceArea?: Maybe<Scalars['String']['output']>;
  smMarketExternalCode?: Maybe<Scalars['String']['output']>;
  smMarketExternalId?: Maybe<Scalars['Int']['output']>;
  smMarketExternalName?: Maybe<Scalars['String']['output']>;
  status?: Maybe<SmopStatusEnum>;
  telephoneNo?: Maybe<Scalars['String']['output']>;
  templates?: Maybe<TemplateCountableConnection>;
  tenants?: Maybe<Array<Maybe<Tenant>>>;
  totalLandArea?: Maybe<Scalars['Decimal']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  warehouses?: Maybe<WarehouseCountableConnection>;
};


export type MallDropOffLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type MallHasCouponsArgs = {
  categories?: InputMaybe<Array<InputMaybe<CouponCategoryEnum>>>;
  dealTypes?: InputMaybe<Array<InputMaybe<CouponDealTypeEnum>>>;
  status?: InputMaybe<Array<InputMaybe<CouponStatusEnum>>>;
};


export type MallSecondLevelCategoriesArgs = {
  parent?: InputMaybe<Scalars['ID']['input']>;
};


export type MallTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type MallTenantsArgs = {
  status?: InputMaybe<SmopStatusEnum>;
};


export type MallWarehousesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type MallActivityLogInput = {
  action?: InputMaybe<ActivityLogActionsEnum>;
  created?: InputMaybe<DateRangeInput>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  updatedBy?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type MallCountableConnection = {
  __typename?: 'MallCountableConnection';
  edges: Array<MallCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type MallCountableEdge = {
  __typename?: 'MallCountableEdge';
  cursor: Scalars['String']['output'];
  node: Mall;
};

export type MallCreate = {
  __typename?: 'MallCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  mall?: Maybe<Mall>;
  mallErrors: Array<MallError>;
};

export type MallCreateInput = {
  address?: InputMaybe<Scalars['ID']['input']>;
  city: Scalars['String']['input'];
  code: Scalars['String']['input'];
  contactPerson: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  expressDeliveryAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  expressLongDistanceAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  foodAndBevCutoffTime?: InputMaybe<Scalars['Time']['input']>;
  genMerchCutoffTime?: InputMaybe<Scalars['Time']['input']>;
  groceryCutoffTime?: InputMaybe<Scalars['Time']['input']>;
  isInMallPickup?: InputMaybe<Scalars['Boolean']['input']>;
  isNationwideDelivery?: InputMaybe<Scalars['Boolean']['input']>;
  isServiceable?: InputMaybe<Scalars['Boolean']['input']>;
  latitude: Scalars['Decimal']['input'];
  longitude: Scalars['Decimal']['input'];
  mallAdmin?: InputMaybe<Scalars['ID']['input']>;
  mallClosing?: InputMaybe<Scalars['Time']['input']>;
  mallOpening?: InputMaybe<Scalars['Time']['input']>;
  mobileNo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  nextDayAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  provinceCode: Scalars['String']['input'];
  provinceName: Scalars['String']['input'];
  sameDayAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  sameDayGmCutoffTime?: InputMaybe<Scalars['Time']['input']>;
  serviceArea?: InputMaybe<Scalars['Decimal']['input']>;
  smMarketExternalCode?: InputMaybe<Scalars['String']['input']>;
  smMarketExternalId?: InputMaybe<Scalars['Int']['input']>;
  smMarketExternalName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SmopStatusEnum>;
  telephoneNo: Scalars['String']['input'];
  totalLandArea?: InputMaybe<Scalars['Decimal']['input']>;
};

export type MallDistanceInput = {
  distance?: InputMaybe<Scalars['Decimal']['input']>;
  mallId?: InputMaybe<Scalars['ID']['input']>;
};

export type MallError = {
  __typename?: 'MallError';
  code: MallErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum MallErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  HasTenant = 'HAS_TENANT',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type MallInput = {
  brand?: InputMaybe<Scalars['ID']['input']>;
  hasActiveCoupons?: InputMaybe<Scalars['Boolean']['input']>;
  hasCoupons?: InputMaybe<Scalars['Boolean']['input']>;
  hasCouponsFiltered?: InputMaybe<HasCouponInput>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isServiceable?: InputMaybe<Scalars['Boolean']['input']>;
  isSystemMaintained?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  statuses?: InputMaybe<Array<InputMaybe<SmopStatusEnum>>>;
  userMalls?: InputMaybe<Scalars['Boolean']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type MallShippingMethod = Node & ObjectWithMetadata & {
  __typename?: 'MallShippingMethod';
  createdAt?: Maybe<Scalars['Time']['output']>;
  createdBy?: Maybe<User>;
  endTime?: Maybe<Scalars['Time']['output']>;
  id: Scalars['ID']['output'];
  mall?: Maybe<Mall>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  shippingMethod?: Maybe<ShippingMethod>;
  startTime?: Maybe<Scalars['Time']['output']>;
  updatedAt?: Maybe<Scalars['Time']['output']>;
  updatedBy?: Maybe<User>;
};

export type MallShippingMethodActivityLog = Node & {
  __typename?: 'MallShippingMethodActivityLog';
  action: MallShippingMethodActivityLogAction;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  doer?: Maybe<User>;
  field?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  modelName: Scalars['String']['output'];
  newValues?: Maybe<Scalars['JSONString']['output']>;
  subject?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export enum MallShippingMethodActivityLogAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export type MallShippingMethodActivityLogCountableConnection = {
  __typename?: 'MallShippingMethodActivityLogCountableConnection';
  edges: Array<MallShippingMethodActivityLogCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type MallShippingMethodActivityLogCountableEdge = {
  __typename?: 'MallShippingMethodActivityLogCountableEdge';
  cursor: Scalars['String']['output'];
  node: MallShippingMethodActivityLog;
};

export enum MallSortField {
  Code = 'CODE',
  CreationDate = 'CREATION_DATE',
  MallName = 'MALL_NAME',
  Name = 'NAME',
  NameAndStatus = 'NAME_AND_STATUS',
  Number = 'NUMBER',
  Status = 'STATUS'
}

export type MallSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: MallSortField;
};

export type MallUpdate = {
  __typename?: 'MallUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  mall?: Maybe<Mall>;
  mallErrors: Array<MallError>;
};

export type MallUpdateInput = {
  address?: InputMaybe<Scalars['ID']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  contactPerson?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expressDeliveryAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  expressLongDistanceAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  foodAndBevCutoffTime?: InputMaybe<Scalars['Time']['input']>;
  genMerchCutoffTime?: InputMaybe<Scalars['Time']['input']>;
  groceryCutoffTime?: InputMaybe<Scalars['Time']['input']>;
  isInMallPickup?: InputMaybe<Scalars['Boolean']['input']>;
  isNationwideDelivery?: InputMaybe<Scalars['Boolean']['input']>;
  isServiceable?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Decimal']['input']>;
  longitude?: InputMaybe<Scalars['Decimal']['input']>;
  mallAdmin?: InputMaybe<Scalars['ID']['input']>;
  mallClosing?: InputMaybe<Scalars['Time']['input']>;
  mallOpening?: InputMaybe<Scalars['Time']['input']>;
  mobileNo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nextDayAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  provinceCode?: InputMaybe<Scalars['String']['input']>;
  provinceName?: InputMaybe<Scalars['String']['input']>;
  sameDayAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  sameDayGmCutoffTime?: InputMaybe<Scalars['Time']['input']>;
  serviceArea?: InputMaybe<Scalars['Decimal']['input']>;
  smMarketExternalCode?: InputMaybe<Scalars['String']['input']>;
  smMarketExternalId?: InputMaybe<Scalars['Int']['input']>;
  smMarketExternalName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SmopStatusEnum>;
  telephoneNo?: InputMaybe<Scalars['String']['input']>;
  totalLandArea?: InputMaybe<Scalars['Decimal']['input']>;
};

export type Manifest = {
  __typename?: 'Manifest';
  about?: Maybe<Scalars['String']['output']>;
  appUrl?: Maybe<Scalars['String']['output']>;
  configurationUrl?: Maybe<Scalars['String']['output']>;
  dataPrivacy?: Maybe<Scalars['String']['output']>;
  dataPrivacyUrl?: Maybe<Scalars['String']['output']>;
  homepageUrl?: Maybe<Scalars['String']['output']>;
  identifier: Scalars['String']['output'];
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Maybe<Permission>>>;
  supportUrl?: Maybe<Scalars['String']['output']>;
  tokenTargetUrl?: Maybe<Scalars['String']['output']>;
  version: Scalars['String']['output'];
};

export type Margin = {
  __typename?: 'Margin';
  start?: Maybe<Scalars['Int']['output']>;
  stop?: Maybe<Scalars['Int']['output']>;
};

export type MarkRemittanceAsPaymentCollected = {
  __typename?: 'MarkRemittanceAsPaymentCollected';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Array<Maybe<Order>>>;
  remittanceErrors: Array<RemittanceError>;
};

export type MarketToken = {
  __typename?: 'MarketToken';
  token?: Maybe<Scalars['String']['output']>;
};

export type MeOrderFilterInput = {
  brandName?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  deliverySchedules?: InputMaybe<DateRangeInput>;
  deliveryTypes?: InputMaybe<Array<InputMaybe<DeliveryTypeEnum>>>;
  earliestStoreOrderStatus?: InputMaybe<Array<InputMaybe<SmopOrderStatusEnum>>>;
  isFromShopify?: InputMaybe<Scalars['Boolean']['input']>;
  isShopifyOrderCreated?: InputMaybe<Scalars['Boolean']['input']>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderCode?: InputMaybe<Scalars['String']['input']>;
  parcelNo?: InputMaybe<Scalars['String']['input']>;
  paymentChannelCode?: InputMaybe<Array<InputMaybe<PaymentChannelCodeEnum>>>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  paymentStatus?: InputMaybe<Array<InputMaybe<PaymentChargeStatusEnum>>>;
  riderName?: InputMaybe<StaffNameInput>;
  runnerName?: InputMaybe<StaffNameInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  smopStatus?: InputMaybe<Array<InputMaybe<SmopOrderStatusEnum>>>;
  verticalType?: InputMaybe<Array<InputMaybe<StoreTypeEnum>>>;
};

export type Menu = Node & {
  __typename?: 'Menu';
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<MenuItem>>>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type MenuBulkDelete = {
  __typename?: 'MenuBulkDelete';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
};

export type MenuCountableConnection = {
  __typename?: 'MenuCountableConnection';
  edges: Array<MenuCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type MenuCountableEdge = {
  __typename?: 'MenuCountableEdge';
  cursor: Scalars['String']['output'];
  node: Menu;
};

export type MenuCreate = {
  __typename?: 'MenuCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  menu?: Maybe<Menu>;
  menuErrors: Array<MenuError>;
};

export type MenuCreateInput = {
  items?: InputMaybe<Array<InputMaybe<MenuItemInput>>>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type MenuDelete = {
  __typename?: 'MenuDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  menu?: Maybe<Menu>;
  menuErrors: Array<MenuError>;
};

export type MenuError = {
  __typename?: 'MenuError';
  code: MenuErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum MenuErrorCode {
  CannotAssignNode = 'CANNOT_ASSIGN_NODE',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidMenuItem = 'INVALID_MENU_ITEM',
  NotFound = 'NOT_FOUND',
  NoMenuItemProvided = 'NO_MENU_ITEM_PROVIDED',
  Required = 'REQUIRED',
  TooManyMenuItems = 'TOO_MANY_MENU_ITEMS',
  Unique = 'UNIQUE'
}

export type MenuFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenuInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItem = Node & {
  __typename?: 'MenuItem';
  category?: Maybe<Category>;
  children?: Maybe<Array<Maybe<MenuItem>>>;
  collection?: Maybe<Collection>;
  id: Scalars['ID']['output'];
  level: Scalars['Int']['output'];
  menu: Menu;
  name: Scalars['String']['output'];
  page?: Maybe<Page>;
  parent?: Maybe<MenuItem>;
  translation?: Maybe<MenuItemTranslation>;
  url?: Maybe<Scalars['String']['output']>;
};


export type MenuItemTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type MenuItemBulkDelete = {
  __typename?: 'MenuItemBulkDelete';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
};

export type MenuItemCountableConnection = {
  __typename?: 'MenuItemCountableConnection';
  edges: Array<MenuItemCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type MenuItemCountableEdge = {
  __typename?: 'MenuItemCountableEdge';
  cursor: Scalars['String']['output'];
  node: MenuItem;
};

export type MenuItemCreate = {
  __typename?: 'MenuItemCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
  menuItem?: Maybe<MenuItem>;
};

export type MenuItemCreateInput = {
  category?: InputMaybe<Scalars['ID']['input']>;
  collection?: InputMaybe<Scalars['ID']['input']>;
  menu: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  page?: InputMaybe<Scalars['ID']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItemDelete = {
  __typename?: 'MenuItemDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
  menuItem?: Maybe<MenuItem>;
};

export type MenuItemFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItemInput = {
  category?: InputMaybe<Scalars['ID']['input']>;
  collection?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MenuItemMove = {
  __typename?: 'MenuItemMove';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  menu?: Maybe<Menu>;
  menuErrors: Array<MenuError>;
};

export type MenuItemMoveInput = {
  itemId: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type MenuItemSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: MenuItemsSortField;
};

export type MenuItemTranslatableContent = Node & {
  __typename?: 'MenuItemTranslatableContent';
  id: Scalars['ID']['output'];
  menuItem?: Maybe<MenuItem>;
  name: Scalars['String']['output'];
  translation?: Maybe<MenuItemTranslation>;
};


export type MenuItemTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type MenuItemTranslate = {
  __typename?: 'MenuItemTranslate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  menuItem?: Maybe<MenuItem>;
  translationErrors: Array<TranslationError>;
};

export type MenuItemTranslation = Node & {
  __typename?: 'MenuItemTranslation';
  id: Scalars['ID']['output'];
  language: LanguageDisplay;
  name: Scalars['String']['output'];
};

export type MenuItemUpdate = {
  __typename?: 'MenuItemUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
  menuItem?: Maybe<MenuItem>;
};

export enum MenuItemsSortField {
  Name = 'NAME'
}

export enum MenuSortField {
  ItemsCount = 'ITEMS_COUNT',
  MenuName = 'MENU_NAME'
}

export type MenuSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: MenuSortField;
};

export type MenuUpdate = {
  __typename?: 'MenuUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  menu?: Maybe<Menu>;
  menuErrors: Array<MenuError>;
};

export type MetaClientStore = {
  __typename?: 'MetaClientStore';
  metadata: Array<Maybe<MetaItem>>;
  name: Scalars['String']['output'];
};

export type MetaInput = {
  clientName: Scalars['String']['input'];
  key: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type MetaItem = {
  __typename?: 'MetaItem';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type MetaPath = {
  clientName: Scalars['String']['input'];
  key: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
};

export type MetaStore = {
  __typename?: 'MetaStore';
  clients: Array<Maybe<MetaClientStore>>;
  namespace: Scalars['String']['output'];
};

export type MetadataError = {
  __typename?: 'MetadataError';
  code: MetadataErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum MetadataErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export type MetadataInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type MetadataItem = {
  __typename?: 'MetadataItem';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type MobileOtp = Node & {
  __typename?: 'MobileOTP';
  attempt: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateGenerated?: Maybe<Scalars['DateTime']['output']>;
  dateVerified?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  mobileNo?: Maybe<Scalars['String']['output']>;
  status: MobileOtpStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MobileOtpGenerate = {
  __typename?: 'MobileOTPGenerate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  mobileOTP?: Maybe<MobileOtp>;
  mobileOtp?: Maybe<MobileOtp>;
  otpErrors: Array<OtpError>;
};

export type MobileOtpGenerateInput = {
  mobileNo: Scalars['String']['input'];
};

export type MobileOtpResetPassword = {
  __typename?: 'MobileOTPResetPassword';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export enum MobileOtpStatus {
  Exp = 'EXP',
  Unv = 'UNV',
  Ver = 'VER'
}

export type MobileOtpVerify = {
  __typename?: 'MobileOTPVerify';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  mobileOTP?: Maybe<MobileOtp>;
  mobileOtp?: Maybe<MobileOtp>;
  otpErrors: Array<OtpError>;
};

export type Money = {
  __typename?: 'Money';
  amount: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  /** @deprecated Price formatting according to the current locale should be handled by the frontend client. This field will be removed after 2020-07-31. */
  localized: Scalars['String']['output'];
};

export type MoneyRange = {
  __typename?: 'MoneyRange';
  start?: Maybe<Money>;
  stop?: Maybe<Money>;
};

export type MoveProductInput = {
  productId: Scalars['ID']['input'];
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  accessCreate?: Maybe<AccessCreate>;
  accessGroupCreate?: Maybe<AccessGroupCreate>;
  accessGroupUpdate?: Maybe<AccessGroupUpdate>;
  accountAddressCreate?: Maybe<AccountAddressCreate>;
  accountAddressDelete?: Maybe<AccountAddressDelete>;
  accountAddressUpdate?: Maybe<AccountAddressUpdate>;
  accountDelete?: Maybe<AccountDelete>;
  accountDeleteRequest?: Maybe<AccountDeleteRequest>;
  accountExists?: Maybe<AccountExists>;
  accountRegister?: Maybe<AccountRegister>;
  accountRequestDeletion?: Maybe<AccountRequestDeletion>;
  accountSetDefaultAddress?: Maybe<AccountSetDefaultAddress>;
  accountSetNewPassword?: Maybe<AccountSetNewPassword>;
  accountSetStatus?: Maybe<AccountSetStatus>;
  accountSmMarketReregister?: Maybe<AccountSmMarketReregister>;
  accountSmacSet?: Maybe<AccountSmacSet>;
  accountUpdate?: Maybe<AccountUpdate>;
  /** @deprecated Use the `updateMetadata` mutation. This field will be removed after 2020-07-31. */
  accountUpdateMeta?: Maybe<AccountUpdateMeta>;
  addItemToCart?: Maybe<AddItemToCart>;
  addressCreate?: Maybe<AddressCreate>;
  addressDelete?: Maybe<AddressDelete>;
  addressSetDefault?: Maybe<AddressSetDefault>;
  addressSetHome?: Maybe<AddressSetHome>;
  addressUpdate?: Maybe<AddressUpdate>;
  announcementBulkDelete?: Maybe<AnnouncementBulkDelete>;
  announcementCreate?: Maybe<AnnouncementCreate>;
  announcementDelete?: Maybe<AnnouncementDelete>;
  announcementUpdate?: Maybe<AnnouncementUpdate>;
  appActivate?: Maybe<AppActivate>;
  appConfigCreate?: Maybe<AppConfigCreate>;
  appConfigUpdate?: Maybe<AppConfigUpdate>;
  appCreate?: Maybe<AppCreate>;
  appDeactivate?: Maybe<AppDeactivate>;
  appDelete?: Maybe<AppDelete>;
  appDeleteFailedInstallation?: Maybe<AppDeleteFailedInstallation>;
  appFetchManifest?: Maybe<AppFetchManifest>;
  appInstall?: Maybe<AppInstall>;
  appRetryInstall?: Maybe<AppRetryInstall>;
  appTokenCreate?: Maybe<AppTokenCreate>;
  appTokenDelete?: Maybe<AppTokenDelete>;
  appTokenVerify?: Maybe<AppTokenVerify>;
  appUpdate?: Maybe<AppUpdate>;
  assignNavigation?: Maybe<AssignNavigation>;
  assignRunnerToTaskAreas?: Maybe<AssignRunnerToTaskAreas>;
  assignStoreOrderRunner?: Maybe<AssignStoreOrderRunner>;
  assignWarehouseShippingZone?: Maybe<WarehouseShippingZoneAssign>;
  attributeAssign?: Maybe<AttributeAssign>;
  attributeBulkDelete?: Maybe<AttributeBulkDelete>;
  /** @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31. */
  attributeClearMetadata?: Maybe<AttributeClearMeta>;
  /** @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  attributeClearPrivateMetadata?: Maybe<AttributeClearPrivateMeta>;
  attributeCreate?: Maybe<AttributeCreate>;
  attributeDelete?: Maybe<AttributeDelete>;
  attributeReorderValues?: Maybe<AttributeReorderValues>;
  attributeTranslate?: Maybe<AttributeTranslate>;
  attributeUnassign?: Maybe<AttributeUnassign>;
  attributeUpdate?: Maybe<AttributeUpdate>;
  /** @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  attributeUpdateMetadata?: Maybe<AttributeUpdateMeta>;
  /** @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  attributeUpdatePrivateMetadata?: Maybe<AttributeUpdatePrivateMeta>;
  attributeValueBulkDelete?: Maybe<AttributeValueBulkDelete>;
  attributeValueCreate?: Maybe<AttributeValueCreate>;
  attributeValueDelete?: Maybe<AttributeValueDelete>;
  attributeValueTranslate?: Maybe<AttributeValueTranslate>;
  attributeValueUpdate?: Maybe<AttributeValueUpdate>;
  authorizationKeyAdd?: Maybe<AuthorizationKeyAdd>;
  authorizationKeyDelete?: Maybe<AuthorizationKeyDelete>;
  autoBookingSetIsEnabled?: Maybe<AutoBookingSetIsEnabled>;
  bannerAddMalls?: Maybe<BannerAddMalls>;
  bannerAnnouncementLinkUpdate?: Maybe<BannerAnnouncementLinkUpdate>;
  bannerBulkDelete?: Maybe<BannerBulkDelete>;
  bannerCreate?: Maybe<BannerCreate>;
  bannerDelete?: Maybe<BannerDelete>;
  bannerGenerateDynamicLink?: Maybe<BannerGenerateDynamicLink>;
  bannerImageCreate?: Maybe<BannerImageCreate>;
  bannerRemoveMalls?: Maybe<BannerRemoveMalls>;
  bannerUpdate?: Maybe<BannerUpdate>;
  book2go?: Maybe<Book2go>;
  bookThirdPartyRider?: Maybe<BookThirdPartyRider>;
  brandCreate?: Maybe<BrandCreate>;
  brandGenerateDynamicLink?: Maybe<BrandGenerateDynamicLink>;
  brandGroupCreate?: Maybe<BrandGroupCreate>;
  brandGroupDelete?: Maybe<BrandGroupDelete>;
  brandGroupUpdate?: Maybe<BrandGroupUpdate>;
  brandTagCreate?: Maybe<BrandTagCreate>;
  brandTagDelete?: Maybe<BrandTagDelete>;
  brandTagUpdate?: Maybe<BrandTagUpdate>;
  brandUpdate?: Maybe<BrandUpdate>;
  cancelAutoBooking?: Maybe<CancelAutoBooking>;
  cartCreate?: Maybe<CartCreate>;
  cartLineAddNote?: Maybe<CartLineAddNote>;
  cartLineDelete?: Maybe<CartLineDelete>;
  cartLinesAdd?: Maybe<CartLinesAdd>;
  cartLinesUpdate?: Maybe<CartLinesUpdate>;
  categoryBulkDelete?: Maybe<CategoryBulkDelete>;
  /** @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31. */
  categoryClearMetadata?: Maybe<CategoryClearMeta>;
  /** @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  categoryClearPrivateMetadata?: Maybe<CategoryClearPrivateMeta>;
  categoryCreate?: Maybe<CategoryCreate>;
  categoryDelete?: Maybe<CategoryDelete>;
  categoryGenerateDynamicLink?: Maybe<CategoryGenerateDynamicLink>;
  categoryTranslate?: Maybe<CategoryTranslate>;
  categoryUpdate?: Maybe<CategoryUpdate>;
  /** @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  categoryUpdateMetadata?: Maybe<CategoryUpdateMeta>;
  /** @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  categoryUpdatePrivateMetadata?: Maybe<CategoryUpdatePrivateMeta>;
  checkoutAddPromoCode?: Maybe<CheckoutAddPromoCode>;
  checkoutAddressUpdate?: Maybe<CheckoutAddressUpdate>;
  checkoutBillingAddressUpdate?: Maybe<CheckoutBillingAddressUpdate>;
  /** @deprecated Use the `deleteMetadata` mutation. This field will be removed after 2020-07-31. */
  checkoutClearMetadata?: Maybe<CheckoutClearMeta>;
  /** @deprecated Use the `deletePrivateMetadata` mutation. This field will be removed after 2020-07-31. */
  checkoutClearPrivateMetadata?: Maybe<CheckoutClearPrivateMeta>;
  checkoutComplete?: Maybe<CheckoutComplete>;
  checkoutCreate?: Maybe<CheckoutCreate>;
  checkoutCustomerAttach?: Maybe<CheckoutCustomerAttach>;
  checkoutCustomerDetach?: Maybe<CheckoutCustomerDetach>;
  checkoutEmailUpdate?: Maybe<CheckoutEmailUpdate>;
  checkoutHasCutlery?: Maybe<CheckoutHasCutlery>;
  checkoutLineAddNote?: Maybe<CheckoutLineAddNote>;
  checkoutLineDelete?: Maybe<CheckoutLineDelete>;
  checkoutLinesAdd?: Maybe<CheckoutLinesAdd>;
  checkoutLinesUpdate?: Maybe<CheckoutLinesUpdate>;
  checkoutPaymentCreate?: Maybe<CheckoutPaymentCreate>;
  checkoutRemovePromoCode?: Maybe<CheckoutRemovePromoCode>;
  checkoutShippingAddressUpdate?: Maybe<CheckoutShippingAddressUpdate>;
  checkoutShippingMethodUpdate?: Maybe<CheckoutShippingMethodUpdate>;
  /** @deprecated Use the `updateMetadata` mutation. This field will be removed after 2020-07-31. */
  checkoutUpdateMetadata?: Maybe<CheckoutUpdateMeta>;
  /** @deprecated Use the `updatePrivateMetadata` mutation. This field will be removed after 2020-07-31. */
  checkoutUpdatePrivateMetadata?: Maybe<CheckoutUpdatePrivateMeta>;
  choiceCreate?: Maybe<ChoiceCreate>;
  choiceUpdate?: Maybe<ChoiceUpdate>;
  clearPcbCache?: Maybe<ClearCachePcb>;
  clusterBulkDelete?: Maybe<ClusterBulkDelete>;
  clusterCreate?: Maybe<ClusterCreate>;
  clusterDelete?: Maybe<ClusterDelete>;
  clusterUpdate?: Maybe<ClusterUpdate>;
  collectionAddProducts?: Maybe<CollectionAddProducts>;
  collectionBulkDelete?: Maybe<CollectionBulkDelete>;
  collectionBulkPublish?: Maybe<CollectionBulkPublish>;
  /** @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31. */
  collectionClearMetadata?: Maybe<CollectionClearMeta>;
  /** @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  collectionClearPrivateMetadata?: Maybe<CollectionClearPrivateMeta>;
  collectionCreate?: Maybe<CollectionCreate>;
  collectionDelete?: Maybe<CollectionDelete>;
  collectionGenerateDynamicLink?: Maybe<CollectionGenerateDynamicLink>;
  collectionRemoveProducts?: Maybe<CollectionRemoveProducts>;
  collectionReorderProducts?: Maybe<CollectionReorderProducts>;
  collectionTranslate?: Maybe<CollectionTranslate>;
  collectionUpdate?: Maybe<CollectionUpdate>;
  /** @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  collectionUpdateMetadata?: Maybe<CollectionUpdateMeta>;
  /** @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  collectionUpdatePrivateMetadata?: Maybe<CollectionUpdatePrivateMeta>;
  confirmAccount?: Maybe<ConfirmAccount>;
  confirmEmailChange?: Maybe<ConfirmEmailChange>;
  contactUsEmail?: Maybe<ContactUsEmail>;
  couponActivate?: Maybe<CouponActivate>;
  couponClaim?: Maybe<CouponClaim>;
  couponCollectionCreate?: Maybe<CouponCollectionCreate>;
  couponCollectionDelete?: Maybe<CouponCollectionDelete>;
  couponCollectionGenerateDynamicLink?: Maybe<CouponCollectionGenerateDynamicLink>;
  couponCollectionToggleActivate?: Maybe<CouponCollectionToggleActivate>;
  couponCollectionToggleIsHidden?: Maybe<CouponCollectionToggleIsHidden>;
  couponCollectionUpdate?: Maybe<CouponCollectionUpdate>;
  couponCreate?: Maybe<CouponCreate>;
  couponDeactivate?: Maybe<CouponDeactivate>;
  couponDelete?: Maybe<CouponDelete>;
  couponGenerateDynamicLink?: Maybe<CouponGenerateDynamicLink>;
  couponManualReorder?: Maybe<CouponManualReorder>;
  couponPresetReorder?: Maybe<CouponPresetReorder>;
  couponRedeem?: Maybe<CouponRedeem>;
  couponRedemptionUpdateNotifStatus?: Maybe<CouponRedemptionUpdateNotifStatus>;
  couponToggleIsFeatured?: Maybe<CouponToggleIsFeatured>;
  couponUpdate?: Maybe<CouponUpdate>;
  createHomeLocation?: Maybe<HomeLocationCreate>;
  createPauseReason?: Maybe<CreatePauseReason>;
  createRemittanceManualAdjustment?: Maybe<CreateRemittanceManualAdjustment>;
  createRemittanceManualOverride?: Maybe<CreateRemittanceManualOverride>;
  createWarehouse?: Maybe<WarehouseCreate>;
  customerBulkDelete?: Maybe<CustomerBulkDelete>;
  customerCreate?: Maybe<CustomerCreate>;
  customerDelete?: Maybe<CustomerDelete>;
  customerEmailUpdateOtpGenerate?: Maybe<CustomerEmailUpdateOtpGenerate>;
  customerEmailUpdateOtpVerify?: Maybe<CustomerEmailUpdateOtpVerify>;
  customerOtpGenerate?: Maybe<CustomerOtpGenerate>;
  customerOtpVerify?: Maybe<CustomerOtpVerify>;
  customerReregister?: Maybe<CustomerReregister>;
  customerSoftDelete?: Maybe<CustomerSoftDelete>;
  customerUpdate?: Maybe<CustomerUpdate>;
  deleteCreditCard?: Maybe<DeleteCreditCard>;
  deleteHomeLocation?: Maybe<HomeLocationDelete>;
  deleteMetadata?: Maybe<DeleteMetadata>;
  deletePrivateMetadata?: Maybe<DeletePrivateMetadata>;
  deleteWarehouse?: Maybe<WarehouseDelete>;
  digitalContentCreate?: Maybe<DigitalContentCreate>;
  digitalContentDelete?: Maybe<DigitalContentDelete>;
  digitalContentUpdate?: Maybe<DigitalContentUpdate>;
  digitalContentUrlCreate?: Maybe<DigitalContentUrlCreate>;
  discountUploadTemplate?: Maybe<DiscountUploadTemplate>;
  draftCouponCreate?: Maybe<DraftCouponCreate>;
  draftCouponUpdate?: Maybe<DraftCouponUpdate>;
  draftOrderBulkDelete?: Maybe<DraftOrderBulkDelete>;
  draftOrderComplete?: Maybe<DraftOrderComplete>;
  draftOrderCreate?: Maybe<DraftOrderCreate>;
  draftOrderDelete?: Maybe<DraftOrderDelete>;
  draftOrderLineDelete?: Maybe<DraftOrderLineDelete>;
  draftOrderLineUpdate?: Maybe<DraftOrderLineUpdate>;
  draftOrderLinesBulkDelete?: Maybe<DraftOrderLinesBulkDelete>;
  draftOrderLinesCreate?: Maybe<DraftOrderLinesCreate>;
  draftOrderUpdate?: Maybe<DraftOrderUpdate>;
  dropOffLocationCreate?: Maybe<DropOffLocationCreate>;
  dropOffLocationUpdate?: Maybe<DropOffLocationUpdate>;
  enableAllMallRemittance?: Maybe<EnableAllMallRemittance>;
  enableMallRemittance?: Maybe<EnableMallRemittance>;
  endServicePause?: Maybe<EndServicePause>;
  exportCouponRedemptions?: Maybe<ExportCouponRedemptions>;
  exportOrders?: Maybe<ExportOrders>;
  exportProducts?: Maybe<ExportProducts>;
  exportRemittanceOrders?: Maybe<ExportRemittanceOrders>;
  exportSaleErrorVariants?: Maybe<ExportSaleErrorVariants>;
  exportStoreOrders?: Maybe<ExportStoreOrders>;
  firebaseDetailsUpdate?: Maybe<FirebaseDetailsUpdate>;
  followBrand?: Maybe<FollowBrand>;
  freshdeskDetailsUpdate?: Maybe<FreshdeskDetailsUpdate>;
  generateRemittanceId?: Maybe<GenerateRemittanceId>;
  giftCardActivate?: Maybe<GiftCardActivate>;
  giftCardCreate?: Maybe<GiftCardCreate>;
  giftCardDeactivate?: Maybe<GiftCardDeactivate>;
  giftCardUpdate?: Maybe<GiftCardUpdate>;
  hidePauseReason?: Maybe<HidePauseReason>;
  homepageCollectionUpdate?: Maybe<HomepageCollectionUpdate>;
  invoiceCreate?: Maybe<InvoiceCreate>;
  invoiceDelete?: Maybe<InvoiceDelete>;
  invoiceRequest?: Maybe<InvoiceRequest>;
  invoiceRequestDelete?: Maybe<InvoiceRequestDelete>;
  invoiceSendEmail?: Maybe<InvoiceSendEmail>;
  invoiceUpdate?: Maybe<InvoiceUpdate>;
  logout?: Maybe<DeactivateUserToken>;
  mallCreate?: Maybe<MallCreate>;
  mallUpdate?: Maybe<MallUpdate>;
  markRemittanceAsPaymentCollected?: Maybe<MarkRemittanceAsPaymentCollected>;
  menuBulkDelete?: Maybe<MenuBulkDelete>;
  menuCreate?: Maybe<MenuCreate>;
  menuDelete?: Maybe<MenuDelete>;
  menuItemBulkDelete?: Maybe<MenuItemBulkDelete>;
  menuItemCreate?: Maybe<MenuItemCreate>;
  menuItemDelete?: Maybe<MenuItemDelete>;
  menuItemMove?: Maybe<MenuItemMove>;
  menuItemTranslate?: Maybe<MenuItemTranslate>;
  menuItemUpdate?: Maybe<MenuItemUpdate>;
  menuUpdate?: Maybe<MenuUpdate>;
  mobileOtpGenerate?: Maybe<MobileOtpGenerate>;
  mobileOtpResetPassword?: Maybe<MobileOtpResetPassword>;
  mobileOtpVerify?: Maybe<MobileOtpVerify>;
  orderAddNote?: Maybe<OrderAddNote>;
  orderAssignRider?: Maybe<OrderAssignRider>;
  orderBulkCancel?: Maybe<OrderBulkCancel>;
  orderCancel?: Maybe<OrderCancel>;
  orderCancelGrabExpress?: Maybe<OrderCancelGrabExpress>;
  orderCancelPandagoAuto?: Maybe<OrderCancelPandagoAuto>;
  orderCapture?: Maybe<OrderCapture>;
  /** @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31. */
  orderClearMeta?: Maybe<OrderClearMeta>;
  /** @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  orderClearPrivateMeta?: Maybe<OrderClearPrivateMeta>;
  orderFulfill?: Maybe<OrderFulfill>;
  orderFulfillmentCancel?: Maybe<FulfillmentCancel>;
  /** @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31. */
  orderFulfillmentClearMeta?: Maybe<FulfillmentClearMeta>;
  /** @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  orderFulfillmentClearPrivateMeta?: Maybe<FulfillmentClearPrivateMeta>;
  orderFulfillmentRemarks?: Maybe<OrderFulfillmentRemarks>;
  /** @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  orderFulfillmentUpdateMeta?: Maybe<FulfillmentUpdateMeta>;
  /** @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  orderFulfillmentUpdatePrivateMeta?: Maybe<FulfillmentUpdatePrivateMeta>;
  orderFulfillmentUpdateTracking?: Maybe<FulfillmentUpdateTracking>;
  orderImageCreate?: Maybe<OrderImageCreate>;
  orderMarkAsCompleted?: Maybe<OrderMarkAsCompleted>;
  orderMarkAsPacked?: Maybe<OrderMarkAsPacked>;
  orderMarkAsPaid?: Maybe<OrderMarkAsPaid>;
  orderMarkAsReadyToShip?: Maybe<OrderMarkAsReadyToShip>;
  orderMarkAsShipped?: Maybe<OrderMarkAsShipped>;
  orderRefund?: Maybe<OrderRefund>;
  orderReturnToFc?: Maybe<OrderReturnToFc>;
  orderRiderArrived?: Maybe<OrderRiderArrived>;
  orderRiderDispatchAssignOrders?: Maybe<OrderRiderDispatchAssignOrders>;
  orderRiderDispatchSearchAndValidation?: Maybe<OrderRiderDispatchSearchAndValidation>;
  orderUpdate?: Maybe<OrderUpdate>;
  orderUpdateDropOffLocation?: Maybe<OrderUpdateDropOffLocation>;
  /** @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  orderUpdateMeta?: Maybe<OrderUpdateMeta>;
  /** @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  orderUpdatePrivateMeta?: Maybe<OrderUpdatePrivateMeta>;
  orderUpdateShipping?: Maybe<OrderUpdateShipping>;
  orderUpdateShippingLabel?: Maybe<OrderUpdateShippingLabel>;
  orderVoid?: Maybe<OrderVoid>;
  otpGenerate?: Maybe<OtpGenerate>;
  otpVerify?: Maybe<OtpVerify>;
  overrideItemFromCart?: Maybe<OverrideItemFromCart>;
  pageBulkDelete?: Maybe<PageBulkDelete>;
  pageBulkPublish?: Maybe<PageBulkPublish>;
  pageCreate?: Maybe<PageCreate>;
  pageDelete?: Maybe<PageDelete>;
  pageTranslate?: Maybe<PageTranslate>;
  pageUpdate?: Maybe<PageUpdate>;
  passwordChange?: Maybe<PasswordChange>;
  paymentCapture?: Maybe<PaymentCapture>;
  paymentInitialize?: Maybe<PaymentInitialize>;
  paymentMethodUnlink?: Maybe<PaymentMethodUnlink>;
  paymentRefund?: Maybe<PaymentRefund>;
  paymentVoid?: Maybe<PaymentVoid>;
  permissionGroupCreate?: Maybe<PermissionGroupCreate>;
  permissionGroupDelete?: Maybe<PermissionGroupDelete>;
  permissionGroupUpdate?: Maybe<PermissionGroupUpdate>;
  pluginUpdate?: Maybe<PluginUpdate>;
  productBulkDelete?: Maybe<ProductBulkDelete>;
  productBulkPublish?: Maybe<ProductBulkPublish>;
  /** @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productClearMetadata?: Maybe<ProductClearMeta>;
  /** @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productClearPrivateMetadata?: Maybe<ProductClearPrivateMeta>;
  productCreate?: Maybe<ProductCreate>;
  productDelete?: Maybe<ProductDelete>;
  productGenerateDynamicLink?: Maybe<ProductGenerateDynamicLink>;
  productImageBulkDelete?: Maybe<ProductImageBulkDelete>;
  productImageCreate?: Maybe<ProductImageCreate>;
  productImageCreateUrl?: Maybe<ProductImageCreateUrl>;
  productImageDelete?: Maybe<ProductImageDelete>;
  productImageReorder?: Maybe<ProductImageReorder>;
  productImageResize?: Maybe<ProductImageResize>;
  productImageUpdate?: Maybe<ProductImageUpdate>;
  productSetAvailabilityForPurchase?: Maybe<ProductSetAvailabilityForPurchase>;
  productStatusBulkUpdate?: Maybe<ProductStatusBulkUpdate>;
  productTranslate?: Maybe<ProductTranslate>;
  productTypeBulkDelete?: Maybe<ProductTypeBulkDelete>;
  /** @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productTypeClearMetadata?: Maybe<ProductTypeClearMeta>;
  /** @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productTypeClearPrivateMetadata?: Maybe<ProductTypeClearPrivateMeta>;
  productTypeCreate?: Maybe<ProductTypeCreate>;
  productTypeDelete?: Maybe<ProductTypeDelete>;
  productTypeReorderAttributes?: Maybe<ProductTypeReorderAttributes>;
  productTypeUpdate?: Maybe<ProductTypeUpdate>;
  /** @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productTypeUpdateMetadata?: Maybe<ProductTypeUpdateMeta>;
  /** @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productTypeUpdatePrivateMetadata?: Maybe<ProductTypeUpdatePrivateMeta>;
  productUpdate?: Maybe<ProductUpdate>;
  /** @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productUpdateMetadata?: Maybe<ProductUpdateMeta>;
  /** @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productUpdatePrivateMetadata?: Maybe<ProductUpdatePrivateMeta>;
  productUploadTemplate?: Maybe<ProductUploadTemplate>;
  productVariantBulkCreate?: Maybe<ProductVariantBulkCreate>;
  productVariantBulkDelete?: Maybe<ProductVariantBulkDelete>;
  /** @deprecated Use the `deleteMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productVariantClearMetadata?: Maybe<ProductVariantClearMeta>;
  /** @deprecated Use the `deletePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productVariantClearPrivateMetadata?: Maybe<ProductVariantClearPrivateMeta>;
  productVariantCreate?: Maybe<ProductVariantCreate>;
  productVariantDelete?: Maybe<ProductVariantDelete>;
  productVariantReorder?: Maybe<ProductVariantReorder>;
  productVariantSetDefault?: Maybe<ProductVariantSetDefault>;
  productVariantStocksCreate?: Maybe<ProductVariantStocksCreate>;
  productVariantStocksDelete?: Maybe<ProductVariantStocksDelete>;
  productVariantStocksUpdate?: Maybe<ProductVariantStocksUpdate>;
  productVariantTranslate?: Maybe<ProductVariantTranslate>;
  productVariantUpdate?: Maybe<ProductVariantUpdate>;
  /** @deprecated Use the `updateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productVariantUpdateMetadata?: Maybe<ProductVariantUpdateMeta>;
  /** @deprecated Use the `updatePrivateMetadata` mutation instead. This field will be removed after 2020-07-31. */
  productVariantUpdatePrivateMetadata?: Maybe<ProductVariantUpdatePrivateMeta>;
  productVisibilityBulkUnpublish?: Maybe<ProductVisibilityBulkUnpublish>;
  productVisibilityBulkUpdate?: Maybe<ProductVisibilityBulkUpdate>;
  rackCreate?: Maybe<RackCreate>;
  rackDelete?: Maybe<RackDelete>;
  rackUpdate?: Maybe<RackUpdate>;
  refreshGrabExpressStatus?: Maybe<RefreshGrabExpressStatus>;
  refreshPandagoAutoStatus?: Maybe<RefreshPandagoAutoStatus>;
  remittanceCancel?: Maybe<RemittanceCancel>;
  remittanceUploadReceipt?: Maybe<RemittanceUploadReceipt>;
  requestEmailChange?: Maybe<RequestEmailChange>;
  requestPasswordReset?: Maybe<RequestPasswordReset>;
  reservationCancel?: Maybe<ReservationCancel>;
  reservationCreate?: Maybe<ReservationCreate>;
  reservationUpdateStatus?: Maybe<ReservationUpdateStatus>;
  riderCollectionTotal?: Maybe<RiderCollectionTotal>;
  saleBulkActivate?: Maybe<SaleBulkActivate>;
  saleBulkDeactivate?: Maybe<SaleBulkDeactivate>;
  saleBulkDelete?: Maybe<SaleBulkDelete>;
  saleCataloguesAdd?: Maybe<SaleAddCatalogues>;
  saleCataloguesRemove?: Maybe<SaleRemoveCatalogues>;
  saleCreate?: Maybe<SaleCreate>;
  saleDelete?: Maybe<SaleDelete>;
  saleTranslate?: Maybe<SaleTranslate>;
  saleUpdate?: Maybe<SaleUpdate>;
  searchHistoryClear?: Maybe<SearchHistoryClear>;
  searchHistoryDelete?: Maybe<SearchHistoryDelete>;
  searchResultsRate?: Maybe<RateKendraSearchResults>;
  sellerCreate?: Maybe<SellerCreate>;
  /** @deprecated Use the `deletePrivateMetadata` mutation with App instead.This field will be removed after 2020-07-31. */
  serviceAccountClearPrivateMetadata?: Maybe<ServiceAccountClearPrivateMeta>;
  /** @deprecated Use the `appCreate` mutation instead. This field will be removed after 2020-07-31. */
  serviceAccountCreate?: Maybe<ServiceAccountCreate>;
  /** @deprecated Use the `appDelete` mutation instead. This field will be removed after 2020-07-31. */
  serviceAccountDelete?: Maybe<ServiceAccountDelete>;
  /** @deprecated Use the `appTokenCreate` mutation instead. This field will be removed after 2020-07-31. */
  serviceAccountTokenCreate?: Maybe<ServiceAccountTokenCreate>;
  /** @deprecated Use the `appTokenDelete` mutation instead. This field will be removed after 2020-07-31. */
  serviceAccountTokenDelete?: Maybe<ServiceAccountTokenDelete>;
  /** @deprecated Use the `appUpdate` mutation instead. This field will be removed after 2020-07-31. */
  serviceAccountUpdate?: Maybe<ServiceAccountUpdate>;
  /** @deprecated Use the `updatePrivateMetadata` mutation with App instead.This field will be removed after 2020-07-31. */
  serviceAccountUpdatePrivateMetadata?: Maybe<ServiceAccountUpdatePrivateMeta>;
  setCouponsToCollection?: Maybe<SetCouponsToCollection>;
  setDailyRemittanceConfig?: Maybe<SetDailyRemittanceConfig>;
  setMallAutoBookingConfig?: Maybe<SetMallAutoBookingConfig>;
  setPassword?: Maybe<SetPassword>;
  setProductVisibility?: Maybe<SetProductVisibility>;
  shipmentCreate?: Maybe<ShipmentCreate>;
  shipmentUpdate?: Maybe<ShipmentUpdate>;
  shippingPriceBulkDelete?: Maybe<ShippingPriceBulkDelete>;
  shippingPriceCreate?: Maybe<ShippingPriceCreate>;
  shippingPriceDelete?: Maybe<ShippingPriceDelete>;
  shippingPriceTranslate?: Maybe<ShippingPriceTranslate>;
  shippingPriceUpdate?: Maybe<ShippingPriceUpdate>;
  shippingZoneBulkDelete?: Maybe<ShippingZoneBulkDelete>;
  shippingZoneCreate?: Maybe<ShippingZoneCreate>;
  shippingZoneDelete?: Maybe<ShippingZoneDelete>;
  shippingZoneUpdate?: Maybe<ShippingZoneUpdate>;
  shopAddressUpdate?: Maybe<ShopAddressUpdate>;
  shopDomainUpdate?: Maybe<ShopDomainUpdate>;
  shopFetchTaxRates?: Maybe<ShopFetchTaxRates>;
  shopSettingsTranslate?: Maybe<ShopSettingsTranslate>;
  shopSettingsUpdate?: Maybe<ShopSettingsUpdate>;
  shopifyBrandSync?: Maybe<ShopifyBrandSync>;
  shopifyBrandTagAdd?: Maybe<ShopifyBrandTagAdd>;
  shopifyBrandTagRemove?: Maybe<ShopifyBrandTagRemove>;
  shopifyBrandTagUpdate?: Maybe<ShopifyBrandTagUpdate>;
  shopifyCredentialsCheck?: Maybe<ShopifyCredentialsCheck>;
  shopsmManualSync?: Maybe<ShopSmManualSync>;
  smopCustomerCreate?: Maybe<SmopCustomerCreate>;
  smopCustomerLogin?: Maybe<SmopCustomerToken>;
  smopCustomerMobileOrEmailUpdate?: Maybe<SmopCustomerMobileOrEmailUpdate>;
  staffBulkDelete?: Maybe<StaffBulkDelete>;
  staffCreate?: Maybe<StaffCreate>;
  staffDelete?: Maybe<StaffDelete>;
  staffNotificationRecipientCreate?: Maybe<StaffNotificationRecipientCreate>;
  staffNotificationRecipientDelete?: Maybe<StaffNotificationRecipientDelete>;
  staffNotificationRecipientUpdate?: Maybe<StaffNotificationRecipientUpdate>;
  staffUpdate?: Maybe<StaffUpdate>;
  startServicePause?: Maybe<StartServicePause>;
  storeOrderLineDelete?: Maybe<StoreOrderLineDelete>;
  storeOrderLineUpdateQuantity?: Maybe<StoreOrderLineUpdateQuantity>;
  storeOrderLinesAdd?: Maybe<StoreOrderLinesAdd>;
  storeOrderMarkAsValidForPacking?: Maybe<StoreOrderMarkAsValidForPacking>;
  storeOrderOpsAdminScanParcel?: Maybe<StoreOrderOpsAdminScanParcel>;
  storeOrderParcelImageUpload?: Maybe<StoreOrderParcelImageUpload>;
  storeOrderPickLine?: Maybe<StoreOrderPickLine>;
  storeOrderReceiptImageUpload?: Maybe<StoreOrderReceiptImageUpload>;
  storeOrderRevertFromCancelled?: Maybe<StoreOrderRevertFromCancelled>;
  storeOrderRunnerDropOff?: Maybe<StoreOrderRunnerDropOff>;
  storeOrderRunnerScanParcel?: Maybe<StoreOrderRunnerScanParcel>;
  storeOrderSetParcelNo?: Maybe<StoreOrderSetParcelNo>;
  taskAreaAddStores?: Maybe<TaskAreaAddStores>;
  taskAreaCreate?: Maybe<TaskAreaCreate>;
  taskAreaRemoveStores?: Maybe<TaskAreaRemoveStores>;
  taskAreaUpdate?: Maybe<TaskAreaUpdate>;
  templateCreate?: Maybe<TemplateCreate>;
  templateDelete?: Maybe<TemplateDelete>;
  templateDuplicate?: Maybe<TemplateDuplicate>;
  templateFinalize?: Maybe<TemplateFinalize>;
  templateRename?: Maybe<TemplateRename>;
  templateUpdate?: Maybe<TemplateUpdate>;
  tenantCreate?: Maybe<TenantCreate>;
  tenantEnableReservation?: Maybe<TenantEnableReservation>;
  tenantPromotionalRibbonUpdate?: Maybe<TenantPromotionalRibbonUpdate>;
  tenantSetIsPausable?: Maybe<TenantsSetIsPausable>;
  tenantUpdate?: Maybe<TenantUpdate>;
  tokenCreate?: Maybe<CreateToken>;
  tokenRefresh?: Maybe<RefreshToken>;
  tokenVerify?: Maybe<VerifyToken>;
  tokensDeactivateAll?: Maybe<DeactivateAllUserTokens>;
  unassignRunnerFromTaskAreas?: Maybe<UnassignRunnerFromTaskAreas>;
  unassignWarehouseShippingZone?: Maybe<WarehouseShippingZoneUnassign>;
  unfollowBrand?: Maybe<UnfollowBrand>;
  update2goShipmentStatus?: Maybe<Update2GoShipmentStatus>;
  updateBrandStatus?: Maybe<UpdateBrandStatus>;
  updateHomeLocation?: Maybe<HomeLocationUpdate>;
  updateMallOrderTimeframe?: Maybe<UpdateMallOrderTimeframe>;
  updateMallStatus?: Maybe<UpdateMallStatus>;
  updateMetadata?: Maybe<UpdateMetadata>;
  updateOrderFulfillmentRemarks?: Maybe<UpdateOrderFulfillmentRemarks>;
  updateOrderStatus?: Maybe<UpdateOrderStatus>;
  updatePrivateMetadata?: Maybe<UpdatePrivateMetadata>;
  updateRemittanceManualAdjustmentStatus?: Maybe<UpdateRemittanceManualAdjustmentStatus>;
  updateSaleStatus?: Maybe<UpdateSaleStatus>;
  updateServiceMall?: Maybe<UpdateServiceMall>;
  updateStoreOrderStatus?: Maybe<UpdateStoreOrderStatus>;
  updateTenantStatus?: Maybe<UpdateTenantStatus>;
  updateVoucherGroupStatus?: Maybe<UpdateVoucherGroupStatus>;
  updateVoucherStatus?: Maybe<UpdateVoucherStatus>;
  updateWarehouse?: Maybe<WarehouseUpdate>;
  userAvatarDelete?: Maybe<UserAvatarDelete>;
  userAvatarUpdate?: Maybe<UserAvatarUpdate>;
  userBulkBlock?: Maybe<UserBulkBlock>;
  userBulkSetActive?: Maybe<UserBulkSetActive>;
  /** @deprecated Use the `deleteMetadata` mutation. This field will be removed after 2020-07-31. */
  userClearMetadata?: Maybe<UserClearMeta>;
  /** @deprecated Use the `deletePrivateMetadata` mutation. This field will be removed after 2020-07-31. */
  userClearPrivateMetadata?: Maybe<UserClearPrivateMeta>;
  /** @deprecated Use the `updateMetadata` mutation. This field will be removed after 2020-07-31. */
  userUpdateMetadata?: Maybe<UserUpdateMeta>;
  /** @deprecated Use the `updatePrivateMetadata` mutation. This field will be removed after 2020-07-31. */
  userUpdatePrivateMetadata?: Maybe<UserUpdatePrivateMeta>;
  variantImageAssign?: Maybe<VariantImageAssign>;
  variantImageUnassign?: Maybe<VariantImageUnassign>;
  voucherAddBrandGroups?: Maybe<VoucherAddBrandGroups>;
  voucherAddCustomers?: Maybe<VoucherAddCustomers>;
  voucherAddMalls?: Maybe<VoucherAddMalls>;
  voucherBulkActivate?: Maybe<VoucherBulkActivate>;
  voucherBulkCreate?: Maybe<VoucherBulkCreate>;
  voucherBulkDeactivate?: Maybe<VoucherBulkDeactivate>;
  voucherBulkDelete?: Maybe<VoucherBulkDelete>;
  voucherCataloguesAdd?: Maybe<VoucherAddCatalogues>;
  voucherCataloguesRemove?: Maybe<VoucherRemoveCatalogues>;
  voucherCreate?: Maybe<VoucherCreate>;
  voucherDelete?: Maybe<VoucherDelete>;
  voucherGroupCreate?: Maybe<VoucherGroupCreate>;
  voucherGroupDelete?: Maybe<VoucherGroupDelete>;
  voucherImageCreate?: Maybe<VoucherImageCreate>;
  voucherImageDelete?: Maybe<VoucherImageDelete>;
  voucherRemoveCustomers?: Maybe<VoucherRemoveCustomers>;
  voucherRemoveMalls?: Maybe<VoucherRemoveMalls>;
  voucherTenantBulkUpdate?: Maybe<VoucherTenantBulkUpdate>;
  voucherTenantDelete?: Maybe<VoucherTenantDelete>;
  voucherTenantUpdate?: Maybe<VoucherTenantUpdate>;
  voucherTranslate?: Maybe<VoucherTranslate>;
  voucherUpdate?: Maybe<VoucherUpdate>;
  webhookCreate?: Maybe<WebhookCreate>;
  webhookDelete?: Maybe<WebhookDelete>;
  webhookUpdate?: Maybe<WebhookUpdate>;
  wishlistAddProduct?: Maybe<WishlistAddProductMutation>;
  wishlistAddVariant?: Maybe<WishlistAddProductVariantMutation>;
  wishlistRemoveProduct?: Maybe<WishlistRemoveProductMutation>;
  wishlistRemoveVariant?: Maybe<WishlistRemoveProductVariantMutation>;
};


export type MutationAccessCreateArgs = {
  input: AccessCreateInput;
};


export type MutationAccessGroupCreateArgs = {
  input: AccessGroupCreateInput;
};


export type MutationAccessGroupUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AccessGroupUpdateInput;
};


export type MutationAccountAddressCreateArgs = {
  input: AddressInput;
  setAsDefaultBoth?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<AddressTypeEnum>;
};


export type MutationAccountAddressDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAccountAddressUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AddressInput;
};


export type MutationAccountDeleteArgs = {
  token: Scalars['String']['input'];
};


export type MutationAccountExistsArgs = {
  contactNo?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};


export type MutationAccountRegisterArgs = {
  input: AccountRegisterInput;
};


export type MutationAccountRequestDeletionArgs = {
  redirectUrl: Scalars['String']['input'];
};


export type MutationAccountSetDefaultAddressArgs = {
  id: Scalars['ID']['input'];
  setAsDefaultBoth?: InputMaybe<Scalars['Boolean']['input']>;
  type: AddressTypeEnum;
};


export type MutationAccountSetNewPasswordArgs = {
  newPassword: Scalars['String']['input'];
  user: Scalars['ID']['input'];
};


export type MutationAccountSetStatusArgs = {
  id: Scalars['ID']['input'];
  status: CustomerStatus;
};


export type MutationAccountSmMarketReregisterArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAccountSmacSetArgs = {
  cardNumber: Scalars['String']['input'];
};


export type MutationAccountUpdateArgs = {
  input: AccountInput;
};


export type MutationAccountUpdateMetaArgs = {
  input: MetaInput;
};


export type MutationAddItemToCartArgs = {
  cartId: Scalars['ID']['input'];
  line: CartLineInput;
};


export type MutationAddressCreateArgs = {
  input: AddressInput;
  userId: Scalars['ID']['input'];
};


export type MutationAddressDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddressSetDefaultArgs = {
  addressId: Scalars['ID']['input'];
  type: AddressTypeEnum;
  userId: Scalars['ID']['input'];
};


export type MutationAddressSetHomeArgs = {
  addressId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationAddressUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AddressInput;
};


export type MutationAnnouncementBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationAnnouncementCreateArgs = {
  input: AnnouncementCreateInput;
};


export type MutationAnnouncementDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAnnouncementUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AnnouncementCreateInput;
};


export type MutationAppActivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppConfigCreateArgs = {
  input: AppConfigCreateInput;
};


export type MutationAppConfigUpdateArgs = {
  id: Scalars['ID']['input'];
  json: Scalars['Upload']['input'];
};


export type MutationAppCreateArgs = {
  input: AppInput;
};


export type MutationAppDeactivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppDeleteFailedInstallationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppFetchManifestArgs = {
  manifestUrl: Scalars['String']['input'];
};


export type MutationAppInstallArgs = {
  input: AppInstallInput;
};


export type MutationAppRetryInstallArgs = {
  activateAfterInstallation?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationAppTokenCreateArgs = {
  input: AppTokenInput;
};


export type MutationAppTokenDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAppTokenVerifyArgs = {
  token: Scalars['String']['input'];
};


export type MutationAppUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AppInput;
};


export type MutationAssignNavigationArgs = {
  menu?: InputMaybe<Scalars['ID']['input']>;
  navigationType: NavigationType;
};


export type MutationAssignRunnerToTaskAreasArgs = {
  runnerId: Scalars['ID']['input'];
  taskAreaIds: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationAssignStoreOrderRunnerArgs = {
  runnerId: Scalars['ID']['input'];
  storeOrderId: Scalars['ID']['input'];
};


export type MutationAssignWarehouseShippingZoneArgs = {
  id: Scalars['ID']['input'];
  shippingZoneIds: Array<Scalars['ID']['input']>;
};


export type MutationAttributeAssignArgs = {
  operations: Array<InputMaybe<AttributeAssignInput>>;
  productTypeId: Scalars['ID']['input'];
};


export type MutationAttributeBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationAttributeClearMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationAttributeClearPrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationAttributeCreateArgs = {
  input: AttributeCreateInput;
};


export type MutationAttributeDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAttributeReorderValuesArgs = {
  attributeId: Scalars['ID']['input'];
  moves: Array<InputMaybe<ReorderInput>>;
};


export type MutationAttributeTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationAttributeUnassignArgs = {
  attributeIds: Array<InputMaybe<Scalars['ID']['input']>>;
  productTypeId: Scalars['ID']['input'];
};


export type MutationAttributeUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AttributeUpdateInput;
};


export type MutationAttributeUpdateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationAttributeUpdatePrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationAttributeValueBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationAttributeValueCreateArgs = {
  attribute: Scalars['ID']['input'];
  input: AttributeValueCreateInput;
};


export type MutationAttributeValueDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAttributeValueTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationAttributeValueUpdateArgs = {
  id: Scalars['ID']['input'];
  input: AttributeValueCreateInput;
};


export type MutationAuthorizationKeyAddArgs = {
  input: AuthorizationKeyInput;
  keyType: AuthorizationKeyType;
};


export type MutationAuthorizationKeyDeleteArgs = {
  keyType: AuthorizationKeyType;
};


export type MutationAutoBookingSetIsEnabledArgs = {
  input: AutoBookingSetIsEnabledInput;
  mallIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationBannerAddMallsArgs = {
  id: Scalars['ID']['input'];
  input: BannerMallsInput;
};


export type MutationBannerAnnouncementLinkUpdateArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<BannerAnnouncementLinkInput>;
};


export type MutationBannerBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationBannerCreateArgs = {
  input: BannerCreateInput;
};


export type MutationBannerDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationBannerGenerateDynamicLinkArgs = {
  id: Scalars['ID']['input'];
};


export type MutationBannerImageCreateArgs = {
  input: BannerImageCreateInput;
};


export type MutationBannerRemoveMallsArgs = {
  id: Scalars['ID']['input'];
  input: BannerMallsInput;
};


export type MutationBannerUpdateArgs = {
  id: Scalars['ID']['input'];
  input: BannerUpdateInput;
};


export type MutationBook2goArgs = {
  id: Scalars['ID']['input'];
  input: Book2goInput;
};


export type MutationBookThirdPartyRiderArgs = {
  contactPersonContactNo: Scalars['String']['input'];
  contactPersonFirstName: Scalars['String']['input'];
  contactPersonLastName: Scalars['String']['input'];
  courier: Scalars['String']['input'];
  dropOffLocationId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  lateDispatchReason?: InputMaybe<Scalars['String']['input']>;
  lateReason?: InputMaybe<Scalars['String']['input']>;
  pickupLatitude?: InputMaybe<Scalars['Decimal']['input']>;
  pickupLocationName?: InputMaybe<Scalars['String']['input']>;
  pickupLongitude?: InputMaybe<Scalars['Decimal']['input']>;
  pickupRemarks?: InputMaybe<Scalars['String']['input']>;
  timeDelivered?: InputMaybe<Scalars['DateTime']['input']>;
  timeDispatched?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MutationBrandCreateArgs = {
  input: BrandCreateInput;
};


export type MutationBrandGenerateDynamicLinkArgs = {
  id: Scalars['ID']['input'];
};


export type MutationBrandGroupCreateArgs = {
  input: BrandGroupCreateInput;
};


export type MutationBrandGroupDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationBrandGroupUpdateArgs = {
  id: Scalars['ID']['input'];
  input: BrandGroupUpdateInput;
};


export type MutationBrandTagCreateArgs = {
  input: BrandTagCreateInput;
};


export type MutationBrandTagDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationBrandTagUpdateArgs = {
  id: Scalars['ID']['input'];
  input: BrandTagCreateInput;
};


export type MutationBrandUpdateArgs = {
  id: Scalars['ID']['input'];
  input: BrandUpdateInput;
};


export type MutationCancelAutoBookingArgs = {
  orderId: Scalars['ID']['input'];
};


export type MutationCartCreateArgs = {
  input: CartCreateInput;
};


export type MutationCartLineAddNoteArgs = {
  cartLineId: Scalars['ID']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCartLineDeleteArgs = {
  cartId: Scalars['ID']['input'];
  lineIds: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationCartLinesAddArgs = {
  cartId: Scalars['ID']['input'];
  lines: Array<InputMaybe<CartLineInput>>;
};


export type MutationCartLinesUpdateArgs = {
  cartId: Scalars['ID']['input'];
  lines: Array<InputMaybe<CartLineInput>>;
};


export type MutationCategoryBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationCategoryClearMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationCategoryClearPrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationCategoryCreateArgs = {
  input: CategoryInput;
  parent?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCategoryDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCategoryGenerateDynamicLinkArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCategoryTranslateArgs = {
  id: Scalars['ID']['input'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationCategoryUpdateArgs = {
  id: Scalars['ID']['input'];
  input: CategoryInput;
};


export type MutationCategoryUpdateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationCategoryUpdatePrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationCheckoutAddPromoCodeArgs = {
  checkoutId: Scalars['ID']['input'];
  promoCode: Scalars['String']['input'];
};


export type MutationCheckoutAddressUpdateArgs = {
  address: AddressInput;
  checkoutId: Scalars['ID']['input'];
  distanceFromMall?: InputMaybe<Scalars['Decimal']['input']>;
  travelTime?: InputMaybe<TravelTimeInput>;
};


export type MutationCheckoutBillingAddressUpdateArgs = {
  billingAddress: AddressInput;
  checkoutId: Scalars['ID']['input'];
  travelTime?: InputMaybe<TravelTimeInput>;
};


export type MutationCheckoutClearMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationCheckoutClearPrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationCheckoutCompleteArgs = {
  checkoutId: Scalars['ID']['input'];
  paymentData?: InputMaybe<Scalars['JSONString']['input']>;
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  storeSource?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCheckoutCreateArgs = {
  input: CheckoutCreateInput;
  travelTime?: InputMaybe<TravelTimeInput>;
};


export type MutationCheckoutCustomerAttachArgs = {
  checkoutId: Scalars['ID']['input'];
  customerId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCheckoutCustomerDetachArgs = {
  checkoutId: Scalars['ID']['input'];
};


export type MutationCheckoutEmailUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
};


export type MutationCheckoutHasCutleryArgs = {
  checkoutId: Scalars['ID']['input'];
  hasCutlery: Scalars['Boolean']['input'];
};


export type MutationCheckoutLineAddNoteArgs = {
  checkoutLineId: Scalars['ID']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCheckoutLineDeleteArgs = {
  checkoutId: Scalars['ID']['input'];
  lineId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCheckoutLinesAddArgs = {
  checkoutId: Scalars['ID']['input'];
  lines: Array<InputMaybe<CheckoutLineInput>>;
};


export type MutationCheckoutLinesUpdateArgs = {
  checkoutId: Scalars['ID']['input'];
  lines: Array<InputMaybe<CheckoutLineInput>>;
};


export type MutationCheckoutPaymentCreateArgs = {
  checkoutId: Scalars['ID']['input'];
  input: PaymentInput;
};


export type MutationCheckoutRemovePromoCodeArgs = {
  checkoutId: Scalars['ID']['input'];
  promoCode: Scalars['String']['input'];
};


export type MutationCheckoutShippingAddressUpdateArgs = {
  checkoutId: Scalars['ID']['input'];
  distanceFromMall?: InputMaybe<Scalars['Decimal']['input']>;
  shippingAddress: AddressInput;
  travelTime?: InputMaybe<TravelTimeInput>;
};


export type MutationCheckoutShippingMethodUpdateArgs = {
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  shippingMethodId: Scalars['ID']['input'];
};


export type MutationCheckoutUpdateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationCheckoutUpdatePrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationChoiceCreateArgs = {
  input: ChoiceCreateInput;
};


export type MutationChoiceUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ChoiceUpdateInput;
};


export type MutationClearPcbCacheArgs = {
  password: Scalars['String']['input'];
};


export type MutationClusterBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationClusterCreateArgs = {
  input: ClusterCreateInput;
};


export type MutationClusterDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationClusterUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ClusterCreateInput;
};


export type MutationCollectionAddProductsArgs = {
  collectionId: Scalars['ID']['input'];
  products: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationCollectionBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationCollectionBulkPublishArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  isPublished: Scalars['Boolean']['input'];
};


export type MutationCollectionClearMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationCollectionClearPrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationCollectionCreateArgs = {
  input: CollectionCreateInput;
};


export type MutationCollectionDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCollectionGenerateDynamicLinkArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCollectionRemoveProductsArgs = {
  collectionId: Scalars['ID']['input'];
  products: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationCollectionReorderProductsArgs = {
  collectionId: Scalars['ID']['input'];
  moves: Array<InputMaybe<MoveProductInput>>;
};


export type MutationCollectionTranslateArgs = {
  id: Scalars['ID']['input'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationCollectionUpdateArgs = {
  id: Scalars['ID']['input'];
  input: CollectionInput;
};


export type MutationCollectionUpdateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationCollectionUpdatePrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationConfirmAccountArgs = {
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationConfirmEmailChangeArgs = {
  token: Scalars['String']['input'];
};


export type MutationContactUsEmailArgs = {
  input: ContactUsEmailInput;
};


export type MutationCouponActivateArgs = {
  couponId: Scalars['ID']['input'];
};


export type MutationCouponClaimArgs = {
  couponId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCouponCollectionCreateArgs = {
  input: CouponCollectionCreateInput;
};


export type MutationCouponCollectionDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCouponCollectionGenerateDynamicLinkArgs = {
  instanceId: Scalars['ID']['input'];
};


export type MutationCouponCollectionToggleActivateArgs = {
  activate: Scalars['Boolean']['input'];
  couponCollectionId: Scalars['ID']['input'];
};


export type MutationCouponCollectionToggleIsHiddenArgs = {
  instanceId: Scalars['ID']['input'];
};


export type MutationCouponCollectionUpdateArgs = {
  id: Scalars['ID']['input'];
  input: CouponCollectionUpdateInput;
};


export type MutationCouponCreateArgs = {
  input: CouponCreateInput;
};


export type MutationCouponDeactivateArgs = {
  couponId: Scalars['ID']['input'];
};


export type MutationCouponDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCouponGenerateDynamicLinkArgs = {
  id: Scalars['ID']['input'];
  requireAuth?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCouponManualReorderArgs = {
  couponOrderGroups?: InputMaybe<Array<InputMaybe<CouponManualReorderInput>>>;
};


export type MutationCouponPresetReorderArgs = {
  input: CouponPresetReorderInput;
};


export type MutationCouponRedeemArgs = {
  couponId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCouponRedemptionUpdateNotifStatusArgs = {
  couponRedemptionId?: InputMaybe<Scalars['ID']['input']>;
  notifStatus: CouponNotificationStatusEnum;
};


export type MutationCouponToggleIsFeaturedArgs = {
  couponId: Scalars['ID']['input'];
};


export type MutationCouponUpdateArgs = {
  id: Scalars['ID']['input'];
  input: CouponUpdateInput;
};


export type MutationCreateHomeLocationArgs = {
  homeLocationName: Scalars['String']['input'];
  latitude: Scalars['Decimal']['input'];
  longitude: Scalars['Decimal']['input'];
  remarks?: InputMaybe<Scalars['String']['input']>;
  warehouseId: Scalars['ID']['input'];
};


export type MutationCreatePauseReasonArgs = {
  pauseInput: CreatePauseReasonInput;
};


export type MutationCreateRemittanceManualAdjustmentArgs = {
  adjustedAmount: Scalars['Float']['input'];
  adjustmentReason: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationCreateRemittanceManualOverrideArgs = {
  orderId: Scalars['ID']['input'];
  overrideReason: Scalars['String']['input'];
  overrideStatus: RemittanceStatusEnum;
  receiptImage: Scalars['Upload']['input'];
};


export type MutationCreateWarehouseArgs = {
  input: WarehouseCreateInput;
};


export type MutationCustomerBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationCustomerCreateArgs = {
  input: UserCreateInput;
};


export type MutationCustomerDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCustomerEmailUpdateOtpGenerateArgs = {
  input: CustomerOtpGenerateInput;
};


export type MutationCustomerEmailUpdateOtpVerifyArgs = {
  input: CustomerOtpVerifyInput;
};


export type MutationCustomerOtpGenerateArgs = {
  input: CustomerOtpGenerateInput;
};


export type MutationCustomerOtpVerifyArgs = {
  input: CustomerOtpVerifyInput;
};


export type MutationCustomerReregisterArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCustomerSoftDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCustomerUpdateArgs = {
  id: Scalars['ID']['input'];
  input: CustomerInput;
};


export type MutationDeleteCreditCardArgs = {
  tokenId: Scalars['String']['input'];
};


export type MutationDeleteHomeLocationArgs = {
  homeLocationId: Scalars['ID']['input'];
};


export type MutationDeleteMetadataArgs = {
  id: Scalars['ID']['input'];
  keys: Array<Scalars['String']['input']>;
};


export type MutationDeletePrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  keys: Array<Scalars['String']['input']>;
};


export type MutationDeleteWarehouseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDigitalContentCreateArgs = {
  input: DigitalContentUploadInput;
  variantId: Scalars['ID']['input'];
};


export type MutationDigitalContentDeleteArgs = {
  variantId: Scalars['ID']['input'];
};


export type MutationDigitalContentUpdateArgs = {
  input: DigitalContentInput;
  variantId: Scalars['ID']['input'];
};


export type MutationDigitalContentUrlCreateArgs = {
  input: DigitalContentUrlCreateInput;
};


export type MutationDiscountUploadTemplateArgs = {
  input: DiscountUploadTemplateInput;
};


export type MutationDraftCouponCreateArgs = {
  input: DraftCouponCreateInput;
};


export type MutationDraftCouponUpdateArgs = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<DraftCouponUpdateInput>;
};


export type MutationDraftOrderBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDraftOrderCompleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDraftOrderCreateArgs = {
  input: DraftOrderCreateInput;
};


export type MutationDraftOrderDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDraftOrderLineDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDraftOrderLineUpdateArgs = {
  id: Scalars['ID']['input'];
  input: OrderLineInput;
};


export type MutationDraftOrderLinesBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDraftOrderLinesCreateArgs = {
  id: Scalars['ID']['input'];
  input: Array<InputMaybe<OrderLineCreateInput>>;
};


export type MutationDraftOrderUpdateArgs = {
  id: Scalars['ID']['input'];
  input: DraftOrderInput;
};


export type MutationDropOffLocationCreateArgs = {
  input: DropOffLocationCreateInput;
};


export type MutationDropOffLocationUpdateArgs = {
  id: Scalars['ID']['input'];
  input: DropOffLocationUpdateInput;
};


export type MutationEnableAllMallRemittanceArgs = {
  enable: Scalars['Boolean']['input'];
};


export type MutationEnableMallRemittanceArgs = {
  enable: Scalars['Boolean']['input'];
  mallId: Scalars['ID']['input'];
};


export type MutationEndServicePauseArgs = {
  pauseInput: EndServicePauseInput;
};


export type MutationExportCouponRedemptionsArgs = {
  input: ExportCouponRedemptionsInput;
};


export type MutationExportOrdersArgs = {
  input: ExportOrdersInput;
};


export type MutationExportProductsArgs = {
  input: ExportProductsInput;
};


export type MutationExportRemittanceOrdersArgs = {
  input: ExportRemittanceOrdersInput;
};


export type MutationExportSaleErrorVariantsArgs = {
  input: ExportSaleErrorVariantsInput;
};


export type MutationExportStoreOrdersArgs = {
  input: ExportStoreOrdersInput;
};


export type MutationFirebaseDetailsUpdateArgs = {
  input: FirebaseDetailsInput;
};


export type MutationFollowBrandArgs = {
  id: Scalars['ID']['input'];
};


export type MutationFreshdeskDetailsUpdateArgs = {
  input: FreshdeskDetailsInput;
};


export type MutationGenerateRemittanceIdArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationGiftCardActivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGiftCardCreateArgs = {
  input: GiftCardCreateInput;
};


export type MutationGiftCardDeactivateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGiftCardUpdateArgs = {
  id: Scalars['ID']['input'];
  input: GiftCardUpdateInput;
};


export type MutationHidePauseReasonArgs = {
  reasonInput: HidePauseReasonInput;
};


export type MutationHomepageCollectionUpdateArgs = {
  collection?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationInvoiceCreateArgs = {
  input: InvoiceCreateInput;
  orderId: Scalars['ID']['input'];
};


export type MutationInvoiceDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceRequestArgs = {
  number?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
};


export type MutationInvoiceRequestDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceSendEmailArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInvoiceUpdateArgs = {
  id: Scalars['ID']['input'];
  input: UpdateInvoiceInput;
};


export type MutationMallCreateArgs = {
  input: MallCreateInput;
};


export type MutationMallUpdateArgs = {
  id: Scalars['ID']['input'];
  input: MallUpdateInput;
};


export type MutationMarkRemittanceAsPaymentCollectedArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  isPaymentCollected: Scalars['Boolean']['input'];
};


export type MutationMenuBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationMenuCreateArgs = {
  input: MenuCreateInput;
};


export type MutationMenuDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMenuItemBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationMenuItemCreateArgs = {
  input: MenuItemCreateInput;
};


export type MutationMenuItemDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMenuItemMoveArgs = {
  menu: Scalars['ID']['input'];
  moves: Array<InputMaybe<MenuItemMoveInput>>;
};


export type MutationMenuItemTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationMenuItemUpdateArgs = {
  id: Scalars['ID']['input'];
  input: MenuItemInput;
};


export type MutationMenuUpdateArgs = {
  id: Scalars['ID']['input'];
  input: MenuInput;
};


export type MutationMobileOtpGenerateArgs = {
  input: MobileOtpGenerateInput;
};


export type MutationMobileOtpResetPasswordArgs = {
  confirmPassword: Scalars['String']['input'];
  mobileOtp: Scalars['ID']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationMobileOtpVerifyArgs = {
  id: Scalars['ID']['input'];
  pin: Scalars['String']['input'];
};


export type MutationOrderAddNoteArgs = {
  input: OrderAddNoteInput;
  order: Scalars['ID']['input'];
};


export type MutationOrderAssignRiderArgs = {
  courier?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isRider3pl?: InputMaybe<Scalars['Boolean']['input']>;
  lateDispatchReason?: InputMaybe<Scalars['String']['input']>;
  lateReason?: InputMaybe<Scalars['String']['input']>;
  rider3plContactNo?: InputMaybe<Scalars['String']['input']>;
  rider3plFirstName?: InputMaybe<Scalars['String']['input']>;
  rider3plLastName?: InputMaybe<Scalars['String']['input']>;
  riderId?: InputMaybe<Scalars['ID']['input']>;
  timeDelivered?: InputMaybe<Scalars['DateTime']['input']>;
  timeDispatched?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MutationOrderBulkCancelArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationOrderCancelArgs = {
  cancelReason: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  latitude?: InputMaybe<Scalars['Decimal']['input']>;
  longitude?: InputMaybe<Scalars['Decimal']['input']>;
};


export type MutationOrderCancelGrabExpressArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOrderCancelPandagoAutoArgs = {
  cancelReason: Scalars['String']['input'];
  orderId: Scalars['ID']['input'];
};


export type MutationOrderCaptureArgs = {
  amount: Scalars['PositiveDecimal']['input'];
  id: Scalars['ID']['input'];
};


export type MutationOrderClearMetaArgs = {
  input: MetaPath;
  token: Scalars['UUID']['input'];
};


export type MutationOrderClearPrivateMetaArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationOrderFulfillArgs = {
  input: OrderFulfillInput;
  order?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationOrderFulfillmentCancelArgs = {
  id: Scalars['ID']['input'];
  input: FulfillmentCancelInput;
};


export type MutationOrderFulfillmentClearMetaArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationOrderFulfillmentClearPrivateMetaArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationOrderFulfillmentRemarksArgs = {
  id: Scalars['ID']['input'];
  remarks: Scalars['String']['input'];
};


export type MutationOrderFulfillmentUpdateMetaArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationOrderFulfillmentUpdatePrivateMetaArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationOrderFulfillmentUpdateTrackingArgs = {
  id: Scalars['ID']['input'];
  input: FulfillmentUpdateTrackingInput;
};


export type MutationOrderImageCreateArgs = {
  alt?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['Upload']['input'];
  order: Scalars['ID']['input'];
};


export type MutationOrderMarkAsCompletedArgs = {
  id: Scalars['ID']['input'];
  imageId?: InputMaybe<Scalars['ID']['input']>;
  lateReason?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Decimal']['input']>;
  longitude?: InputMaybe<Scalars['Decimal']['input']>;
  otherReason?: InputMaybe<Scalars['String']['input']>;
  reason: CompletedReasonsEnum;
};


export type MutationOrderMarkAsPackedArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOrderMarkAsPaidArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOrderMarkAsReadyToShipArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOrderMarkAsShippedArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOrderRefundArgs = {
  amount: Scalars['PositiveDecimal']['input'];
  id: Scalars['ID']['input'];
};


export type MutationOrderReturnToFcArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOrderRiderArrivedArgs = {
  id: Scalars['ID']['input'];
  latitude?: InputMaybe<Scalars['Decimal']['input']>;
  longitude?: InputMaybe<Scalars['Decimal']['input']>;
};


export type MutationOrderRiderDispatchAssignOrdersArgs = {
  orderIds: Array<InputMaybe<Scalars['String']['input']>>;
  riderId: Scalars['ID']['input'];
};


export type MutationOrderRiderDispatchSearchAndValidationArgs = {
  orderCodes: Array<InputMaybe<Scalars['String']['input']>>;
  riderId: Scalars['ID']['input'];
};


export type MutationOrderUpdateArgs = {
  id: Scalars['ID']['input'];
  input: OrderUpdateInput;
};


export type MutationOrderUpdateDropOffLocationArgs = {
  dropOffLocation: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationOrderUpdateMetaArgs = {
  input: MetaInput;
  token: Scalars['UUID']['input'];
};


export type MutationOrderUpdatePrivateMetaArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationOrderUpdateShippingArgs = {
  input?: InputMaybe<OrderUpdateShippingInput>;
  order: Scalars['ID']['input'];
};


export type MutationOrderUpdateShippingLabelArgs = {
  awbNo?: InputMaybe<Scalars['String']['input']>;
  courier: Scalars['String']['input'];
  dispatchNo: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  specialNotes?: InputMaybe<Scalars['String']['input']>;
};


export type MutationOrderVoidArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOtpGenerateArgs = {
  input: OtpGenerateInput;
};


export type MutationOtpVerifyArgs = {
  input: OtpVerifyInput;
};


export type MutationOverrideItemFromCartArgs = {
  cartId: Scalars['ID']['input'];
  line: CartLineInput;
};


export type MutationPageBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationPageBulkPublishArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  isPublished: Scalars['Boolean']['input'];
};


export type MutationPageCreateArgs = {
  input: PageInput;
};


export type MutationPageDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPageTranslateArgs = {
  id: Scalars['ID']['input'];
  input: PageTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationPageUpdateArgs = {
  id: Scalars['ID']['input'];
  input: PageInput;
};


export type MutationPasswordChangeArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationPaymentCaptureArgs = {
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  paymentId: Scalars['ID']['input'];
};


export type MutationPaymentInitializeArgs = {
  gateway: Scalars['String']['input'];
  paymentData?: InputMaybe<Scalars['JSONString']['input']>;
};


export type MutationPaymentMethodUnlinkArgs = {
  tokenId: Scalars['String']['input'];
};


export type MutationPaymentRefundArgs = {
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  paymentId: Scalars['ID']['input'];
};


export type MutationPaymentVoidArgs = {
  paymentId: Scalars['ID']['input'];
};


export type MutationPermissionGroupCreateArgs = {
  input: PermissionGroupCreateInput;
};


export type MutationPermissionGroupDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPermissionGroupUpdateArgs = {
  id: Scalars['ID']['input'];
  input: PermissionGroupUpdateInput;
};


export type MutationPluginUpdateArgs = {
  id: Scalars['ID']['input'];
  input: PluginUpdateInput;
};


export type MutationProductBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationProductBulkPublishArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  isPublished: Scalars['Boolean']['input'];
};


export type MutationProductClearMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationProductClearPrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationProductCreateArgs = {
  input: ProductCreateInput;
};


export type MutationProductDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductGenerateDynamicLinkArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductImageBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationProductImageCreateArgs = {
  input: ProductImageCreateInput;
};


export type MutationProductImageCreateUrlArgs = {
  input: ProductImageCreateUrlInput;
};


export type MutationProductImageDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductImageReorderArgs = {
  imagesIds: Array<InputMaybe<Scalars['ID']['input']>>;
  productId: Scalars['ID']['input'];
};


export type MutationProductImageResizeArgs = {
  productIds: Array<InputMaybe<Scalars['ID']['input']>>;
  specialKey: Scalars['String']['input'];
};


export type MutationProductImageUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ProductImageUpdateInput;
};


export type MutationProductSetAvailabilityForPurchaseArgs = {
  isAvailable: Scalars['Boolean']['input'];
  productId: Scalars['ID']['input'];
  startDate?: InputMaybe<Scalars['Date']['input']>;
};


export type MutationProductStatusBulkUpdateArgs = {
  brand?: InputMaybe<Scalars['ID']['input']>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  productStatus: ProductStatusEnum;
};


export type MutationProductTranslateArgs = {
  id: Scalars['ID']['input'];
  input: TranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationProductTypeBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationProductTypeClearMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationProductTypeClearPrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationProductTypeCreateArgs = {
  input: ProductTypeInput;
};


export type MutationProductTypeDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProductTypeReorderAttributesArgs = {
  moves: Array<InputMaybe<ReorderInput>>;
  productTypeId: Scalars['ID']['input'];
  type: AttributeTypeEnum;
};


export type MutationProductTypeUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ProductTypeInput;
};


export type MutationProductTypeUpdateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationProductTypeUpdatePrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationProductUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ProductUpdateInput;
};


export type MutationProductUpdateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationProductUpdatePrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationProductUploadTemplateArgs = {
  input: ProductUploadTemplateInput;
};


export type MutationProductVariantBulkCreateArgs = {
  product: Scalars['ID']['input'];
  variants: Array<InputMaybe<ProductVariantBulkCreateInput>>;
};


export type MutationProductVariantBulkDeleteArgs = {
  brand?: InputMaybe<Scalars['ID']['input']>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationProductVariantClearMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationProductVariantClearPrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationProductVariantCreateArgs = {
  input: ProductVariantCreateInput;
};


export type MutationProductVariantDeleteArgs = {
  brand?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationProductVariantReorderArgs = {
  moves: Array<InputMaybe<ReorderInput>>;
  productId: Scalars['ID']['input'];
};


export type MutationProductVariantSetDefaultArgs = {
  productId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};


export type MutationProductVariantStocksCreateArgs = {
  stocks: Array<StockInput>;
  variantId: Scalars['ID']['input'];
};


export type MutationProductVariantStocksDeleteArgs = {
  variantId: Scalars['ID']['input'];
  warehouseIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationProductVariantStocksUpdateArgs = {
  stocks: Array<StockInput>;
  variantId: Scalars['ID']['input'];
};


export type MutationProductVariantTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationProductVariantUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ProductVariantInput;
};


export type MutationProductVariantUpdateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationProductVariantUpdatePrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationProductVisibilityBulkUnpublishArgs = {
  input: Array<InputMaybe<ProductVisibilityUnpublishInput>>;
};


export type MutationProductVisibilityBulkUpdateArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  isVisible: Scalars['Boolean']['input'];
  republishProductAt?: InputMaybe<Scalars['DateTime']['input']>;
  tenant?: InputMaybe<Scalars['ID']['input']>;
  unpublishIndefinitely?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationRackCreateArgs = {
  input: RackCreateInput;
};


export type MutationRackDeleteArgs = {
  rackId: Scalars['ID']['input'];
};


export type MutationRackUpdateArgs = {
  id: Scalars['ID']['input'];
  input: RackCreateInput;
};


export type MutationRefreshGrabExpressStatusArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRefreshPandagoAutoStatusArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemittanceCancelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemittanceUploadReceiptArgs = {
  id: Scalars['ID']['input'];
  receiptImage: Scalars['Upload']['input'];
};


export type MutationRequestEmailChangeArgs = {
  newEmail: Scalars['String']['input'];
  password: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};


export type MutationRequestPasswordResetArgs = {
  email: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};


export type MutationReservationCancelArgs = {
  reservationId: Scalars['ID']['input'];
};


export type MutationReservationCreateArgs = {
  input: ReservationCreateInput;
};


export type MutationReservationUpdateStatusArgs = {
  cancelReason?: InputMaybe<Scalars['String']['input']>;
  reservationId: Scalars['ID']['input'];
  reservationStatus: ReservationStatusEnum;
};


export type MutationRiderCollectionTotalArgs = {
  dateRange: DateRangeInput;
  verticalType: StoreTypeEnum;
};


export type MutationSaleBulkActivateArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationSaleBulkDeactivateArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationSaleBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationSaleCataloguesAddArgs = {
  id: Scalars['ID']['input'];
  input: SaleCatalogueInput;
};


export type MutationSaleCataloguesRemoveArgs = {
  id: Scalars['ID']['input'];
  input: SaleCatalogueInput;
};


export type MutationSaleCreateArgs = {
  input: SaleInput;
};


export type MutationSaleDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSaleTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationSaleUpdateArgs = {
  id: Scalars['ID']['input'];
  input: SaleInput;
};


export type MutationSearchHistoryDeleteArgs = {
  searchQuery: Scalars['String']['input'];
};


export type MutationSearchResultsRateArgs = {
  queryId: Scalars['String']['input'];
  ratingType: SearchRatingTypeEnum;
  resultId: Scalars['String']['input'];
  searchRating: SearchResponseRatingEnum;
};


export type MutationSellerCreateArgs = {
  input: StaffCreateInput;
};


export type MutationServiceAccountClearPrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationServiceAccountCreateArgs = {
  input: ServiceAccountInput;
};


export type MutationServiceAccountDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationServiceAccountTokenCreateArgs = {
  input: ServiceAccountTokenInput;
};


export type MutationServiceAccountTokenDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationServiceAccountUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ServiceAccountInput;
};


export type MutationServiceAccountUpdatePrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationSetCouponsToCollectionArgs = {
  coupons: SetCouponsToCollectionInput;
  instanceId: Scalars['ID']['input'];
};


export type MutationSetDailyRemittanceConfigArgs = {
  input: RemittanceConfigUpdateInput;
  mallId: Scalars['ID']['input'];
};


export type MutationSetMallAutoBookingConfigArgs = {
  input: AutobookingConfigUpdateInput;
  mallId: Scalars['ID']['input'];
};


export type MutationSetPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationSetProductVisibilityArgs = {
  input: ProductVisibilityInput;
};


export type MutationShipmentCreateArgs = {
  input: ShipmentCreateInput;
};


export type MutationShipmentUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ShipmentUpdateInput;
};


export type MutationShippingPriceBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationShippingPriceCreateArgs = {
  input: ShippingPriceInput;
};


export type MutationShippingPriceDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationShippingPriceTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationShippingPriceUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ShippingPriceInput;
};


export type MutationShippingZoneBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationShippingZoneCreateArgs = {
  input: ShippingZoneCreateInput;
};


export type MutationShippingZoneDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationShippingZoneUpdateArgs = {
  id: Scalars['ID']['input'];
  input: ShippingZoneUpdateInput;
};


export type MutationShopAddressUpdateArgs = {
  input?: InputMaybe<AddressInput>;
};


export type MutationShopDomainUpdateArgs = {
  input?: InputMaybe<SiteDomainInput>;
};


export type MutationShopSettingsTranslateArgs = {
  input: ShopSettingsTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationShopSettingsUpdateArgs = {
  input: ShopSettingsInput;
};


export type MutationShopifyBrandSyncArgs = {
  brand: Scalars['ID']['input'];
};


export type MutationShopifyBrandTagAddArgs = {
  brandId: Scalars['ID']['input'];
  kind: ShopifyTagEnum;
  tag: Scalars['String']['input'];
};


export type MutationShopifyBrandTagRemoveArgs = {
  brandId: Scalars['ID']['input'];
  kind: ShopifyTagEnum;
  tag: Scalars['String']['input'];
};


export type MutationShopifyBrandTagUpdateArgs = {
  brandId: Scalars['ID']['input'];
  kind: ShopifyTagEnum;
  newTag: Scalars['String']['input'];
  targetTag: Scalars['String']['input'];
};


export type MutationShopifyCredentialsCheckArgs = {
  input: ShopifyCredentialsCheckInput;
};


export type MutationShopsmManualSyncArgs = {
  brandId: Scalars['ID']['input'];
  customCollectionIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  smartCollectionIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationSmopCustomerCreateArgs = {
  input: SmopCustomerInput;
  mobileOtp: Scalars['ID']['input'];
};


export type MutationSmopCustomerLoginArgs = {
  contactNo?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  mobileOtp: Scalars['ID']['input'];
};


export type MutationSmopCustomerMobileOrEmailUpdateArgs = {
  contactNo?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  mobileOtp: Scalars['ID']['input'];
};


export type MutationStaffBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationStaffCreateArgs = {
  input: StaffCreateInput;
};


export type MutationStaffDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationStaffNotificationRecipientCreateArgs = {
  input: StaffNotificationRecipientInput;
};


export type MutationStaffNotificationRecipientDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationStaffNotificationRecipientUpdateArgs = {
  id: Scalars['ID']['input'];
  input: StaffNotificationRecipientInput;
};


export type MutationStaffUpdateArgs = {
  id: Scalars['ID']['input'];
  input: StaffUpdateInput;
};


export type MutationStartServicePauseArgs = {
  pauseInput: StartServicePauseInput;
};


export type MutationStoreOrderLineDeleteArgs = {
  lineIds: Array<InputMaybe<Scalars['ID']['input']>>;
  storeOrderId: Scalars['ID']['input'];
};


export type MutationStoreOrderLineUpdateQuantityArgs = {
  lines: Array<InputMaybe<StoreOrderLineUpdateQuantityInput>>;
  storeOrderId: Scalars['ID']['input'];
};


export type MutationStoreOrderLinesAddArgs = {
  lines: Array<InputMaybe<StoreOrderLineInput>>;
  storeOrderId: Scalars['ID']['input'];
  tenantId: Scalars['ID']['input'];
};


export type MutationStoreOrderMarkAsValidForPackingArgs = {
  id: Scalars['ID']['input'];
  parcelNo: Scalars['String']['input'];
};


export type MutationStoreOrderOpsAdminScanParcelArgs = {
  id: Scalars['ID']['input'];
  parcelNo: Scalars['String']['input'];
};


export type MutationStoreOrderParcelImageUploadArgs = {
  image: Scalars['Upload']['input'];
  storeOrder: Scalars['ID']['input'];
};


export type MutationStoreOrderPickLineArgs = {
  lineIds: Array<InputMaybe<Scalars['ID']['input']>>;
  status: OrderLineStatusEnum;
  storeOrderId: Scalars['ID']['input'];
};


export type MutationStoreOrderReceiptImageUploadArgs = {
  image: Scalars['Upload']['input'];
  storeOrder: Scalars['ID']['input'];
};


export type MutationStoreOrderRevertFromCancelledArgs = {
  id: Scalars['ID']['input'];
  revertReason: Scalars['String']['input'];
};


export type MutationStoreOrderRunnerDropOffArgs = {
  id: Scalars['ID']['input'];
};


export type MutationStoreOrderRunnerScanParcelArgs = {
  id: Scalars['ID']['input'];
  parcelNo: Scalars['String']['input'];
};


export type MutationStoreOrderSetParcelNoArgs = {
  id: Scalars['ID']['input'];
  parcelNo: Scalars['String']['input'];
};


export type MutationTaskAreaAddStoresArgs = {
  input: TaskAreadAddRemoveStoresInput;
};


export type MutationTaskAreaCreateArgs = {
  input: TaskAreaCreateInput;
};


export type MutationTaskAreaRemoveStoresArgs = {
  input: TaskAreadAddRemoveStoresInput;
};


export type MutationTaskAreaUpdateArgs = {
  id: Scalars['ID']['input'];
  input: TaskAreaUpdateInput;
};


export type MutationTemplateCreateArgs = {
  input: TemplateCreateInput;
};


export type MutationTemplateDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationTemplateDuplicateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationTemplateFinalizeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationTemplateRenameArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationTemplateUpdateArgs = {
  id: Scalars['ID']['input'];
  input: TemplateUpdateInput;
};


export type MutationTenantCreateArgs = {
  input: TenantCreateInput;
};


export type MutationTenantEnableReservationArgs = {
  tenantId: Scalars['ID']['input'];
  withReservation: Scalars['Boolean']['input'];
};


export type MutationTenantPromotionalRibbonUpdateArgs = {
  id: Scalars['ID']['input'];
  input: TenantPromotionalRibbonInput;
};


export type MutationTenantSetIsPausableArgs = {
  pauseInput: TenantsSetIsPausableInput;
};


export type MutationTenantUpdateArgs = {
  id: Scalars['ID']['input'];
  input: TenantUpdateInput;
};


export type MutationTokenCreateArgs = {
  contactNo?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};


export type MutationTokenRefreshArgs = {
  csrfToken?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationTokenVerifyArgs = {
  token: Scalars['String']['input'];
};


export type MutationUnassignRunnerFromTaskAreasArgs = {
  runnerId: Scalars['ID']['input'];
  taskAreaIds: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationUnassignWarehouseShippingZoneArgs = {
  id: Scalars['ID']['input'];
  shippingZoneIds: Array<Scalars['ID']['input']>;
};


export type MutationUnfollowBrandArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdate2goShipmentStatusArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateBrandStatusArgs = {
  id: Scalars['ID']['input'];
  status: SmopStatusEnum;
};


export type MutationUpdateHomeLocationArgs = {
  homeLocationId: Scalars['ID']['input'];
  homeLocationName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Decimal']['input']>;
  longitude?: InputMaybe<Scalars['Decimal']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateMallOrderTimeframeArgs = {
  endTime?: InputMaybe<Scalars['Time']['input']>;
  mallId: Scalars['ID']['input'];
  shippingMethodId: Scalars['ID']['input'];
  startTime?: InputMaybe<Scalars['Time']['input']>;
};


export type MutationUpdateMallStatusArgs = {
  id: Scalars['ID']['input'];
  status: SmopStatusEnum;
};


export type MutationUpdateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: Array<MetadataInput>;
};


export type MutationUpdateOrderFulfillmentRemarksArgs = {
  id: Scalars['ID']['input'];
  remarks: Scalars['String']['input'];
};


export type MutationUpdateOrderStatusArgs = {
  id: Scalars['ID']['input'];
  overrideReason?: InputMaybe<Scalars['String']['input']>;
  smopStatus: SmopOrderStatusEnum;
};


export type MutationUpdatePrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: Array<MetadataInput>;
};


export type MutationUpdateRemittanceManualAdjustmentStatusArgs = {
  id: Scalars['ID']['input'];
  status: RemittanceManualAdjustmentStatusEnum;
};


export type MutationUpdateSaleStatusArgs = {
  id: Scalars['ID']['input'];
  status: DiscountStatusEnum;
};


export type MutationUpdateServiceMallArgs = {
  input?: InputMaybe<ServiceMallInput>;
  travelTime?: InputMaybe<TravelTimeInput>;
};


export type MutationUpdateStoreOrderStatusArgs = {
  cancelReason?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  overrideReason?: InputMaybe<Scalars['String']['input']>;
  smopStatus: SmopOrderStatusEnum;
};


export type MutationUpdateTenantStatusArgs = {
  id: Scalars['ID']['input'];
  status: SmopStatusEnum;
};


export type MutationUpdateVoucherGroupStatusArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  status: DiscountStatusEnum;
};


export type MutationUpdateVoucherStatusArgs = {
  id: Scalars['ID']['input'];
  status: DiscountStatusEnum;
};


export type MutationUpdateWarehouseArgs = {
  id: Scalars['ID']['input'];
  input: WarehouseUpdateInput;
};


export type MutationUserAvatarUpdateArgs = {
  image: Scalars['Upload']['input'];
};


export type MutationUserBulkBlockArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  status: LockStatus;
};


export type MutationUserBulkSetActiveArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  isActive: Scalars['Boolean']['input'];
};


export type MutationUserClearMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationUserClearPrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaPath;
};


export type MutationUserUpdateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationUserUpdatePrivateMetadataArgs = {
  id: Scalars['ID']['input'];
  input: MetaInput;
};


export type MutationVariantImageAssignArgs = {
  imageId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};


export type MutationVariantImageUnassignArgs = {
  imageId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
};


export type MutationVoucherAddBrandGroupsArgs = {
  id: Scalars['ID']['input'];
  input: VoucherBrandGroupsInput;
};


export type MutationVoucherAddCustomersArgs = {
  id: Scalars['ID']['input'];
  input: VoucherEligibleCustomerInput;
};


export type MutationVoucherAddMallsArgs = {
  id: Scalars['ID']['input'];
  input: VoucherMallInput;
};


export type MutationVoucherBulkActivateArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationVoucherBulkCreateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  multiplier: Scalars['Int']['input'];
  voucherDetails?: InputMaybe<VoucherInput>;
};


export type MutationVoucherBulkDeactivateArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationVoucherBulkDeleteArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationVoucherCataloguesAddArgs = {
  id: Scalars['ID']['input'];
  input: VoucherCatalogueInput;
};


export type MutationVoucherCataloguesRemoveArgs = {
  id: Scalars['ID']['input'];
  input: VoucherCatalogueInput;
};


export type MutationVoucherCreateArgs = {
  input: VoucherInput;
};


export type MutationVoucherDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationVoucherGroupCreateArgs = {
  input: VoucherGroupInput;
};


export type MutationVoucherGroupDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationVoucherImageCreateArgs = {
  input: VoucherImageCreateInput;
};


export type MutationVoucherImageDeleteArgs = {
  voucher: Scalars['ID']['input'];
};


export type MutationVoucherRemoveCustomersArgs = {
  id: Scalars['ID']['input'];
  input: VoucherEligibleCustomerInput;
};


export type MutationVoucherRemoveMallsArgs = {
  id: Scalars['ID']['input'];
  input: VoucherMallInput;
};


export type MutationVoucherTenantBulkUpdateArgs = {
  voucherTenants?: InputMaybe<Array<InputMaybe<VoucherTenantBulkUpdateInput>>>;
};


export type MutationVoucherTenantDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationVoucherTenantUpdateArgs = {
  id: Scalars['ID']['input'];
  input: VoucherTenantSubsidyInput;
};


export type MutationVoucherTranslateArgs = {
  id: Scalars['ID']['input'];
  input: NameTranslationInput;
  languageCode: LanguageCodeEnum;
};


export type MutationVoucherUpdateArgs = {
  id: Scalars['ID']['input'];
  input: VoucherInput;
};


export type MutationWebhookCreateArgs = {
  input: WebhookCreateInput;
};


export type MutationWebhookDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationWebhookUpdateArgs = {
  id: Scalars['ID']['input'];
  input: WebhookUpdateInput;
};


export type MutationWishlistAddProductArgs = {
  mallId?: InputMaybe<Scalars['ID']['input']>;
  productId: Scalars['ID']['input'];
};


export type MutationWishlistAddVariantArgs = {
  variantId: Scalars['ID']['input'];
};


export type MutationWishlistRemoveProductArgs = {
  mallId?: InputMaybe<Scalars['ID']['input']>;
  productId: Scalars['ID']['input'];
};


export type MutationWishlistRemoveVariantArgs = {
  variantId: Scalars['ID']['input'];
};

export type NameTranslationInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Navigation = {
  __typename?: 'Navigation';
  main?: Maybe<Menu>;
  secondary?: Maybe<Menu>;
};

export enum NavigationType {
  Main = 'MAIN',
  Secondary = 'SECONDARY'
}

export type Node = {
  id: Scalars['ID']['output'];
};

export type Otp = Node & {
  __typename?: 'OTP';
  attempt?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateGenerated?: Maybe<Scalars['DateTime']['output']>;
  dateVerified?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  pin?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OtpStatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type OtpCountableConnection = {
  __typename?: 'OTPCountableConnection';
  edges: Array<OtpCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type OtpCountableEdge = {
  __typename?: 'OTPCountableEdge';
  cursor: Scalars['String']['output'];
  node: Otp;
};

export type OtpError = {
  __typename?: 'OTPError';
  code: OtpErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum OtpErrorCode {
  Blocked = 'BLOCKED',
  Expired = 'EXPIRED',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  TooManyResend = 'TOO_MANY_RESEND',
  Unique = 'UNIQUE',
  WrongPin = 'WRONG_PIN'
}

export type OtpGenerate = {
  __typename?: 'OTPGenerate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  oTP?: Maybe<OtpPrivate>;
  otp?: Maybe<OtpPrivate>;
  otpErrors: Array<OtpError>;
};

export type OtpGenerateInput = {
  user: Scalars['ID']['input'];
};

export type OtpInput = {
  user?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type OtpPrivate = Node & {
  __typename?: 'OTPPrivate';
  attempt?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateGenerated?: Maybe<Scalars['DateTime']['output']>;
  dateVerified?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  status?: Maybe<OtpStatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export enum OtpStatusEnum {
  Exp = 'EXP',
  Unv = 'UNV',
  Ver = 'VER'
}

export type OtpVerify = {
  __typename?: 'OTPVerify';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  otp?: Maybe<OtpPrivate>;
  otpErrors: Array<OtpError>;
  user?: Maybe<User>;
};

export type OtpVerifyInput = {
  pin: Scalars['String']['input'];
  user: Scalars['ID']['input'];
};

export type ObjectWithMetadata = {
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
};

export type Order = Node & ObjectWithMetadata & {
  __typename?: 'Order';
  actions: Array<Maybe<OrderAction>>;
  aging?: Maybe<Scalars['String']['output']>;
  availableShippingMethods?: Maybe<Array<Maybe<ShippingMethod>>>;
  awbNo?: Maybe<Scalars['String']['output']>;
  billingAddress?: Maybe<Address>;
  bin?: Maybe<Bin>;
  binCode?: Maybe<Scalars['String']['output']>;
  bookingFailedReason?: Maybe<Scalars['String']['output']>;
  bookingTaskId?: Maybe<Scalars['String']['output']>;
  bookingTime?: Maybe<Scalars['DateTime']['output']>;
  canFinalize: Scalars['Boolean']['output'];
  cancelReason?: Maybe<Scalars['String']['output']>;
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  canceledBy?: Maybe<User>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  completedBy?: Maybe<User>;
  completedOtherReason?: Maybe<Scalars['String']['output']>;
  completedReason?: Maybe<Scalars['String']['output']>;
  courier?: Maybe<Scalars['String']['output']>;
  created: Scalars['DateTime']['output'];
  customerNote: Scalars['String']['output'];
  deliveryCourier?: Maybe<DeliveryCourier>;
  discount?: Maybe<Money>;
  discountName?: Maybe<Scalars['String']['output']>;
  dispatchNo?: Maybe<Scalars['String']['output']>;
  displayGrossPrices: Scalars['Boolean']['output'];
  distanceFromMall?: Maybe<Scalars['Float']['output']>;
  dropOffLocation?: Maybe<DropOffLocation>;
  dwellTime?: Maybe<Scalars['String']['output']>;
  earliestStoreOrderStatus?: Maybe<SmopOrderStatusEnum>;
  events?: Maybe<Array<Maybe<OrderEvent>>>;
  firstLevelCategory?: Maybe<Array<Maybe<ShippingLabel>>>;
  forRescheduling?: Maybe<Scalars['Boolean']['output']>;
  fulfillments: Array<Maybe<Fulfillment>>;
  giftCards?: Maybe<Array<Maybe<GiftCard>>>;
  hasCutlery: Scalars['Boolean']['output'];
  heldTooLong?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<OrderImage>>>;
  invoices?: Maybe<Array<Maybe<Invoice>>>;
  isDeliveryTimeExceeded?: Maybe<Scalars['Boolean']['output']>;
  isMultiTenant?: Maybe<Scalars['Boolean']['output']>;
  isPaid?: Maybe<Scalars['Boolean']['output']>;
  isPaymentCollected?: Maybe<Scalars['Boolean']['output']>;
  isRider3pl: Scalars['Boolean']['output'];
  isShippingRequired: Scalars['Boolean']['output'];
  languageCode: Scalars['String']['output'];
  lateDeliveryReason?: Maybe<Scalars['String']['output']>;
  lateDispatchReason?: Maybe<Scalars['String']['output']>;
  lines: Array<Maybe<OrderLine>>;
  mall?: Maybe<Mall>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  number?: Maybe<Scalars['String']['output']>;
  onTime?: Maybe<Scalars['Boolean']['output']>;
  orderCode?: Maybe<Scalars['String']['output']>;
  orderFulfillmentRemarks?: Maybe<OrderEvent>;
  orderShopifyReference?: Maybe<Scalars['String']['output']>;
  parcelNo?: Maybe<Scalars['String']['output']>;
  paymentStatus?: Maybe<PaymentChargeStatusEnum>;
  paymentStatusDisplay?: Maybe<Scalars['String']['output']>;
  payments?: Maybe<Array<Maybe<Payment>>>;
  prepTooLong?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  remittanceLine?: Maybe<RemittanceLine>;
  remittanceManualAdjustmentAmount?: Maybe<Scalars['Float']['output']>;
  remittanceManualAdjustmentStatus?: Maybe<RemittanceManualAdjustmentStatusEnum>;
  remittanceManualAdjustmentTotalAmount?: Maybe<Scalars['Float']['output']>;
  remittanceManualAdjustments?: Maybe<Array<Maybe<OrderRemittanceManualAdjustment>>>;
  rider?: Maybe<User>;
  riderArrived?: Maybe<Scalars['Boolean']['output']>;
  riderArrivedAt?: Maybe<Scalars['DateTime']['output']>;
  shippedAt?: Maybe<Scalars['DateTime']['output']>;
  shippedBy?: Maybe<User>;
  shippingAddress?: Maybe<Address>;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingMethodName?: Maybe<Scalars['String']['output']>;
  shippingPrice?: Maybe<TaxedMoney>;
  shippingSchedule?: Maybe<Scalars['DateTime']['output']>;
  shopifyOrderCreated?: Maybe<Scalars['Boolean']['output']>;
  smopStatus?: Maybe<SmopOrderStatusEnum>;
  specialNotes?: Maybe<Scalars['String']['output']>;
  status: OrderStatus;
  statusDisplay?: Maybe<Scalars['String']['output']>;
  subOrders?: Maybe<Array<Maybe<StoreOrder>>>;
  subtotal?: Maybe<TaxedMoney>;
  targetTime?: Maybe<Scalars['String']['output']>;
  thirdPartyAwbCode?: Maybe<Scalars['String']['output']>;
  thirdPartyRider?: Maybe<ThirdPartyRider>;
  token: Scalars['String']['output'];
  total?: Maybe<TaxedMoney>;
  totalAdjustedAmount?: Maybe<Scalars['Float']['output']>;
  totalAuthorized?: Maybe<Money>;
  totalBalance: Money;
  totalCaptured?: Maybe<Money>;
  totalTime?: Maybe<Scalars['String']['output']>;
  trackingClientId: Scalars['String']['output'];
  translatedDiscountName?: Maybe<Scalars['String']['output']>;
  travelTime?: Maybe<TravelTime>;
  user?: Maybe<User>;
  userEmail?: Maybe<Scalars['String']['output']>;
  verticalType?: Maybe<OrderVerticalType>;
  voucher?: Maybe<Voucher>;
  weight?: Maybe<Weight>;
};

export enum OrderAction {
  Capture = 'CAPTURE',
  MarkAsPaid = 'MARK_AS_PAID',
  Refund = 'REFUND',
  Void = 'VOID'
}

export type OrderAddNote = {
  __typename?: 'OrderAddNote';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderAddNoteInput = {
  message: Scalars['String']['input'];
};

export type OrderAssignRider = {
  __typename?: 'OrderAssignRider';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
  rider?: Maybe<User>;
};

export enum OrderBehavior {
  CaseInsensitive = 'CASE_INSENSITIVE',
  CaseSensitive = 'CASE_SENSITIVE'
}

export type OrderBulkCancel = {
  __typename?: 'OrderBulkCancel';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
};

export type OrderCancel = {
  __typename?: 'OrderCancel';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderCancelGrabExpress = {
  __typename?: 'OrderCancelGrabExpress';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderCancelPandagoAuto = {
  __typename?: 'OrderCancelPandagoAuto';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderCapture = {
  __typename?: 'OrderCapture';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderClearMeta = {
  __typename?: 'OrderClearMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
};

export type OrderClearPrivateMeta = {
  __typename?: 'OrderClearPrivateMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
};

export type OrderCountableConnection = {
  __typename?: 'OrderCountableConnection';
  edges: Array<OrderCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type OrderCountableEdge = {
  __typename?: 'OrderCountableEdge';
  cursor: Scalars['String']['output'];
  node: Order;
};

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderDraftFilterInput = {
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type OrderError = {
  __typename?: 'OrderError';
  code: OrderErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  orderLine?: Maybe<Scalars['ID']['output']>;
  warehouse?: Maybe<Scalars['ID']['output']>;
};

export enum OrderErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  CannotCancelFulfillment = 'CANNOT_CANCEL_FULFILLMENT',
  CannotCancelOrder = 'CANNOT_CANCEL_ORDER',
  CannotDelete = 'CANNOT_DELETE',
  CannotRefund = 'CANNOT_REFUND',
  CaptureInactivePayment = 'CAPTURE_INACTIVE_PAYMENT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  FulfillOrderLine = 'FULFILL_ORDER_LINE',
  GraphqlError = 'GRAPHQL_ERROR',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Invalid = 'INVALID',
  InvalidGrabToken = 'INVALID_GRAB_TOKEN',
  InvalidPandagoToken = 'INVALID_PANDAGO_TOKEN',
  InvalidRemittance = 'INVALID_REMITTANCE',
  NotEditable = 'NOT_EDITABLE',
  NotFound = 'NOT_FOUND',
  OrderNoShippingAddress = 'ORDER_NO_SHIPPING_ADDRESS',
  PaymentError = 'PAYMENT_ERROR',
  PaymentMissing = 'PAYMENT_MISSING',
  ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
  ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
  Required = 'REQUIRED',
  ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
  ShippingMethodRequired = 'SHIPPING_METHOD_REQUIRED',
  TaxError = 'TAX_ERROR',
  TpAwbInvalid = 'TP_AWB_INVALID',
  TpAwbNotFound = 'TP_AWB_NOT_FOUND',
  TpAwbRequired = 'TP_AWB_REQUIRED',
  TpAwbServerError = 'TP_AWB_SERVER_ERROR',
  TpAwbUnique = 'TP_AWB_UNIQUE',
  TpInvalidDeliveryType = 'TP_INVALID_DELIVERY_TYPE',
  UnabledToEdit = 'UNABLED_TO_EDIT',
  Unique = 'UNIQUE',
  VoidInactivePayment = 'VOID_INACTIVE_PAYMENT',
  ZeroQuantity = 'ZERO_QUANTITY'
}

export type OrderEvent = Node & {
  __typename?: 'OrderEvent';
  amount?: Maybe<Scalars['Float']['output']>;
  changeRemittanceManualAdjustmentStatus?: Maybe<OrderRemittanceManualAdjustmentEvent>;
  composedId?: Maybe<Scalars['String']['output']>;
  createRemittanceManualAdjustment?: Maybe<OrderRemittanceManualAdjustmentEvent>;
  date?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailType?: Maybe<OrderEventsEmailsEnum>;
  fulfilledItems?: Maybe<Array<Maybe<FulfillmentLine>>>;
  id: Scalars['ID']['output'];
  invoiceNumber?: Maybe<Scalars['String']['output']>;
  lines?: Maybe<Array<Maybe<OrderEventOrderLineObject>>>;
  message?: Maybe<Scalars['String']['output']>;
  orderNumber?: Maybe<Scalars['String']['output']>;
  oversoldItems?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  paymentGateway?: Maybe<Scalars['String']['output']>;
  paymentId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  referenceId3pl?: Maybe<Scalars['String']['output']>;
  type?: Maybe<OrderEventsEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  warehouse?: Maybe<Warehouse>;
};

export type OrderEventCountableConnection = {
  __typename?: 'OrderEventCountableConnection';
  edges: Array<OrderEventCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type OrderEventCountableEdge = {
  __typename?: 'OrderEventCountableEdge';
  cursor: Scalars['String']['output'];
  node: OrderEvent;
};

export type OrderEventOrderLineObject = {
  __typename?: 'OrderEventOrderLineObject';
  itemName?: Maybe<Scalars['String']['output']>;
  orderLine?: Maybe<OrderLine>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

export enum OrderEventsEmailsEnum {
  DigitalLinks = 'DIGITAL_LINKS',
  EvoucherRedemption = 'EVOUCHER_REDEMPTION',
  FulfillmentConfirmation = 'FULFILLMENT_CONFIRMATION',
  OrderCancel = 'ORDER_CANCEL',
  OrderConfirmation = 'ORDER_CONFIRMATION',
  OrderRefund = 'ORDER_REFUND',
  PaymentConfirmation = 'PAYMENT_CONFIRMATION',
  ShippingConfirmation = 'SHIPPING_CONFIRMATION',
  TrackingUpdated = 'TRACKING_UPDATED'
}

export enum OrderEventsEnum {
  Canceled = 'CANCELED',
  ChangeRemittanceManualAdjustmentStatus = 'CHANGE_REMITTANCE_MANUAL_ADJUSTMENT_STATUS',
  CreateRemittanceManualAdjustment = 'CREATE_REMITTANCE_MANUAL_ADJUSTMENT',
  DraftAddedProducts = 'DRAFT_ADDED_PRODUCTS',
  DraftCreated = 'DRAFT_CREATED',
  DraftRemovedProducts = 'DRAFT_REMOVED_PRODUCTS',
  EmailSent = 'EMAIL_SENT',
  ExternalServiceNotification = 'EXTERNAL_SERVICE_NOTIFICATION',
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  FulfillmentFulfilledItems = 'FULFILLMENT_FULFILLED_ITEMS',
  FulfillmentRestockedItems = 'FULFILLMENT_RESTOCKED_ITEMS',
  InvoiceGenerated = 'INVOICE_GENERATED',
  InvoiceRequested = 'INVOICE_REQUESTED',
  InvoiceSent = 'INVOICE_SENT',
  InvoiceUpdated = 'INVOICE_UPDATED',
  NoteAdded = 'NOTE_ADDED',
  Order_2GoBookingFailed = 'ORDER_2GO_BOOKING_FAILED',
  Order_2GoBookingSuccess = 'ORDER_2GO_BOOKING_SUCCESS',
  OrderAssignedToRider = 'ORDER_ASSIGNED_TO_RIDER',
  OrderAutobookingCancelled = 'ORDER_AUTOBOOKING_CANCELLED',
  OrderAutobookingFailed = 'ORDER_AUTOBOOKING_FAILED',
  OrderAutobookingInProcess = 'ORDER_AUTOBOOKING_IN_PROCESS',
  OrderBookedGrabExpress = 'ORDER_BOOKED_GRAB_EXPRESS',
  OrderBookedPandagoAuto = 'ORDER_BOOKED_PANDAGO_AUTO',
  OrderCanceledGrabExpress = 'ORDER_CANCELED_GRAB_EXPRESS',
  OrderFulfillmentRemarks = 'ORDER_FULFILLMENT_REMARKS',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderGrabBookingCanceled = 'ORDER_GRAB_BOOKING_CANCELED',
  OrderGrabBookingFailed = 'ORDER_GRAB_BOOKING_FAILED',
  OrderMarkedAsCompleted = 'ORDER_MARKED_AS_COMPLETED',
  OrderMarkedAsPacked = 'ORDER_MARKED_AS_PACKED',
  OrderMarkedAsPaid = 'ORDER_MARKED_AS_PAID',
  OrderMarkedAsPickedUpByCourier = 'ORDER_MARKED_AS_PICKED_UP_BY_COURIER',
  OrderMarkedAsReadyToShip = 'ORDER_MARKED_AS_READY_TO_SHIP',
  OrderMarkedAsReceivedByCourier = 'ORDER_MARKED_AS_RECEIVED_BY_COURIER',
  OrderMarkedAsShipped = 'ORDER_MARKED_AS_SHIPPED',
  OrderPandagoBookingCanceled = 'ORDER_PANDAGO_BOOKING_CANCELED',
  OrderPandagoBookingFailed = 'ORDER_PANDAGO_BOOKING_FAILED',
  OrderReturnedToFc = 'ORDER_RETURNED_TO_FC',
  OrderUpdatedRiderDetails = 'ORDER_UPDATED_RIDER_DETAILS',
  OrderUpdatedShippingLabel = 'ORDER_UPDATED_SHIPPING_LABEL',
  Other = 'OTHER',
  OversoldItems = 'OVERSOLD_ITEMS',
  PaymentAuthorized = 'PAYMENT_AUTHORIZED',
  PaymentCaptured = 'PAYMENT_CAPTURED',
  PaymentFailed = 'PAYMENT_FAILED',
  PaymentFailedRefund = 'PAYMENT_FAILED_REFUND',
  PaymentManualRefundNote = 'PAYMENT_MANUAL_REFUND_NOTE',
  PaymentRefunded = 'PAYMENT_REFUNDED',
  PaymentRefundRequested = 'PAYMENT_REFUND_REQUESTED',
  PaymentVoided = 'PAYMENT_VOIDED',
  Placed = 'PLACED',
  PlacedFromDraft = 'PLACED_FROM_DRAFT',
  RemittanceManualOverride = 'REMITTANCE_MANUAL_OVERRIDE',
  RiderArrived = 'RIDER_ARRIVED',
  StoreOrderAcknowledged = 'STORE_ORDER_ACKNOWLEDGED',
  StoreOrderAddLine = 'STORE_ORDER_ADD_LINE',
  StoreOrderAssignedToRider = 'STORE_ORDER_ASSIGNED_TO_RIDER',
  StoreOrderCanceled = 'STORE_ORDER_CANCELED',
  StoreOrderCancelRevert = 'STORE_ORDER_CANCEL_REVERT',
  StoreOrderCollected = 'STORE_ORDER_COLLECTED',
  StoreOrderCompleted = 'STORE_ORDER_COMPLETED',
  StoreOrderDeleteLine = 'STORE_ORDER_DELETE_LINE',
  StoreOrderDroppedOffByRunner = 'STORE_ORDER_DROPPED_OFF_BY_RUNNER',
  StoreOrderOverriddenByRunner = 'STORE_ORDER_OVERRIDDEN_BY_RUNNER',
  StoreOrderOverrideAcknowledged = 'STORE_ORDER_OVERRIDE_ACKNOWLEDGED',
  StoreOrderOverrideReady = 'STORE_ORDER_OVERRIDE_READY',
  StoreOrderParcelNoSet = 'STORE_ORDER_PARCEL_NO_SET',
  StoreOrderPickLine = 'STORE_ORDER_PICK_LINE',
  StoreOrderReady = 'STORE_ORDER_READY',
  StoreOrderReceivedAtFc = 'STORE_ORDER_RECEIVED_AT_FC',
  StoreOrderScannedByOmiOps = 'STORE_ORDER_SCANNED_BY_OMI_OPS',
  StoreOrderScannedByRunner = 'STORE_ORDER_SCANNED_BY_RUNNER',
  TrackingUpdated = 'TRACKING_UPDATED',
  UpdatedAddress = 'UPDATED_ADDRESS'
}

export type OrderFilterInput = {
  brandName?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  deliverySchedules?: InputMaybe<DateRangeInput>;
  deliveryTypes?: InputMaybe<Array<InputMaybe<DeliveryTypeEnum>>>;
  earliestStoreOrderStatus?: InputMaybe<Array<InputMaybe<SmopOrderStatusEnum>>>;
  isFromShopify?: InputMaybe<Scalars['Boolean']['input']>;
  isShopifyOrderCreated?: InputMaybe<Scalars['Boolean']['input']>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderCode?: InputMaybe<Scalars['String']['input']>;
  parcelNo?: InputMaybe<Scalars['String']['input']>;
  paymentChannelCode?: InputMaybe<Array<InputMaybe<PaymentChannelCodeEnum>>>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  paymentStatus?: InputMaybe<Array<InputMaybe<PaymentChargeStatusEnum>>>;
  riderName?: InputMaybe<StaffNameInput>;
  runnerName?: InputMaybe<StaffNameInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  smopStatus?: InputMaybe<Array<InputMaybe<SmopOrderStatusEnum>>>;
  verticalType?: InputMaybe<Array<InputMaybe<StoreTypeEnum>>>;
};

export type OrderFulfill = {
  __typename?: 'OrderFulfill';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  fulfillments?: Maybe<Array<Maybe<Fulfillment>>>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderFulfillInput = {
  lines: Array<OrderFulfillLineInput>;
  notifyCustomer?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderFulfillLineInput = {
  orderLineId?: InputMaybe<Scalars['ID']['input']>;
  stocks: Array<OrderFulfillStockInput>;
};

export type OrderFulfillStockInput = {
  quantity: Scalars['Int']['input'];
  warehouse: Scalars['ID']['input'];
};

export type OrderFulfillmentRemarks = {
  __typename?: 'OrderFulfillmentRemarks';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderImage = Node & {
  __typename?: 'OrderImage';
  alt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  sortOrder?: Maybe<Scalars['Int']['output']>;
  url: Scalars['String']['output'];
};


export type OrderImageUrlArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderImageCreate = {
  __typename?: 'OrderImageCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  image?: Maybe<OrderImage>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderLine = Node & {
  __typename?: 'OrderLine';
  allocations?: Maybe<Array<Allocation>>;
  digitalContentUrl?: Maybe<DigitalContentUrl>;
  discountedRetailPriceAmount?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  isShippingRequired: Scalars['Boolean']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  originalRetailPriceAmount?: Maybe<Scalars['Float']['output']>;
  productName: Scalars['String']['output'];
  productSku: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  quantityFulfilled: Scalars['Int']['output'];
  sale?: Maybe<Sale>;
  status?: Maybe<OrderLineStatusEnum>;
  storeOrder?: Maybe<StoreOrder>;
  taxRate?: Maybe<Scalars['Float']['output']>;
  tenant?: Maybe<Tenant>;
  thumbnail?: Maybe<Image>;
  totalPrice?: Maybe<TaxedMoney>;
  translatedProductName: Scalars['String']['output'];
  translatedVariantName: Scalars['String']['output'];
  unitPrice?: Maybe<TaxedMoney>;
  variant?: Maybe<ProductVariant>;
  variantName: Scalars['String']['output'];
};


export type OrderLineThumbnailArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderLineCountableConnection = {
  __typename?: 'OrderLineCountableConnection';
  edges: Array<OrderLineCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type OrderLineCountableEdge = {
  __typename?: 'OrderLineCountableEdge';
  cursor: Scalars['String']['output'];
  node: OrderLine;
};

export type OrderLineCreateInput = {
  quantity: Scalars['Int']['input'];
  status?: InputMaybe<OrderLineStatusEnum>;
  tenant?: InputMaybe<Scalars['ID']['input']>;
  variantId: Scalars['ID']['input'];
};

export type OrderLineInput = {
  quantity: Scalars['Int']['input'];
  status?: InputMaybe<OrderLineStatusEnum>;
  tenant?: InputMaybe<Scalars['ID']['input']>;
};

export enum OrderLineStatusEnum {
  OutOfStock = 'OUT_OF_STOCK',
  Pending = 'PENDING',
  Picked = 'PICKED',
  Picking = 'PICKING',
  ReadyForPickup = 'READY_FOR_PICKUP',
  ReadyToShip = 'READY_TO_SHIP',
  ReceivedInWarehouse = 'RECEIVED_IN_WAREHOUSE'
}

export type OrderMarkAsCompleted = {
  __typename?: 'OrderMarkAsCompleted';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderMarkAsPacked = {
  __typename?: 'OrderMarkAsPacked';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderMarkAsPaid = {
  __typename?: 'OrderMarkAsPaid';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderMarkAsReadyToShip = {
  __typename?: 'OrderMarkAsReadyToShip';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderMarkAsShipped = {
  __typename?: 'OrderMarkAsShipped';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderRefund = {
  __typename?: 'OrderRefund';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderRemittanceManualAdjustment = {
  __typename?: 'OrderRemittanceManualAdjustment';
  adjustedAmount?: Maybe<Scalars['Float']['output']>;
  adjustedTotalAmount?: Maybe<Scalars['Float']['output']>;
};

export type OrderRemittanceManualAdjustmentEvent = {
  __typename?: 'OrderRemittanceManualAdjustmentEvent';
  adjustedAmount?: Maybe<Scalars['Float']['output']>;
  adjustedTotalAmount?: Maybe<Scalars['Float']['output']>;
  adjustmentReason?: Maybe<Scalars['String']['output']>;
  newStatus?: Maybe<Scalars['String']['output']>;
  oldStatus?: Maybe<Scalars['String']['output']>;
  oldTotalAmount?: Maybe<Scalars['Float']['output']>;
};

export type OrderReturnToFc = {
  __typename?: 'OrderReturnToFC';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderRiderArrived = {
  __typename?: 'OrderRiderArrived';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderRiderDispatchAssignOrders = {
  __typename?: 'OrderRiderDispatchAssignOrders';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  hasErrors?: Maybe<Scalars['Boolean']['output']>;
  orderErrors: Array<OrderError>;
  orders?: Maybe<Array<Maybe<Order>>>;
  ordersWithError?: Maybe<Scalars['JSONString']['output']>;
};

export type OrderRiderDispatchSearchAndValidation = {
  __typename?: 'OrderRiderDispatchSearchAndValidation';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  hasErrors?: Maybe<Scalars['Boolean']['output']>;
  orderErrors: Array<OrderError>;
  orders?: Maybe<Array<Maybe<Order>>>;
  ordersWithError?: Maybe<Scalars['JSONString']['output']>;
};

export enum OrderSortField {
  CreationDate = 'CREATION_DATE',
  Customer = 'CUSTOMER',
  FulfillmentStatus = 'FULFILLMENT_STATUS',
  Number = 'NUMBER',
  Payment = 'PAYMENT',
  Total = 'TOTAL'
}

export type OrderSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: OrderSortField;
};

export enum OrderStatus {
  Canceled = 'CANCELED',
  Draft = 'DRAFT',
  Fulfilled = 'FULFILLED',
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  Unfulfilled = 'UNFULFILLED'
}

export enum OrderStatusFilter {
  Canceled = 'CANCELED',
  Fulfilled = 'FULFILLED',
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  ReadyToCapture = 'READY_TO_CAPTURE',
  ReadyToFulfill = 'READY_TO_FULFILL',
  Unfulfilled = 'UNFULFILLED'
}

export type OrderUpdate = {
  __typename?: 'OrderUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderUpdateDropOffLocation = {
  __typename?: 'OrderUpdateDropOffLocation';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderUpdateInput = {
  billingAddress?: InputMaybe<AddressInput>;
  shippingAddress?: InputMaybe<AddressInput>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
};

export type OrderUpdateMeta = {
  __typename?: 'OrderUpdateMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
};

export type OrderUpdatePrivateMeta = {
  __typename?: 'OrderUpdatePrivateMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
};

export type OrderUpdateShipping = {
  __typename?: 'OrderUpdateShipping';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OrderUpdateShippingInput = {
  shippingMethod?: InputMaybe<Scalars['ID']['input']>;
};

export type OrderUpdateShippingLabel = {
  __typename?: 'OrderUpdateShippingLabel';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export enum OrderVerticalType {
  FoodAndBeverages = 'FOOD_AND_BEVERAGES',
  GeneralMerchandise = 'GENERAL_MERCHANDISE',
  Grocery = 'GROCERY',
  SmFulfilled = 'SM_FULFILLED'
}

export type OrderVoid = {
  __typename?: 'OrderVoid';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type OverrideItemFromCart = {
  __typename?: 'OverrideItemFromCart';
  cartErrors: Array<CartError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  line?: Maybe<CartLine>;
};

export type Pcb = Node & {
  __typename?: 'PCB';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type Page = Node & ObjectWithMetadata & {
  __typename?: 'Page';
  content: Scalars['String']['output'];
  contentJson: Scalars['JSONString']['output'];
  created: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isPublished: Scalars['Boolean']['output'];
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  publicationDate?: Maybe<Scalars['Date']['output']>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  translation?: Maybe<PageTranslation>;
};


export type PageTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type PageBulkDelete = {
  __typename?: 'PageBulkDelete';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  pageErrors: Array<PageError>;
};

export type PageBulkPublish = {
  __typename?: 'PageBulkPublish';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  pageErrors: Array<PageError>;
};

export type PageCountableConnection = {
  __typename?: 'PageCountableConnection';
  edges: Array<PageCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PageCountableEdge = {
  __typename?: 'PageCountableEdge';
  cursor: Scalars['String']['output'];
  node: Page;
};

export type PageCreate = {
  __typename?: 'PageCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  page?: Maybe<Page>;
  pageErrors: Array<PageError>;
};

export type PageDelete = {
  __typename?: 'PageDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  page?: Maybe<Page>;
  pageErrors: Array<PageError>;
};

export type PageError = {
  __typename?: 'PageError';
  code: PageErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum PageErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type PageFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PageInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  contentJson?: InputMaybe<Scalars['JSONString']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  publicationDate?: InputMaybe<Scalars['String']['input']>;
  seo?: InputMaybe<SeoInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum PageSortField {
  CreationDate = 'CREATION_DATE',
  PublicationDate = 'PUBLICATION_DATE',
  Slug = 'SLUG',
  Title = 'TITLE',
  Visibility = 'VISIBILITY'
}

export type PageSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: PageSortField;
};

export type PageTranslatableContent = Node & {
  __typename?: 'PageTranslatableContent';
  content: Scalars['String']['output'];
  contentJson: Scalars['JSONString']['output'];
  id: Scalars['ID']['output'];
  page?: Maybe<Page>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  translation?: Maybe<PageTranslation>;
};


export type PageTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type PageTranslate = {
  __typename?: 'PageTranslate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  page?: Maybe<PageTranslatableContent>;
  translationErrors: Array<TranslationError>;
};

export type PageTranslation = Node & {
  __typename?: 'PageTranslation';
  content: Scalars['String']['output'];
  contentJson: Scalars['JSONString']['output'];
  id: Scalars['ID']['output'];
  language: LanguageDisplay;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type PageTranslationInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  contentJson?: InputMaybe<Scalars['JSONString']['input']>;
  seoDescription?: InputMaybe<Scalars['String']['input']>;
  seoTitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum PageTypeEnum {
  Cinema = 'CINEMA',
  Discounts = 'DISCOUNTS',
  Food = 'FOOD',
  Grocery = 'GROCERY',
  Shops = 'SHOPS',
  SmFulfilled = 'SM_FULFILLED'
}

export type PageUpdate = {
  __typename?: 'PageUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  page?: Maybe<Page>;
  pageErrors: Array<PageError>;
};

export type PasswordChange = {
  __typename?: 'PasswordChange';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export enum PauseTypeEnum {
  Both = 'BOTH',
  Fulfillment = 'FULFILLMENT',
  Tenant = 'TENANT'
}

export type Payment = Node & {
  __typename?: 'Payment';
  actions: Array<Maybe<OrderAction>>;
  allocations?: Maybe<Array<Maybe<PaymentAllocation>>>;
  availableCaptureAmount?: Maybe<Money>;
  availableRefundAmount?: Maybe<Money>;
  capturedAmount?: Maybe<Money>;
  channelCode?: Maybe<PaymentChannelCodeEnum>;
  chargeStatus: PaymentChargeStatusEnum;
  checkout?: Maybe<Checkout>;
  created: Scalars['DateTime']['output'];
  creditCard?: Maybe<CreditCard>;
  customerIpAddress?: Maybe<Scalars['String']['output']>;
  gateway: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  ipay88MerchantType?: Maybe<Scalars['String']['output']>;
  ipay88RefNo?: Maybe<Scalars['String']['output']>;
  ipay88TransId?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  modified: Scalars['DateTime']['output'];
  order?: Maybe<Order>;
  paymentMethodType?: Maybe<Scalars['String']['output']>;
  smopTransId?: Maybe<Scalars['String']['output']>;
  token: Scalars['String']['output'];
  total?: Maybe<Money>;
  transactionId?: Maybe<Scalars['String']['output']>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
};

export type PaymentAllocation = Node & {
  __typename?: 'PaymentAllocation';
  amount?: Maybe<Money>;
  created: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  payment: Payment;
  tenant?: Maybe<TenantPrivate>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PaymentCapture = {
  __typename?: 'PaymentCapture';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  payment?: Maybe<Payment>;
  paymentErrors: Array<PaymentError>;
};

export enum PaymentChannelCodeEnum {
  Bpi = 'BPI',
  Chinabank = 'CHINABANK',
  Grabpay = 'GRABPAY',
  Paymaya = 'PAYMAYA',
  Rcbc = 'RCBC',
  Shopeepay = 'SHOPEEPAY',
  Ubp = 'UBP'
}

export enum PaymentChargeStatusEnum {
  Cancelled = 'CANCELLED',
  FullyCharged = 'FULLY_CHARGED',
  FullyRefunded = 'FULLY_REFUNDED',
  NotCharged = 'NOT_CHARGED',
  PartiallyCharged = 'PARTIALLY_CHARGED',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  Pending = 'PENDING',
  RefundRequested = 'REFUND_REQUESTED',
  Refused = 'REFUSED'
}

export type PaymentCountableConnection = {
  __typename?: 'PaymentCountableConnection';
  edges: Array<PaymentCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PaymentCountableEdge = {
  __typename?: 'PaymentCountableEdge';
  cursor: Scalars['String']['output'];
  node: Payment;
};

export type PaymentError = {
  __typename?: 'PaymentError';
  code: PaymentErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum PaymentErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  ChannelCodeUnavailable = 'CHANNEL_CODE_UNAVAILABLE',
  DisabledGateway = 'DISABLED_GATEWAY',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  NonCod = 'NON_COD',
  NotFound = 'NOT_FOUND',
  NotSupportedGateway = 'NOT_SUPPORTED_GATEWAY',
  PartialPaymentNotAllowed = 'PARTIAL_PAYMENT_NOT_ALLOWED',
  PaymentError = 'PAYMENT_ERROR',
  Required = 'REQUIRED',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  UnavailableChannelCodePlugin = 'UNAVAILABLE_CHANNEL_CODE_PLUGIN',
  Unique = 'UNIQUE'
}

export type PaymentGateway = {
  __typename?: 'PaymentGateway';
  config: Array<GatewayConfigLine>;
  currencies: Array<Maybe<Scalars['String']['output']>>;
  error?: Maybe<CheckoutSubTotalError>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nonCod?: Maybe<Scalars['Boolean']['output']>;
};

export type PaymentInitialize = {
  __typename?: 'PaymentInitialize';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  initializedPayment?: Maybe<PaymentInitialized>;
  paymentErrors: Array<PaymentError>;
};

export type PaymentInitialized = {
  __typename?: 'PaymentInitialized';
  data?: Maybe<Scalars['JSONString']['output']>;
  gateway: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type PaymentInput = {
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  billingAddress?: InputMaybe<AddressInput>;
  channelCode?: InputMaybe<Scalars['String']['input']>;
  gateway: Scalars['String']['input'];
  ipay88MerchantType?: InputMaybe<SmopIpay88MerchantTypeEnum>;
  returnUrl?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentMethodUnlink = {
  __typename?: 'PaymentMethodUnlink';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  paymentMethod?: Maybe<UserPaymentMethod>;
};

export type PaymentRefund = {
  __typename?: 'PaymentRefund';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  payment?: Maybe<Payment>;
  paymentErrors: Array<PaymentError>;
};

export type PaymentSource = {
  __typename?: 'PaymentSource';
  creditCardInfo?: Maybe<CreditCard>;
  gateway: Scalars['String']['output'];
};

export type PaymentVoid = {
  __typename?: 'PaymentVoid';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  payment?: Maybe<Payment>;
  paymentErrors: Array<PaymentError>;
};

export type Permission = {
  __typename?: 'Permission';
  code: PermissionEnum;
  name: Scalars['String']['output'];
};

export enum PermissionEnum {
  AddCoupon = 'ADD_COUPON',
  ApproveBatch = 'APPROVE_BATCH',
  ChangeCoupon = 'CHANGE_COUPON',
  CreateBatch = 'CREATE_BATCH',
  ExecutePauseMall = 'EXECUTE_PAUSE_MALL',
  ExecutePauseTenant = 'EXECUTE_PAUSE_TENANT',
  FeatureCoupons = 'FEATURE_COUPONS',
  GenerateBankFile = 'GENERATE_BANK_FILE',
  GeneratePayableList = 'GENERATE_PAYABLE_LIST',
  ManageAccess = 'MANAGE_ACCESS',
  ManageAccountSettings = 'MANAGE_ACCOUNT_SETTINGS',
  ManageAllMalls = 'MANAGE_ALL_MALLS',
  ManageAnnouncements = 'MANAGE_ANNOUNCEMENTS',
  ManageApps = 'MANAGE_APPS',
  ManageAppConfigs = 'MANAGE_APP_CONFIGS',
  ManageAutoBooking = 'MANAGE_AUTO_BOOKING',
  ManageBanners = 'MANAGE_BANNERS',
  ManageBatch = 'MANAGE_BATCH',
  ManageBatchHistory = 'MANAGE_BATCH_HISTORY',
  ManageBrands = 'MANAGE_BRANDS',
  ManageBrandDetails = 'MANAGE_BRAND_DETAILS',
  ManageBusinessDetails = 'MANAGE_BUSINESS_DETAILS',
  ManageCategories = 'MANAGE_CATEGORIES',
  ManageCheckouts = 'MANAGE_CHECKOUTS',
  ManageClusters = 'MANAGE_CLUSTERS',
  ManageCollections = 'MANAGE_COLLECTIONS',
  ManageConfig = 'MANAGE_CONFIG',
  ManageCoupons = 'MANAGE_COUPONS',
  ManageDiscounts = 'MANAGE_DISCOUNTS',
  ManageFinance = 'MANAGE_FINANCE',
  ManageGiftCard = 'MANAGE_GIFT_CARD',
  ManageHomeLocations = 'MANAGE_HOME_LOCATIONS',
  ManageMalls = 'MANAGE_MALLS',
  ManageMenus = 'MANAGE_MENUS',
  ManageOrders = 'MANAGE_ORDERS',
  ManageOrderTimeframe = 'MANAGE_ORDER_TIMEFRAME',
  ManagePages = 'MANAGE_PAGES',
  ManagePauseConfig = 'MANAGE_PAUSE_CONFIG',
  ManagePauseReasons = 'MANAGE_PAUSE_REASONS',
  ManagePayout = 'MANAGE_PAYOUT',
  ManagePayoutOnProcess = 'MANAGE_PAYOUT_ON_PROCESS',
  ManagePayoutOpenOrder = 'MANAGE_PAYOUT_OPEN_ORDER',
  ManagePayoutPayables = 'MANAGE_PAYOUT_PAYABLES',
  ManagePayoutPayment = 'MANAGE_PAYOUT_PAYMENT',
  ManagePlugins = 'MANAGE_PLUGINS',
  ManageProducts = 'MANAGE_PRODUCTS',
  ManageProductTypesAndAttributes = 'MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES',
  ManageProductVisibility = 'MANAGE_PRODUCT_VISIBILITY',
  ManageRemittance = 'MANAGE_REMITTANCE',
  ManageRemittanceConfig = 'MANAGE_REMITTANCE_CONFIG',
  ManageRemittanceOverride = 'MANAGE_REMITTANCE_OVERRIDE',
  ManageReports = 'MANAGE_REPORTS',
  ManageReservations = 'MANAGE_RESERVATIONS',
  ManageSales = 'MANAGE_SALES',
  ManageSellerOrderReports = 'MANAGE_SELLER_ORDER_REPORTS',
  ManageServiceAccounts = 'MANAGE_SERVICE_ACCOUNTS',
  ManageSettings = 'MANAGE_SETTINGS',
  ManageSettlement = 'MANAGE_SETTLEMENT',
  ManageShipments = 'MANAGE_SHIPMENTS',
  ManageShipping = 'MANAGE_SHIPPING',
  ManageShopify = 'MANAGE_SHOPIFY',
  ManageStaff = 'MANAGE_STAFF',
  ManageStoreOrders = 'MANAGE_STORE_ORDERS',
  ManageStoreSales = 'MANAGE_STORE_SALES',
  ManageTaskAreas = 'MANAGE_TASK_AREAS',
  ManageTenants = 'MANAGE_TENANTS',
  ManageTranslations = 'MANAGE_TRANSLATIONS',
  ManageUsers = 'MANAGE_USERS',
  ManageUserTypes = 'MANAGE_USER_TYPES',
  ManageVouchers = 'MANAGE_VOUCHERS',
  RejectBatch = 'REJECT_BATCH',
  ViewAdminDispatch = 'VIEW_ADMIN_DISPATCH',
  ViewAdminDropOff = 'VIEW_ADMIN_DROP_OFF',
  ViewAdminFulfillment = 'VIEW_ADMIN_FULFILLMENT',
  ViewAdminOrders = 'VIEW_ADMIN_ORDERS',
  ViewAllMalls = 'VIEW_ALL_MALLS',
  ViewCouponRedemption = 'VIEW_COUPON_REDEMPTION',
  ViewMasterFulfillment = 'VIEW_MASTER_FULFILLMENT',
  ViewPauseRunning = 'VIEW_PAUSE_RUNNING'
}

export type PermissionGroupCreate = {
  __typename?: 'PermissionGroupCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  group?: Maybe<Group>;
  permissionGroupErrors: Array<PermissionGroupError>;
};

export type PermissionGroupCreateInput = {
  addPermissions?: InputMaybe<Array<PermissionEnum>>;
  addUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  name: Scalars['String']['input'];
};

export type PermissionGroupDelete = {
  __typename?: 'PermissionGroupDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  group?: Maybe<Group>;
  permissionGroupErrors: Array<PermissionGroupError>;
};

export type PermissionGroupError = {
  __typename?: 'PermissionGroupError';
  code: PermissionGroupErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<PermissionEnum>>;
  users?: Maybe<Array<Scalars['ID']['output']>>;
};

export enum PermissionGroupErrorCode {
  AssignNonStaffMember = 'ASSIGN_NON_STAFF_MEMBER',
  CannotOrphanUsers = 'CANNOT_ORPHAN_USERS',
  CannotRemoveFromLastGroup = 'CANNOT_REMOVE_FROM_LAST_GROUP',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GroupLocked = 'GROUP_LOCKED',
  LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  OutOfScopeUser = 'OUT_OF_SCOPE_USER',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type PermissionGroupFilterInput = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export enum PermissionGroupSortField {
  PermissionGroupName = 'PERMISSION_GROUP_NAME'
}

export type PermissionGroupSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: PermissionGroupSortField;
};

export type PermissionGroupUpdate = {
  __typename?: 'PermissionGroupUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  group?: Maybe<Group>;
  permissionGroupErrors: Array<PermissionGroupError>;
};

export type PermissionGroupUpdateInput = {
  addPermissions?: InputMaybe<Array<PermissionEnum>>;
  addUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  removePermissions?: InputMaybe<Array<PermissionEnum>>;
  removeUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum PickupLocationServiceTimeDay {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type Plugin = Node & {
  __typename?: 'Plugin';
  active: Scalars['Boolean']['output'];
  configuration?: Maybe<Array<Maybe<ConfigurationItem>>>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type PluginCountableConnection = {
  __typename?: 'PluginCountableConnection';
  edges: Array<PluginCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PluginCountableEdge = {
  __typename?: 'PluginCountableEdge';
  cursor: Scalars['String']['output'];
  node: Plugin;
};

export type PluginError = {
  __typename?: 'PluginError';
  code: PluginErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum PluginErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  PluginMisconfigured = 'PLUGIN_MISCONFIGURED',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type PluginFilterInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export enum PluginSortField {
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export type PluginSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: PluginSortField;
};

export type PluginUpdate = {
  __typename?: 'PluginUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  plugin?: Maybe<Plugin>;
  pluginsErrors: Array<PluginError>;
};

export type PluginUpdateInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  configuration?: InputMaybe<Array<InputMaybe<ConfigurationItemInput>>>;
};

export type PopularSearches = {
  __typename?: 'PopularSearches';
  count?: Maybe<Scalars['Int']['output']>;
  resultCount?: Maybe<Scalars['Int']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  searchQuery?: Maybe<Scalars['String']['output']>;
};

export type PriceRangeInput = {
  gte?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
};

export type Product = Node & ObjectWithMetadata & {
  __typename?: 'Product';
  attributes: Array<SelectedAttribute>;
  availabilityTimeEnd?: Maybe<Scalars['Time']['output']>;
  availabilityTimeStart?: Maybe<Scalars['Time']['output']>;
  availableForPurchase?: Maybe<Scalars['Date']['output']>;
  brand?: Maybe<Brand>;
  brandLabel?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Category>;
  chargeTaxes: Scalars['Boolean']['output'];
  choices?: Maybe<Array<Maybe<Choice>>>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  createdAt: Scalars['DateTime']['output'];
  deeplinkSpiel?: Maybe<Scalars['String']['output']>;
  deeplinkUrl?: Maybe<Scalars['String']['output']>;
  defaultVariant?: Maybe<ProductVariant>;
  description: Scalars['String']['output'];
  descriptionJson: Scalars['JSONString']['output'];
  height?: Maybe<Distance>;
  id: Scalars['ID']['output'];
  imageById?: Maybe<ProductImage>;
  images?: Maybe<Array<Maybe<ProductImage>>>;
  isAvailabilityTime?: Maybe<Scalars['Boolean']['output']>;
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  isAvailableForPurchase?: Maybe<Scalars['Boolean']['output']>;
  isInventorySettings?: Maybe<Scalars['Boolean']['output']>;
  isPublished: Scalars['Boolean']['output'];
  isPublishedByTenant?: Maybe<Scalars['Boolean']['output']>;
  isSimpleProduct?: Maybe<Scalars['Boolean']['output']>;
  length?: Maybe<Distance>;
  margin?: Maybe<Margin>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  minimalVariantPrice?: Maybe<Money>;
  name: Scalars['String']['output'];
  nonCod?: Maybe<Scalars['Boolean']['output']>;
  pricing?: Maybe<ProductPricingInfo>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  productStatus?: Maybe<ProductStatusEnum>;
  productType: ProductType;
  productVisibilities?: Maybe<Array<Maybe<ProductVisibility>>>;
  productVisibility?: Maybe<ProductVisibility>;
  publicationDate?: Maybe<Scalars['Date']['output']>;
  purchaseCost?: Maybe<MoneyRange>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  shopifyReference?: Maybe<Scalars['String']['output']>;
  shopifyTags?: Maybe<Array<Maybe<ShopifyTags>>>;
  shortDynamicLink?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  smoShare?: Maybe<Scalars['Decimal']['output']>;
  tags?: Maybe<ProductTagCountableConnection>;
  taxType?: Maybe<TaxType>;
  tenantShare?: Maybe<Scalars['Decimal']['output']>;
  thumbnail?: Maybe<Image>;
  translation?: Maybe<ProductTranslation>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated This field will be removed after 2020-07-31. */
  url: Scalars['String']['output'];
  variants?: Maybe<Array<Maybe<ProductVariant>>>;
  visibleInListings: Scalars['Boolean']['output'];
  weight?: Maybe<Weight>;
  width?: Maybe<Distance>;
};


export type ProductImageByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type ProductPricingArgs = {
  mallId?: InputMaybe<Scalars['ID']['input']>;
};


export type ProductProductVisibilitiesArgs = {
  firstCount: Scalars['Int']['input'];
  mallIds: Array<InputMaybe<Scalars['ID']['input']>>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProductProductVisibilityArgs = {
  mallId?: InputMaybe<Scalars['ID']['input']>;
};


export type ProductSmoShareArgs = {
  voucherId?: InputMaybe<Scalars['ID']['input']>;
};


export type ProductTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductTenantShareArgs = {
  voucherId?: InputMaybe<Scalars['ID']['input']>;
};


export type ProductThumbnailArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductTranslationArgs = {
  languageCode: LanguageCodeEnum;
};


export type ProductVariantsArgs = {
  sortBy?: InputMaybe<ProductVariantSortingInput>;
};

export type ProductBulkDelete = {
  __typename?: 'ProductBulkDelete';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type ProductBulkPublish = {
  __typename?: 'ProductBulkPublish';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type ProductClearMeta = {
  __typename?: 'ProductClearMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export type ProductClearPrivateMeta = {
  __typename?: 'ProductClearPrivateMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export type ProductCountableConnection = {
  __typename?: 'ProductCountableConnection';
  edges: Array<ProductCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ProductCountableEdge = {
  __typename?: 'ProductCountableEdge';
  cursor: Scalars['String']['output'];
  node: Product;
};

export type ProductCreate = {
  __typename?: 'ProductCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export type ProductCreateInput = {
  attributes?: InputMaybe<Array<InputMaybe<AttributeValueInput>>>;
  availabilityTimeEnd?: InputMaybe<Scalars['Time']['input']>;
  availabilityTimeStart?: InputMaybe<Scalars['Time']['input']>;
  basePrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  brand?: InputMaybe<Scalars['ID']['input']>;
  brandLabel?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  chargeTaxes?: InputMaybe<Scalars['Boolean']['input']>;
  choices?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONString']['input']>;
  height?: InputMaybe<Scalars['DistanceScalar']['input']>;
  images?: InputMaybe<Array<InputMaybe<ProductImageInput>>>;
  isAvailabilityTime?: InputMaybe<Scalars['Boolean']['input']>;
  isInventorySettings?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  isSimpleProduct?: InputMaybe<Scalars['Boolean']['input']>;
  length?: InputMaybe<Scalars['DistanceScalar']['input']>;
  name: Scalars['String']['input'];
  nonCod?: InputMaybe<Scalars['Boolean']['input']>;
  productStatus?: InputMaybe<ProductStatusEnum>;
  productType: Scalars['ID']['input'];
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  seo?: InputMaybe<SeoInput>;
  sku?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stocks?: InputMaybe<Array<StockInput>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  taxCode?: InputMaybe<Scalars['String']['input']>;
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  visibleInListings?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
  width?: InputMaybe<Scalars['DistanceScalar']['input']>;
};

export type ProductDelete = {
  __typename?: 'ProductDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export type ProductError = {
  __typename?: 'ProductError';
  attributes?: Maybe<Array<Scalars['ID']['output']>>;
  code: ProductErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum ProductErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED',
  AttributeCannotBeAssigned = 'ATTRIBUTE_CANNOT_BE_ASSIGNED',
  AttributeVariantsDisabled = 'ATTRIBUTE_VARIANTS_DISABLED',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  HasActiveSale = 'HAS_ACTIVE_SALE',
  HasScheduledSale = 'HAS_SCHEDULED_SALE',
  Invalid = 'INVALID',
  NotAccessible = 'NOT_ACCESSIBLE',
  NotFound = 'NOT_FOUND',
  NotProductsImage = 'NOT_PRODUCTS_IMAGE',
  NotProductsVariant = 'NOT_PRODUCTS_VARIANT',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  UnsupportedFileType = 'UNSUPPORTED_FILE_TYPE',
  VariantNoDigitalContent = 'VARIANT_NO_DIGITAL_CONTENT'
}

export enum ProductFieldEnum {
  AvailableForPurchase = 'AVAILABLE_FOR_PURCHASE',
  Category = 'CATEGORY',
  ChargeTaxes = 'CHARGE_TAXES',
  Collections = 'COLLECTIONS',
  CostPrice = 'COST_PRICE',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  ProductImages = 'PRODUCT_IMAGES',
  ProductStatus = 'PRODUCT_STATUS',
  ProductType = 'PRODUCT_TYPE',
  ProductWeight = 'PRODUCT_WEIGHT',
  Searchable = 'SEARCHABLE',
  VariantImages = 'VARIANT_IMAGES',
  VariantPrice = 'VARIANT_PRICE',
  VariantSku = 'VARIANT_SKU',
  VariantWeight = 'VARIANT_WEIGHT',
  Visible = 'VISIBLE'
}

export type ProductFilterInput = {
  attributes?: InputMaybe<Array<InputMaybe<AttributeInput>>>;
  brands?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hasCategory?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isFromShopify?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  isVisible?: InputMaybe<ProductVisibilityFilterInput>;
  mallDistance?: InputMaybe<Array<InputMaybe<MallDistanceInput>>>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  minimalPrice?: InputMaybe<PriceRangeInput>;
  price?: InputMaybe<PriceRangeInput>;
  productStatus?: InputMaybe<ProductStatusEnum>;
  productStatuses?: InputMaybe<Array<InputMaybe<ProductStatusEnum>>>;
  productType?: InputMaybe<ProductTypeEnum>;
  productTypes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  saleOnMall?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchByName?: InputMaybe<Scalars['String']['input']>;
  searchBySku?: InputMaybe<Scalars['String']['input']>;
  sellingPrice?: InputMaybe<PriceRangeInput>;
  stockAvailability?: InputMaybe<StockAvailability>;
  stocks?: InputMaybe<ProductStockFilterInput>;
  storeType?: InputMaybe<StoreTypeEnum>;
  tenants?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ProductGenerateDynamicLink = {
  __typename?: 'ProductGenerateDynamicLink';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export type ProductImage = Node & {
  __typename?: 'ProductImage';
  alt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  sortOrder?: Maybe<Scalars['Int']['output']>;
  url: Scalars['String']['output'];
};


export type ProductImageUrlArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductImageBulkDelete = {
  __typename?: 'ProductImageBulkDelete';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type ProductImageCreate = {
  __typename?: 'ProductImageCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  image?: Maybe<ProductImage>;
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export type ProductImageCreateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['Upload']['input'];
  product: Scalars['ID']['input'];
};

export type ProductImageCreateUrl = {
  __typename?: 'ProductImageCreateUrl';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  image?: Maybe<ProductImage>;
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export type ProductImageCreateUrlInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  imageUrl: Scalars['String']['input'];
  product: Scalars['ID']['input'];
};

export type ProductImageDelete = {
  __typename?: 'ProductImageDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  image?: Maybe<ProductImage>;
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export type ProductImageInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['Upload']['input'];
};

export type ProductImageReorder = {
  __typename?: 'ProductImageReorder';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  images?: Maybe<Array<Maybe<ProductImage>>>;
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export type ProductImageResize = {
  __typename?: 'ProductImageResize';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  imageCount?: Maybe<Scalars['Int']['output']>;
  productCount?: Maybe<Scalars['Int']['output']>;
  productErrors: Array<ProductError>;
};

export type ProductImageUpdate = {
  __typename?: 'ProductImageUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  image?: Maybe<ProductImage>;
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export type ProductImageUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
};

export type ProductOrder = {
  attributeId?: InputMaybe<Scalars['ID']['input']>;
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field?: InputMaybe<ProductOrderField>;
};

export enum ProductOrderField {
  Date = 'DATE',
  DiscountAmount = 'DISCOUNT_AMOUNT',
  DiscountPercentage = 'DISCOUNT_PERCENTAGE',
  MallDistance = 'MALL_DISTANCE',
  MinimalPrice = 'MINIMAL_PRICE',
  MostPopular = 'MOST_POPULAR',
  Name = 'NAME',
  Price = 'PRICE',
  PublicationDate = 'PUBLICATION_DATE',
  Published = 'PUBLISHED',
  SellingPrice = 'SELLING_PRICE',
  Type = 'TYPE'
}

export type ProductPricingInfo = {
  __typename?: 'ProductPricingInfo';
  discount?: Maybe<TaxedMoney>;
  discountLocalCurrency?: Maybe<TaxedMoney>;
  onSale?: Maybe<Scalars['Boolean']['output']>;
  priceRange?: Maybe<TaxedMoneyRange>;
  priceRangeLocalCurrency?: Maybe<TaxedMoneyRange>;
  priceRangeUndiscounted?: Maybe<TaxedMoneyRange>;
};

export type ProductSetAvailabilityForPurchase = {
  __typename?: 'ProductSetAvailabilityForPurchase';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export type ProductStatusBulkUpdate = {
  __typename?: 'ProductStatusBulkUpdate';
  bulkProductErrors: Array<BulkProductError>;
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export enum ProductStatusEnum {
  Deleted = 'DELETED',
  Draft = 'DRAFT',
  Ready = 'READY',
  Unlisted = 'UNLISTED'
}

export type ProductStockFilterInput = {
  quantity?: InputMaybe<IntRangeInput>;
  warehouseIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ProductTag = Node & {
  __typename?: 'ProductTag';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type ProductTagCountableConnection = {
  __typename?: 'ProductTagCountableConnection';
  edges: Array<ProductTagCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ProductTagCountableEdge = {
  __typename?: 'ProductTagCountableEdge';
  cursor: Scalars['String']['output'];
  node: ProductTag;
};

export type ProductTagFilterInput = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export enum ProductTemplateEnum {
  ImagesAndDescriptions = 'IMAGES_AND_DESCRIPTIONS',
  InventoryAndStatus = 'INVENTORY_AND_STATUS',
  List = 'LIST',
  Prices = 'PRICES',
  RetailAndSellingPrice = 'RETAIL_AND_SELLING_PRICE',
  SeoInformationImages = 'SEO_INFORMATION_IMAGES'
}

export type ProductTranslatableContent = Node & {
  __typename?: 'ProductTranslatableContent';
  description: Scalars['String']['output'];
  descriptionJson: Scalars['JSONString']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  product?: Maybe<Product>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  translation?: Maybe<ProductTranslation>;
};


export type ProductTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ProductTranslate = {
  __typename?: 'ProductTranslate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  product?: Maybe<Product>;
  translationErrors: Array<TranslationError>;
};

export type ProductTranslation = Node & {
  __typename?: 'ProductTranslation';
  description: Scalars['String']['output'];
  descriptionJson: Scalars['JSONString']['output'];
  id: Scalars['ID']['output'];
  language: LanguageDisplay;
  name: Scalars['String']['output'];
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
};

export type ProductType = Node & ObjectWithMetadata & {
  __typename?: 'ProductType';
  availableAttributes?: Maybe<AttributeCountableConnection>;
  hasVariants: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isDigital: Scalars['Boolean']['output'];
  isShippingRequired: Scalars['Boolean']['output'];
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  name: Scalars['String']['output'];
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  productAttributes?: Maybe<Array<Maybe<Attribute>>>;
  products?: Maybe<ProductCountableConnection>;
  slug: Scalars['String']['output'];
  storeType?: Maybe<StoreTypeEnum>;
  taxRate?: Maybe<TaxRateType>;
  taxType?: Maybe<TaxType>;
  variantAttributes?: Maybe<Array<Maybe<Attribute>>>;
  weight?: Maybe<Weight>;
};


export type ProductTypeAvailableAttributesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttributeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductTypeProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductTypeBulkDelete = {
  __typename?: 'ProductTypeBulkDelete';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type ProductTypeClearMeta = {
  __typename?: 'ProductTypeClearMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export type ProductTypeClearPrivateMeta = {
  __typename?: 'ProductTypeClearPrivateMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export enum ProductTypeConfigurable {
  Configurable = 'CONFIGURABLE',
  Simple = 'SIMPLE'
}

export type ProductTypeCountableConnection = {
  __typename?: 'ProductTypeCountableConnection';
  edges: Array<ProductTypeCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ProductTypeCountableEdge = {
  __typename?: 'ProductTypeCountableEdge';
  cursor: Scalars['String']['output'];
  node: ProductType;
};

export type ProductTypeCreate = {
  __typename?: 'ProductTypeCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export type ProductTypeDelete = {
  __typename?: 'ProductTypeDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export enum ProductTypeEnum {
  Digital = 'DIGITAL',
  Shippable = 'SHIPPABLE'
}

export type ProductTypeFilterInput = {
  brand?: InputMaybe<Scalars['ID']['input']>;
  configurable?: InputMaybe<ProductTypeConfigurable>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  productType?: InputMaybe<ProductTypeEnum>;
  search?: InputMaybe<Scalars['String']['input']>;
  storeType?: InputMaybe<StoreTypeEnum>;
};

export type ProductTypeInput = {
  hasVariants?: InputMaybe<Scalars['Boolean']['input']>;
  isDigital?: InputMaybe<Scalars['Boolean']['input']>;
  isShippingRequired?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productAttributes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  storeType?: InputMaybe<StoreTypeEnum>;
  taxCode?: InputMaybe<Scalars['String']['input']>;
  variantAttributes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
};

export type ProductTypeReorderAttributes = {
  __typename?: 'ProductTypeReorderAttributes';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export enum ProductTypeSortField {
  Digital = 'DIGITAL',
  Name = 'NAME',
  ShippingRequired = 'SHIPPING_REQUIRED'
}

export type ProductTypeSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: ProductTypeSortField;
};

export type ProductTypeUpdate = {
  __typename?: 'ProductTypeUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export type ProductTypeUpdateMeta = {
  __typename?: 'ProductTypeUpdateMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export type ProductTypeUpdatePrivateMeta = {
  __typename?: 'ProductTypeUpdatePrivateMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType?: Maybe<ProductType>;
};

export type ProductUpdate = {
  __typename?: 'ProductUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export type ProductUpdateInput = {
  attributes?: InputMaybe<Array<InputMaybe<AttributeValueInput>>>;
  availabilityTimeEnd?: InputMaybe<Scalars['Time']['input']>;
  availabilityTimeStart?: InputMaybe<Scalars['Time']['input']>;
  basePrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  brand?: InputMaybe<Scalars['ID']['input']>;
  brandLabel?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  chargeTaxes?: InputMaybe<Scalars['Boolean']['input']>;
  choices?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONString']['input']>;
  height?: InputMaybe<Scalars['DistanceScalar']['input']>;
  images?: InputMaybe<Array<InputMaybe<ProductImageInput>>>;
  isAvailabilityTime?: InputMaybe<Scalars['Boolean']['input']>;
  isInventorySettings?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  isSimpleProduct?: InputMaybe<Scalars['Boolean']['input']>;
  length?: InputMaybe<Scalars['DistanceScalar']['input']>;
  name: Scalars['String']['input'];
  nonCod?: InputMaybe<Scalars['Boolean']['input']>;
  productStatus?: InputMaybe<ProductStatusEnum>;
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  seo?: InputMaybe<SeoInput>;
  sku?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stocks?: InputMaybe<Array<StockInput>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  taxCode?: InputMaybe<Scalars['String']['input']>;
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  visibleInListings?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
  width?: InputMaybe<Scalars['DistanceScalar']['input']>;
};

export type ProductUpdateMeta = {
  __typename?: 'ProductUpdateMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export type ProductUpdatePrivateMeta = {
  __typename?: 'ProductUpdatePrivateMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export type ProductUploadEvent = Node & {
  __typename?: 'ProductUploadEvent';
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  job?: Maybe<ProductUploadJob>;
  type: ProductUploadEventsEnum;
};

export enum ProductUploadEventsEnum {
  UploadErrorFileSent = 'UPLOAD_ERROR_FILE_SENT',
  UploadFailed = 'UPLOAD_FAILED',
  UploadPending = 'UPLOAD_PENDING',
  UploadSuccess = 'UPLOAD_SUCCESS'
}

export type ProductUploadJob = Job & Node & {
  __typename?: 'ProductUploadJob';
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  errorFileUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  status: JobStatusEnum;
  templateType?: Maybe<ProductUploadTemplateTypeEnum>;
  updatedAt: Scalars['DateTime']['output'];
  uploadEvents?: Maybe<Array<ProductUploadEvent>>;
  user?: Maybe<User>;
};

export type ProductUploadTemplate = {
  __typename?: 'ProductUploadTemplate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productUpload?: Maybe<ProductUploadJob>;
};

export type ProductUploadTemplateInput = {
  brand?: InputMaybe<Scalars['ID']['input']>;
  file: Scalars['Upload']['input'];
  isOverwrite: Scalars['Boolean']['input'];
  templateType: ProductUploadTemplateTypeEnum;
  tenant?: InputMaybe<Scalars['ID']['input']>;
  uploadAs?: InputMaybe<ProductUserViewEnum>;
};

export enum ProductUploadTemplateTypeEnum {
  InventoryUpdate = 'INVENTORY_UPDATE',
  PriceUpdate = 'PRICE_UPDATE',
  ProductDetailsUpdate = 'PRODUCT_DETAILS_UPDATE',
  ProductFile = 'PRODUCT_FILE',
  SalesMerchantAbsoluteValueProduct = 'SALES_MERCHANT_ABSOLUTE_VALUE_PRODUCT',
  SalesMerchantPercentageProduct = 'SALES_MERCHANT_PERCENTAGE_PRODUCT',
  SalesPartnershipAbsoluteValueProduct = 'SALES_PARTNERSHIP_ABSOLUTE_VALUE_PRODUCT',
  SalesPartnershipPercentageProduct = 'SALES_PARTNERSHIP_PERCENTAGE_PRODUCT'
}

export enum ProductUserViewEnum {
  SellerMaster = 'SELLER_MASTER',
  StoreAdmin = 'STORE_ADMIN'
}

export type ProductUserViewInfoInput = {
  brandId?: InputMaybe<Scalars['ID']['input']>;
  tenantId?: InputMaybe<Scalars['ID']['input']>;
  viewAs: ProductUserViewEnum;
};

export type ProductVariant = Node & ObjectWithMetadata & {
  __typename?: 'ProductVariant';
  attributes: Array<SelectedAttribute>;
  barcode?: Maybe<Scalars['String']['output']>;
  brand?: Maybe<Brand>;
  costPrice?: Maybe<Money>;
  digitalContent?: Maybe<DigitalContent>;
  discountedPrice?: Maybe<Money>;
  height?: Maybe<Distance>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<ProductImage>>>;
  /** @deprecated Use the stock field instead. This field will be removed after 2020-07-31. */
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  length?: Maybe<Distance>;
  margin?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  name: Scalars['String']['output'];
  price?: Maybe<Money>;
  pricing?: Maybe<VariantPricingInfo>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  product: Product;
  /** @deprecated Use the stock field instead. This field will be removed after 2020-07-31. */
  quantity: Scalars['Int']['output'];
  /** @deprecated Use the stock field instead. This field will be removed after 2020-07-31. */
  quantityAllocated?: Maybe<Scalars['Int']['output']>;
  quantityAvailable: Scalars['Int']['output'];
  quantityOrdered?: Maybe<Scalars['Int']['output']>;
  revenue?: Maybe<TaxedMoney>;
  sellingPrice?: Maybe<Money>;
  sku: Scalars['String']['output'];
  smoShare?: Maybe<Scalars['Decimal']['output']>;
  stockOnMall?: Maybe<Stock>;
  /** @deprecated Use the quantityAvailable field instead. This field will be removed after 2020-07-31. */
  stockQuantity: Scalars['Int']['output'];
  stocks?: Maybe<Array<Maybe<Stock>>>;
  tenantShare?: Maybe<Scalars['Decimal']['output']>;
  trackInventory: Scalars['Boolean']['output'];
  translation?: Maybe<ProductVariantTranslation>;
  weight?: Maybe<Weight>;
  width?: Maybe<Distance>;
};


export type ProductVariantPricingArgs = {
  mallId?: InputMaybe<Scalars['ID']['input']>;
  useMallIds?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProductVariantQuantityAvailableArgs = {
  countryCode?: InputMaybe<CountryCode>;
};


export type ProductVariantRevenueArgs = {
  period?: InputMaybe<ReportingPeriod>;
};


export type ProductVariantSellingPriceArgs = {
  brandId?: InputMaybe<Scalars['ID']['input']>;
  saleId?: InputMaybe<Scalars['ID']['input']>;
};


export type ProductVariantSmoShareArgs = {
  brandId?: InputMaybe<Scalars['ID']['input']>;
  saleId?: InputMaybe<Scalars['ID']['input']>;
  voucherId?: InputMaybe<Scalars['ID']['input']>;
};


export type ProductVariantStockOnMallArgs = {
  mallId?: InputMaybe<Scalars['ID']['input']>;
  useMallIds?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ProductVariantStocksArgs = {
  countryCode?: InputMaybe<CountryCode>;
  quantity?: InputMaybe<IntRangeInput>;
  warehouseIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type ProductVariantTenantShareArgs = {
  brandId?: InputMaybe<Scalars['ID']['input']>;
  saleId?: InputMaybe<Scalars['ID']['input']>;
  voucherId?: InputMaybe<Scalars['ID']['input']>;
};


export type ProductVariantTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ProductVariantBulkCreate = {
  __typename?: 'ProductVariantBulkCreate';
  bulkProductErrors: Array<BulkProductError>;
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productVariants: Array<ProductVariant>;
};

export type ProductVariantBulkCreateInput = {
  attributes: Array<InputMaybe<AttributeValueInput>>;
  barcode?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['ID']['input']>;
  costPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  discountedPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  height?: InputMaybe<Scalars['DistanceScalar']['input']>;
  length?: InputMaybe<Scalars['DistanceScalar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  sku: Scalars['String']['input'];
  stocks?: InputMaybe<Array<StockInput>>;
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
  width?: InputMaybe<Scalars['DistanceScalar']['input']>;
};

export type ProductVariantBulkDelete = {
  __typename?: 'ProductVariantBulkDelete';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
};

export type ProductVariantClearMeta = {
  __typename?: 'ProductVariantClearMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantClearPrivateMeta = {
  __typename?: 'ProductVariantClearPrivateMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantCountableConnection = {
  __typename?: 'ProductVariantCountableConnection';
  edges: Array<ProductVariantCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ProductVariantCountableEdge = {
  __typename?: 'ProductVariantCountableEdge';
  cursor: Scalars['String']['output'];
  node: ProductVariant;
};

export type ProductVariantCreate = {
  __typename?: 'ProductVariantCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantCreateInput = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['ID']['input']>;
  costPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  discountedPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  height?: InputMaybe<Scalars['DistanceScalar']['input']>;
  length?: InputMaybe<Scalars['DistanceScalar']['input']>;
  name: Scalars['String']['input'];
  price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  product: Scalars['ID']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  stocks?: InputMaybe<Array<StockInput>>;
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
  width?: InputMaybe<Scalars['DistanceScalar']['input']>;
};

export type ProductVariantDelete = {
  __typename?: 'ProductVariantDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantFilterInput = {
  brands?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  sku?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductVariantInput = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['ID']['input']>;
  costPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  discountedPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  height?: InputMaybe<Scalars['DistanceScalar']['input']>;
  length?: InputMaybe<Scalars['DistanceScalar']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
  width?: InputMaybe<Scalars['DistanceScalar']['input']>;
};

export type ProductVariantReorder = {
  __typename?: 'ProductVariantReorder';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export type ProductVariantSetDefault = {
  __typename?: 'ProductVariantSetDefault';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  product?: Maybe<Product>;
  productErrors: Array<ProductError>;
};

export enum ProductVariantSortField {
  CostPrice = 'COST_PRICE',
  DiscountedPrice = 'DISCOUNTED_PRICE',
  Name = 'NAME',
  Oos = 'OOS',
  Price = 'PRICE'
}

export type ProductVariantSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: ProductVariantSortField;
  mallId?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductVariantStocksCreate = {
  __typename?: 'ProductVariantStocksCreate';
  bulkStockErrors: Array<BulkStockError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantStocksDelete = {
  __typename?: 'ProductVariantStocksDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productVariant?: Maybe<ProductVariant>;
  stockErrors: Array<StockError>;
};

export type ProductVariantStocksUpdate = {
  __typename?: 'ProductVariantStocksUpdate';
  bulkStockErrors: Array<BulkStockError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantTranslatableContent = Node & {
  __typename?: 'ProductVariantTranslatableContent';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  productVariant?: Maybe<ProductVariant>;
  translation?: Maybe<ProductVariantTranslation>;
};


export type ProductVariantTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ProductVariantTranslate = {
  __typename?: 'ProductVariantTranslate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productVariant?: Maybe<ProductVariant>;
  translationErrors: Array<TranslationError>;
};

export type ProductVariantTranslation = Node & {
  __typename?: 'ProductVariantTranslation';
  id: Scalars['ID']['output'];
  language: LanguageDisplay;
  name: Scalars['String']['output'];
};

export type ProductVariantUpdate = {
  __typename?: 'ProductVariantUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantUpdateMeta = {
  __typename?: 'ProductVariantUpdateMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVariantUpdatePrivateMeta = {
  __typename?: 'ProductVariantUpdatePrivateMeta';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type ProductVisibilitiesFilterInput = {
  brands?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  isFromShopify?: InputMaybe<Scalars['Boolean']['input']>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  mallDistance?: InputMaybe<Array<InputMaybe<MallDistanceInput>>>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  productStatus?: InputMaybe<ProductStatusEnum>;
  productStatuses?: InputMaybe<Array<InputMaybe<ProductStatusEnum>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchByName?: InputMaybe<Scalars['String']['input']>;
  searchBySku?: InputMaybe<Scalars['String']['input']>;
  sellingPrice?: InputMaybe<PriceRangeInput>;
  storeType?: InputMaybe<StoreTypeEnum>;
  tenants?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  unpublishIndefinitely?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductVisibilitiesOrder = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field?: InputMaybe<ProductVisibilitiesOrderField>;
};

export enum ProductVisibilitiesOrderField {
  Date = 'DATE',
  MallDistance = 'MALL_DISTANCE',
  MostPopular = 'MOST_POPULAR',
  Name = 'NAME',
  Price = 'PRICE',
  PublicationDate = 'PUBLICATION_DATE',
  SellingPrice = 'SELLING_PRICE'
}

export type ProductVisibility = Node & ObjectWithMetadata & {
  __typename?: 'ProductVisibility';
  hasInStockVariant?: Maybe<Scalars['Boolean']['output']>;
  hasOutOfStockVariant?: Maybe<Scalars['Boolean']['output']>;
  highestDiscountVariant?: Maybe<ProductVariant>;
  id: Scalars['ID']['output'];
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  isVisible?: Maybe<Scalars['Boolean']['output']>;
  kendraQueryId?: Maybe<Scalars['String']['output']>;
  kendraResultId?: Maybe<Scalars['String']['output']>;
  maxDiscountAmount?: Maybe<Scalars['Float']['output']>;
  maxDiscountedVariantRetailPriceAmount?: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  popularity: Scalars['Int']['output'];
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  product: Product;
  republishProductAt?: Maybe<Scalars['DateTime']['output']>;
  tenant?: Maybe<Tenant>;
  unpublishIndefinitely?: Maybe<Scalars['Boolean']['output']>;
};

export type ProductVisibilityBulkUnpublish = {
  __typename?: 'ProductVisibilityBulkUnpublish';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVisibilities?: Maybe<Array<Maybe<ProductVisibility>>>;
};

export type ProductVisibilityBulkUpdate = {
  __typename?: 'ProductVisibilityBulkUpdate';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVisibility: Array<Maybe<ProductVisibility>>;
};

export type ProductVisibilityCountableConnection = {
  __typename?: 'ProductVisibilityCountableConnection';
  edges: Array<ProductVisibilityCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ProductVisibilityCountableEdge = {
  __typename?: 'ProductVisibilityCountableEdge';
  cursor: Scalars['String']['output'];
  node: ProductVisibility;
};

export type ProductVisibilityFilterInput = {
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  tenant?: InputMaybe<Scalars['String']['input']>;
};

export type ProductVisibilityInput = {
  isAvailable: Scalars['Boolean']['input'];
  isVisible: Scalars['Boolean']['input'];
  product: Scalars['ID']['input'];
  republishProductAt?: InputMaybe<Scalars['DateTime']['input']>;
  tenant: Scalars['ID']['input'];
  unpublishIndefinitely?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductVisibilityUnpublishInput = {
  productVisibilityId: Scalars['ID']['input'];
  republishProductAt?: InputMaybe<Scalars['DateTime']['input']>;
  unpublishIndefinitely: Scalars['Boolean']['input'];
};

export type ProductsCategories = {
  __typename?: 'ProductsCategories';
  categories?: Maybe<Array<Maybe<Category>>>;
  products?: Maybe<Array<Maybe<Product>>>;
};

export type Query = {
  __typename?: 'Query';
  _entities?: Maybe<Array<Maybe<_Entity>>>;
  _service?: Maybe<_Service>;
  access?: Maybe<Access>;
  accessGroup?: Maybe<AccessGroup>;
  accessGroups?: Maybe<AccessGroupCountableConnection>;
  accesses?: Maybe<AccessCountableConnection>;
  accountActivityLog?: Maybe<AccountActivityLog>;
  accountActivityLogs?: Maybe<AccountActivityLogCountableConnection>;
  activityLog?: Maybe<ActivityLog>;
  activityLogs?: Maybe<ActivityLogCountableConnection>;
  address?: Maybe<Address>;
  addressValidationRules?: Maybe<AddressValidationData>;
  announcement?: Maybe<Announcement>;
  announcements?: Maybe<AnnouncementCountableConnection>;
  app?: Maybe<App>;
  appConfig?: Maybe<AppConfig>;
  appConfigs?: Maybe<AppConfigCountableConnection>;
  applicableEvouchers?: Maybe<VoucherCountableConnection>;
  applicableShippingMethods?: Maybe<ShippingMethodCountableConnection>;
  apps?: Maybe<AppCountableConnection>;
  appsInstallations: Array<AppInstallation>;
  attribute?: Maybe<Attribute>;
  attributes?: Maybe<AttributeCountableConnection>;
  banner?: Maybe<Banner>;
  banners?: Maybe<BannerCountableConnection>;
  bins?: Maybe<BinCountableConnection>;
  brand?: Maybe<Brand>;
  brandGroup?: Maybe<BrandGroup>;
  brandGroups?: Maybe<BrandGroupCountableConnection>;
  brandPrivate?: Maybe<BrandPrivate>;
  brandTag?: Maybe<BrandTag>;
  brandTags?: Maybe<BrandTagCountableConnection>;
  brands?: Maybe<BrandCountableConnection>;
  brandsPrivate?: Maybe<BrandPrivateCountableConnection>;
  cart?: Maybe<Cart>;
  cartSummaries?: Maybe<CartSummaries>;
  carts?: Maybe<CartCountableConnection>;
  categories?: Maybe<CategoryCountableConnection>;
  category?: Maybe<Category>;
  checkout?: Maybe<Checkout>;
  checkoutLine?: Maybe<CheckoutLine>;
  checkoutLines?: Maybe<CheckoutLineCountableConnection>;
  checkoutVouchers?: Maybe<VoucherCountableConnection>;
  checkouts?: Maybe<CheckoutCountableConnection>;
  choice?: Maybe<Choice>;
  choices?: Maybe<ChoiceCountableConnection>;
  cluster?: Maybe<Cluster>;
  clusters?: Maybe<ClusterCountableConnection>;
  collection?: Maybe<Collection>;
  collections?: Maybe<CollectionCountableConnection>;
  coupon?: Maybe<Coupon>;
  couponCollection?: Maybe<CouponCollection>;
  couponCollections?: Maybe<CouponCollectionCountableConnection>;
  couponRedemptions?: Maybe<CouponRedemptionCountableConnection>;
  coupons?: Maybe<CouponCountableConnection>;
  customerCoupon?: Maybe<Coupon>;
  customerCoupons?: Maybe<CouponCountableConnection>;
  customerSale?: Maybe<Sale>;
  customerSales?: Maybe<SaleCountableConnection>;
  customerVoucher?: Maybe<Voucher>;
  customerVouchers?: Maybe<VoucherCountableConnection>;
  customers?: Maybe<UserCountableConnection>;
  digitalContent?: Maybe<DigitalContent>;
  digitalContents?: Maybe<DigitalContentCountableConnection>;
  discountUploadJob?: Maybe<DiscountUploadJob>;
  draftOrders?: Maybe<OrderCountableConnection>;
  dropOffLocation?: Maybe<DropOffLocation>;
  dropOffLocations?: Maybe<DropOffLocationCountableConnection>;
  dynamicLink?: Maybe<DynamicLink>;
  dynamicLinks?: Maybe<DynamicLinkCountableConnection>;
  exportFile?: Maybe<ExportFile>;
  exportFiles?: Maybe<ExportFileCountableConnection>;
  getApplicableVouchers?: Maybe<VoucherCountableConnection>;
  giftCard?: Maybe<GiftCard>;
  giftCards?: Maybe<GiftCardCountableConnection>;
  homeLocation?: Maybe<HomeLocation>;
  homeLocations?: Maybe<HomeLocationCountableConnection>;
  homepageEvents?: Maybe<OrderEventCountableConnection>;
  mall?: Maybe<Mall>;
  mallShippingMethodActivityLog?: Maybe<MallShippingMethodActivityLog>;
  mallShippingMethodActivityLogs?: Maybe<MallShippingMethodActivityLogCountableConnection>;
  malls?: Maybe<MallCountableConnection>;
  me?: Maybe<User>;
  menu?: Maybe<Menu>;
  menuItem?: Maybe<MenuItem>;
  menuItems?: Maybe<MenuItemCountableConnection>;
  menus?: Maybe<MenuCountableConnection>;
  order?: Maybe<Order>;
  orderByToken?: Maybe<Order>;
  orderLine?: Maybe<OrderLine>;
  orderLinesByTenant?: Maybe<OrderLineCountableConnection>;
  orders?: Maybe<OrderCountableConnection>;
  ordersTotal?: Maybe<TaxedMoney>;
  otp?: Maybe<Otp>;
  otps?: Maybe<OtpCountableConnection>;
  page?: Maybe<Page>;
  pages?: Maybe<PageCountableConnection>;
  pauseReason?: Maybe<ServicePauseReason>;
  pauseReasons?: Maybe<ServicePauseReasonCountableConnection>;
  payment?: Maybe<Payment>;
  payments?: Maybe<PaymentCountableConnection>;
  pcb?: Maybe<Pcb>;
  permissionGroup?: Maybe<Group>;
  permissionGroups?: Maybe<GroupCountableConnection>;
  plugin?: Maybe<Plugin>;
  plugins?: Maybe<PluginCountableConnection>;
  popularSearches?: Maybe<Array<Maybe<PopularSearches>>>;
  product?: Maybe<Product>;
  productTag?: Maybe<ProductTag>;
  productTags?: Maybe<ProductTagCountableConnection>;
  productType?: Maybe<ProductType>;
  productTypes?: Maybe<ProductTypeCountableConnection>;
  productUploadJob?: Maybe<ProductUploadJob>;
  productVariant?: Maybe<ProductVariant>;
  productVariants?: Maybe<ProductVariantCountableConnection>;
  productVisibilities?: Maybe<ProductVisibilityCountableConnection>;
  products?: Maybe<ProductCountableConnection>;
  productsCategories?: Maybe<ProductsCategories>;
  rack?: Maybe<Rack>;
  racks?: Maybe<RackCountableConnection>;
  remittance?: Maybe<Remittance>;
  remittanceConfig?: Maybe<RemittanceConfig>;
  remittanceConfigs?: Maybe<RemittanceConfigCountableConnection>;
  remittanceOrders?: Maybe<OrderCountableConnection>;
  remittances?: Maybe<RemittanceCountableConnection>;
  reportProductSales?: Maybe<ProductVariantCountableConnection>;
  reservation?: Maybe<Reservation>;
  reservationActivityLog?: Maybe<ReservationActivityLog>;
  reservationActivityLogs?: Maybe<ReservationActivityLogCountableConnection>;
  reservations?: Maybe<ReservationCountableConnection>;
  riderDispatchBatch?: Maybe<RiderDispatchBatch>;
  riderDispatchBatches?: Maybe<RiderDispatchBatchCountableConnection>;
  riderRemittances?: Maybe<TaxedMoney>;
  sale?: Maybe<Sale>;
  saleValidate?: Maybe<SaleValidate>;
  sales?: Maybe<SaleCountableConnection>;
  searchHistory?: Maybe<SearchHistoryCountableConnection>;
  /** @deprecated Use the `app` query instead. This field will be removed after 2020-07-31. */
  serviceAccount?: Maybe<ServiceAccount>;
  /** @deprecated Use the `apps` query instead. This field will be removed after 2020-07-31. */
  serviceAccounts?: Maybe<ServiceAccountCountableConnection>;
  servicePause?: Maybe<ServicePause>;
  servicePauses?: Maybe<ServicePauseCountableConnection>;
  shipment?: Maybe<Shipment>;
  shipments?: Maybe<ShipmentCountableConnection>;
  shippingZone?: Maybe<ShippingZone>;
  shippingZones?: Maybe<ShippingZoneCountableConnection>;
  shop: Shop;
  shopifyBrandSyncJob?: Maybe<ShopifyBrandSyncJob>;
  shopifyInStorePickupLocations?: Maybe<InStorePickupLocationCountableConnection>;
  smMarketsToken?: Maybe<MarketToken>;
  staffUsers?: Maybe<UserCountableConnection>;
  stock?: Maybe<Stock>;
  stockHistories?: Maybe<StockHistoryCountableConnection>;
  stocks?: Maybe<StockCountableConnection>;
  storeOrder?: Maybe<StoreOrder>;
  storeOrders?: Maybe<StoreOrderCountableConnection>;
  storeOrdersTotal?: Maybe<TaxedMoney>;
  storePopularities?: Maybe<StorePopularityCountableConnection>;
  storePopularity?: Maybe<StorePopularity>;
  taskArea?: Maybe<TaskArea>;
  taskAreas?: Maybe<TaskAreaCountableConnection>;
  taxTypes?: Maybe<Array<Maybe<TaxType>>>;
  template?: Maybe<Template>;
  templates?: Maybe<TemplateCountableConnection>;
  tenant?: Maybe<Tenant>;
  tenantPrivate?: Maybe<TenantPrivate>;
  tenants?: Maybe<TenantCountableConnection>;
  tenantsPrivate?: Maybe<TenantPrivateCountableConnection>;
  translation?: Maybe<TranslatableItem>;
  translations?: Maybe<TranslatableItemConnection>;
  user?: Maybe<User>;
  voucher?: Maybe<Voucher>;
  voucherGroup?: Maybe<VoucherGroup>;
  voucherGroups?: Maybe<VoucherGroupCountableConnection>;
  voucherJob?: Maybe<VoucherJob>;
  voucherJobBulk?: Maybe<VoucherJobBulk>;
  voucherTenant?: Maybe<VoucherTenant>;
  voucherTenants?: Maybe<VoucherTenantCountableConnection>;
  vouchers?: Maybe<VoucherCountableConnection>;
  warehouse?: Maybe<Warehouse>;
  warehouses?: Maybe<WarehouseCountableConnection>;
  webhook?: Maybe<Webhook>;
  webhookEvents?: Maybe<Array<Maybe<WebhookEvent>>>;
  webhookSamplePayload?: Maybe<Scalars['JSONString']['output']>;
  /** @deprecated Use webhooks field on app(s) query instead. This field will be removed after 2020-07-31. */
  webhooks?: Maybe<WebhookCountableConnection>;
};


export type Query_EntitiesArgs = {
  representations?: InputMaybe<Array<InputMaybe<Scalars['_Any']['input']>>>;
};


export type QueryAccessArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccessGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccessGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AccessGroupInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAccessesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAccountActivityLogArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccountActivityLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ActivityLogFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ActivityLogSortingInput>;
};


export type QueryActivityLogArgs = {
  id: Scalars['ID']['input'];
};


export type QueryActivityLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ActivityLogFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ActivityLogSortingInput>;
};


export type QueryAddressArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAddressValidationRulesArgs = {
  city?: InputMaybe<Scalars['String']['input']>;
  cityArea?: InputMaybe<Scalars['String']['input']>;
  countryArea?: InputMaybe<Scalars['String']['input']>;
  countryCode: CountryCode;
};


export type QueryAnnouncementArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAnnouncementsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AnnouncementInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<AnnouncementSortingInput>;
};


export type QueryAppArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAppConfigArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAppConfigsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AppConfigInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<AppConfigSortingInput>;
};


export type QueryApplicableEvouchersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VoucherFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<VoucherSortingInput>;
};


export type QueryApplicableShippingMethodsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  checkoutId: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAppsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AppFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<AppSortingInput>;
};


export type QueryAttributeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAttributesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AttributeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<AttributeSortingInput>;
};


export type QueryBannerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBannersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BannerInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<BannerSortingInput>;
};


export type QueryBinsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBrandArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBrandGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBrandGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  fetchPopularStores?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<BrandGroupInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<BrandGroupSortingInput>;
};


export type QueryBrandPrivateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBrandTagArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBrandTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BrandTagInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBrandsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BrandInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<BrandSortingInput>;
  status?: InputMaybe<SmopStatusEnum>;
};


export type QueryBrandsPrivateArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<BrandInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<SmopStatusEnum>;
};


export type QueryCartArgs = {
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryCartSummariesArgs = {
  filter?: InputMaybe<CartSummaryFilterInput>;
};


export type QueryCartsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CartFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CartSortingInput>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CategoryFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  levels?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  onMall?: InputMaybe<Scalars['ID']['input']>;
  sortBy?: InputMaybe<CategorySortingInput>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCheckoutArgs = {
  token?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryCheckoutLineArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCheckoutLinesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCheckoutVouchersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  checkoutId: Scalars['ID']['input'];
  filter?: InputMaybe<VoucherFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<VoucherSortingInput>;
};


export type QueryCheckoutsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryChoiceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryChoicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryClusterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryClustersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ClusterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  onMall?: InputMaybe<Scalars['ID']['input']>;
  sortBy?: InputMaybe<CollectionSortingInput>;
};


export type QueryCouponArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCouponCollectionArgs = {
  instanceId: Scalars['ID']['input'];
  useValidation?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCouponCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CouponCollectionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CouponCollectionSortingInput>;
};


export type QueryCouponRedemptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CouponRedemptionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CouponRedemptionSortingInput>;
};


export type QueryCouponsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CouponFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CouponSortingInput>;
};


export type QueryCustomerCouponArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerCouponsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CouponFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CouponSortingInput>;
};


export type QueryCustomerSaleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerSalesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SaleFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<SaleSortingInput>;
};


export type QueryCustomerVoucherArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerVouchersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VoucherFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<VoucherSortingInput>;
};


export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CustomerFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<UserSortingInput>;
};


export type QueryDigitalContentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDigitalContentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDiscountUploadJobArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDraftOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<ReportingPeriod>;
  filter?: InputMaybe<OrderDraftFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<OrderSortingInput>;
};


export type QueryDropOffLocationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDropOffLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DropOffLocationInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDynamicLinkArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDynamicLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryExportFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryExportFilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ExportFileFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ExportFileSortingInput>;
};


export type QueryGetApplicableVouchersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  checkoutId: Scalars['ID']['input'];
  filter?: InputMaybe<VoucherFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<VoucherSortingInput>;
};


export type QueryGiftCardArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGiftCardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHomeLocationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHomeLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WarehouseFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<WarehouseSortingInput>;
};


export type QueryHomepageEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMallArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMallShippingMethodActivityLogArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMallShippingMethodActivityLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MallActivityLogInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ActivityLogSortingInput>;
};


export type QueryMallsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MallInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<MallSortingInput>;
  status?: InputMaybe<SmopStatusEnum>;
};


export type QueryMenuArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMenuItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMenuItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MenuItemFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<MenuItemSortingInput>;
};


export type QueryMenusArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MenuFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<MenuSortingInput>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderByTokenArgs = {
  token: Scalars['UUID']['input'];
};


export type QueryOrderLineArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderLinesByTenantArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['ID']['input']>;
  tenant: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<ReportingPeriod>;
  filter?: InputMaybe<OrderFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<OrderSortingInput>;
  status?: InputMaybe<OrderStatusFilter>;
};


export type QueryOrdersTotalArgs = {
  period?: InputMaybe<ReportingPeriod>;
};


export type QueryOtpArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOtpsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<OtpInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<PageSortingInput>;
};


export type QueryPauseReasonArgs = {
  reasonId: Scalars['ID']['input'];
};


export type QueryPauseReasonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPaymentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  referenceNo?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPaymentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPcbArgs = {
  filename?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPermissionGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPermissionGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PermissionGroupFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<PermissionGroupSortingInput>;
};


export type QueryPluginArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPluginsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PluginFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<PluginSortingInput>;
};


export type QueryPopularSearchesArgs = {
  combine?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  pastDays?: InputMaybe<Scalars['Int']['input']>;
  scope?: InputMaybe<SearchScopeEnum>;
  scopes?: InputMaybe<Array<InputMaybe<SearchScopeEnum>>>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductTagArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductTagFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductTypeFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ProductTypeSortingInput>;
};


export type QueryProductUploadJobArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductVariantArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductVariantFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductVisibilitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductVisibilitiesFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  pushDownOos?: InputMaybe<Scalars['Boolean']['input']>;
  sortBy?: InputMaybe<ProductVisibilitiesOrder>;
  useKendra?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  pushDownOos?: InputMaybe<Scalars['Boolean']['input']>;
  sortBy?: InputMaybe<ProductOrder>;
  stockAvailability?: InputMaybe<StockAvailability>;
  userViewInfo?: InputMaybe<ProductUserViewInfoInput>;
};


export type QueryProductsCategoriesArgs = {
  categoryFilter?: InputMaybe<CategoryFilterInput>;
  categoryFirst?: InputMaybe<Scalars['Int']['input']>;
  categorySortBy?: InputMaybe<CategorySortingInput>;
  productFilter?: InputMaybe<ProductFilterInput>;
  productFirst?: InputMaybe<Scalars['Int']['input']>;
  productSortBy?: InputMaybe<ProductOrder>;
};


export type QueryRackArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RackInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRemittanceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRemittanceConfigArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  mallId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRemittanceConfigsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RemittanceConfigFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRemittanceOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RemittanceOrderFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<RemittanceOrderSortingInput>;
};


export type QueryRemittancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RemittanceFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<RemittanceSortingInput>;
};


export type QueryReportProductSalesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  period: ReportingPeriod;
  tenantId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryReservationArgs = {
  reservationId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryReservationActivityLogArgs = {
  reservationActivityLogId: Scalars['ID']['input'];
};


export type QueryReservationActivityLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ReservationActivityLogInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ActivityLogSortingInput>;
};


export type QueryReservationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ReservationFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ReservationSortingInput>;
};


export type QueryRiderDispatchBatchArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRiderDispatchBatchesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<RiderDispatchBatchFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<RiderDispatchBatchSortingInput>;
};


export type QueryRiderRemittancesArgs = {
  riderId: Scalars['String']['input'];
  status: RemittanceStatusEnum;
};


export type QuerySaleArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySaleValidateArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySalesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SaleFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<SaleSortingInput>;
};


export type QuerySearchHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<SearchHistoryFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<SearchHistoryOrder>;
  unique?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryServiceAccountArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServiceAccountsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ServiceAccountFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ServiceAccountSortingInput>;
};


export type QueryServicePauseArgs = {
  pauseId: Scalars['ID']['input'];
};


export type QueryServicePausesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryShipmentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShipmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryShippingZoneArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShippingZonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryShopifyBrandSyncJobArgs = {
  pid: Scalars['UUID']['input'];
};


export type QueryShopifyInStorePickupLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStaffUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StaffUserInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<UserSortingInput>;
};


export type QueryStockArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStockHistoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StockHistoryFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<StockHistorySortingInput>;
};


export type QueryStocksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StockFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<StockSortingInput>;
};


export type QueryStoreOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStoreOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StoreOrderFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<StoreOrderSortingInput>;
};


export type QueryStoreOrdersTotalArgs = {
  period?: InputMaybe<ReportingPeriod>;
  tenantId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryStorePopularitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mallDistance: Array<InputMaybe<MallDistanceInput>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<StorePopularityOrder>;
};


export type QueryStorePopularityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaskAreaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaskAreasArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TaskAreaInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTemplateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTemplatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TemplateInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<TemplateSortingInput>;
};


export type QueryTenantArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTenantPrivateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTenantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['ID']['input']>;
  filter?: InputMaybe<TenantInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mall?: InputMaybe<Scalars['ID']['input']>;
  mallDistance?: InputMaybe<Array<InputMaybe<MallDistanceInput>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<TenantSortingInput>;
  status?: InputMaybe<SmopStatusEnum>;
};


export type QueryTenantsPrivateArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['ID']['input']>;
  filter?: InputMaybe<TenantInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mall?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<SmopStatusEnum>;
};


export type QueryTranslationArgs = {
  id: Scalars['ID']['input'];
  kind: TranslatableKinds;
};


export type QueryTranslationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  kind: TranslatableKinds;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVoucherArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVoucherGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVoucherGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VoucherGroupFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<VoucherGroupSortingInput>;
};


export type QueryVoucherJobArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVoucherJobBulkArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVoucherTenantArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVoucherTenantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VoucherTenantFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<VoucherTenantSortingInput>;
};


export type QueryVouchersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<VoucherFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<VoucherSortingInput>;
};


export type QueryWarehouseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWarehousesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WarehouseFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<WarehouseSortingInput>;
};


export type QueryWebhookArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWebhookSamplePayloadArgs = {
  eventType: WebhookSampleEventTypeEnum;
};


export type QueryWebhooksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<WebhookFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<WebhookSortingInput>;
};

export type Rack = Node & ObjectWithMetadata & {
  __typename?: 'Rack';
  availableBins?: Maybe<Array<Maybe<Bin>>>;
  bins?: Maybe<BinCountableConnection>;
  dropOffLocation?: Maybe<DropOffLocation>;
  id: Scalars['ID']['output'];
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  name: Scalars['String']['output'];
  prefix: Scalars['String']['output'];
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
};


export type RackBinsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type RackCountableConnection = {
  __typename?: 'RackCountableConnection';
  edges: Array<RackCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type RackCountableEdge = {
  __typename?: 'RackCountableEdge';
  cursor: Scalars['String']['output'];
  node: Rack;
};

export type RackCreate = {
  __typename?: 'RackCreate';
  bins?: Maybe<Array<Maybe<Bin>>>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  rack?: Maybe<Rack>;
  rackError: Array<RackError>;
};

export type RackCreateInput = {
  dropOffLocationId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  prefix: Scalars['String']['input'];
  templateId: Scalars['ID']['input'];
  totalBin: Scalars['Int']['input'];
};

export type RackDelete = {
  __typename?: 'RackDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  rack?: Maybe<Rack>;
  rackError: Array<RackError>;
};

export type RackError = {
  __typename?: 'RackError';
  code: TaskAreaErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type RackInput = {
  dropOffLocation?: InputMaybe<Scalars['ID']['input']>;
  template?: InputMaybe<Scalars['ID']['input']>;
};

export type RackUpdate = {
  __typename?: 'RackUpdate';
  bins?: Maybe<Array<Maybe<Bin>>>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  rack?: Maybe<Rack>;
  rackError: Array<RackError>;
};

export type RateKendraSearchResults = {
  __typename?: 'RateKendraSearchResults';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  status?: Maybe<SearchRatingStatus>;
};

export type ReducedRate = {
  __typename?: 'ReducedRate';
  rate: Scalars['Float']['output'];
  rateType: TaxRateType;
};

export type RefreshGrabExpressStatus = {
  __typename?: 'RefreshGrabExpressStatus';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type RefreshPandagoAutoStatus = {
  __typename?: 'RefreshPandagoAutoStatus';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type RefreshToken = {
  __typename?: 'RefreshToken';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Remittance = Node & {
  __typename?: 'Remittance';
  aging?: Maybe<Scalars['Int']['output']>;
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  institutionCode?: Maybe<Scalars['String']['output']>;
  isProcessing?: Maybe<Scalars['Boolean']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  receiptImage?: Maybe<Image>;
  receiptUploadedAt?: Maybe<Scalars['DateTime']['output']>;
  remittanceEvents?: Maybe<Array<Maybe<RemittanceEvent>>>;
  remittanceLines?: Maybe<Array<Maybe<RemittanceLine>>>;
  remittanceNo?: Maybe<Scalars['String']['output']>;
  remittedAt?: Maybe<Scalars['DateTime']['output']>;
  remitter?: Maybe<User>;
  status?: Maybe<RemittanceStatusEnum>;
  totalAmount?: Maybe<Scalars['Decimal']['output']>;
};

export type RemittanceCancel = {
  __typename?: 'RemittanceCancel';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  remittance?: Maybe<Remittance>;
  remittanceErrors: Array<RemittanceError>;
};

export type RemittanceConfig = Node & {
  __typename?: 'RemittanceConfig';
  codLimit?: Maybe<Scalars['Float']['output']>;
  dailyNotifTimes?: Maybe<Array<Maybe<Scalars['Time']['output']>>>;
  enabledAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isEnable: Scalars['Boolean']['output'];
  minRemittanceLimit?: Maybe<Scalars['Float']['output']>;
  reminderIsActive: Scalars['Boolean']['output'];
};

export type RemittanceConfigCountableConnection = {
  __typename?: 'RemittanceConfigCountableConnection';
  edges: Array<RemittanceConfigCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type RemittanceConfigCountableEdge = {
  __typename?: 'RemittanceConfigCountableEdge';
  cursor: Scalars['String']['output'];
  node: RemittanceConfig;
};

export type RemittanceConfigFilterInput = {
  mall?: InputMaybe<Scalars['ID']['input']>;
};

export type RemittanceConfigUpdateInput = {
  activateReminder?: InputMaybe<Scalars['Boolean']['input']>;
  codLimit?: InputMaybe<Scalars['Decimal']['input']>;
  dailyRemittanceNotifTimes?: InputMaybe<Array<InputMaybe<RemittanceNotifTimeEnum>>>;
  minRemittanceLimit?: InputMaybe<Scalars['Decimal']['input']>;
};

export type RemittanceCountableConnection = {
  __typename?: 'RemittanceCountableConnection';
  edges: Array<RemittanceCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type RemittanceCountableEdge = {
  __typename?: 'RemittanceCountableEdge';
  cursor: Scalars['String']['output'];
  node: Remittance;
};

export type RemittanceError = {
  __typename?: 'RemittanceError';
  code: RemittanceErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum RemittanceErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidRemittance = 'INVALID_REMITTANCE',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type RemittanceEvent = Node & {
  __typename?: 'RemittanceEvent';
  datetime?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  type?: Maybe<RemittanceEventTypeEnum>;
  user?: Maybe<User>;
};

export enum RemittanceEventTypeEnum {
  Cancelled = 'CANCELLED',
  Processing = 'PROCESSING',
  Remitted = 'REMITTED',
  ToRemit = 'TO_REMIT'
}

export type RemittanceFilterInput = {
  createdAt?: InputMaybe<DateTimeRangeInput>;
  hasReceipt?: InputMaybe<Scalars['Boolean']['input']>;
  remittanceId?: InputMaybe<Scalars['String']['input']>;
  remittedAt?: InputMaybe<DateTimeRangeInput>;
  remitter?: InputMaybe<RemitterNameInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<RemittanceStatusEnum>>>;
};

export type RemittanceLine = Node & {
  __typename?: 'RemittanceLine';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  order?: Maybe<Order>;
  remittance?: Maybe<Remittance>;
};

export enum RemittanceManualAdjustmentStatusEnum {
  Completed = 'COMPLETED',
  ForAdjustment = 'FOR_ADJUSTMENT',
  Unassigned = 'UNASSIGNED'
}

export enum RemittanceNotifTimeEnum {
  Utc_00_00 = 'UTC_00_00',
  Utc_01_00 = 'UTC_01_00',
  Utc_02_00 = 'UTC_02_00',
  Utc_03_00 = 'UTC_03_00',
  Utc_04_00 = 'UTC_04_00',
  Utc_05_00 = 'UTC_05_00',
  Utc_06_00 = 'UTC_06_00',
  Utc_07_00 = 'UTC_07_00',
  Utc_08_00 = 'UTC_08_00',
  Utc_09_00 = 'UTC_09_00',
  Utc_10_00 = 'UTC_10_00',
  Utc_11_00 = 'UTC_11_00',
  Utc_12_00 = 'UTC_12_00',
  Utc_13_00 = 'UTC_13_00',
  Utc_14_00 = 'UTC_14_00',
  Utc_15_00 = 'UTC_15_00',
  Utc_16_00 = 'UTC_16_00',
  Utc_17_00 = 'UTC_17_00',
  Utc_18_00 = 'UTC_18_00',
  Utc_19_00 = 'UTC_19_00',
  Utc_20_00 = 'UTC_20_00',
  Utc_21_00 = 'UTC_21_00',
  Utc_22_00 = 'UTC_22_00',
  Utc_23_00 = 'UTC_23_00'
}

export type RemittanceOrderFilterInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Array<InputMaybe<CourierTypeEnum>>>;
  completedAt?: InputMaybe<DateTimeRangeInput>;
  createdAt?: InputMaybe<DateTimeRangeInput>;
  deliveryTypes?: InputMaybe<Array<InputMaybe<DeliveryTypeEnum>>>;
  hasReceipt?: InputMaybe<Scalars['Boolean']['input']>;
  hasRemittanceId?: InputMaybe<Scalars['Boolean']['input']>;
  isPaymentCollected?: InputMaybe<Scalars['Boolean']['input']>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  motherOrder?: InputMaybe<Scalars['String']['input']>;
  orderCode?: InputMaybe<Scalars['String']['input']>;
  paymentType?: InputMaybe<Scalars['String']['input']>;
  remittanceId?: InputMaybe<Scalars['String']['input']>;
  remittedAt?: InputMaybe<DateTimeRangeInput>;
  remitter?: InputMaybe<RemitterNameInput>;
  rider?: InputMaybe<RiderNameInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  shippedAt?: InputMaybe<DateTimeRangeInput>;
  smopStatus?: InputMaybe<Array<InputMaybe<SmopOrderStatusEnum>>>;
  status?: InputMaybe<Array<InputMaybe<RemittanceStatusEnum>>>;
  verticalType?: InputMaybe<Array<InputMaybe<StoreTypeEnum>>>;
};

export enum RemittanceOrderSortField {
  CreatedDate = 'CREATED_DATE'
}

export type RemittanceOrderSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: RemittanceOrderSortField;
};

export enum RemittanceSortField {
  CreationDate = 'CREATION_DATE',
  Status = 'STATUS'
}

export type RemittanceSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: RemittanceSortField;
};

export enum RemittanceStatusEnum {
  Cancelled = 'CANCELLED',
  ForBankConfirmation = 'FOR_BANK_CONFIRMATION',
  Remitted = 'REMITTED',
  ToRemit = 'TO_REMIT'
}

export type RemittanceUploadReceipt = {
  __typename?: 'RemittanceUploadReceipt';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  remittance?: Maybe<Remittance>;
  remittanceErrors: Array<RemittanceError>;
};

export type RemitterNameInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type ReorderInput = {
  id: Scalars['ID']['input'];
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export enum ReportingPeriod {
  ThisMonth = 'THIS_MONTH',
  Today = 'TODAY'
}

export type RequestEmailChange = {
  __typename?: 'RequestEmailChange';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type RequestPasswordReset = {
  __typename?: 'RequestPasswordReset';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type Reservation = Node & {
  __typename?: 'Reservation';
  alternateNo?: Maybe<Scalars['String']['output']>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  guestCount?: Maybe<Scalars['Int']['output']>;
  guestEmail?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mobileNo?: Maybe<Scalars['String']['output']>;
  processedAt?: Maybe<Scalars['DateTime']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  reservationCode?: Maybe<Scalars['String']['output']>;
  reservationDate?: Maybe<Scalars['DateTime']['output']>;
  reservationStatus?: Maybe<ReservationStatusEnum>;
  tenant?: Maybe<Tenant>;
  updatedBy?: Maybe<User>;
  updatedDate?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type ReservationActivityLog = Node & {
  __typename?: 'ReservationActivityLog';
  action: ReservationActivityLogAction;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  doer?: Maybe<User>;
  field?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  modelName: Scalars['String']['output'];
  newValues?: Maybe<Scalars['JSONString']['output']>;
  reservationCode?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export enum ReservationActivityLogAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export type ReservationActivityLogCountableConnection = {
  __typename?: 'ReservationActivityLogCountableConnection';
  edges: Array<ReservationActivityLogCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ReservationActivityLogCountableEdge = {
  __typename?: 'ReservationActivityLogCountableEdge';
  cursor: Scalars['String']['output'];
  node: ReservationActivityLog;
};

export type ReservationActivityLogInput = {
  action?: InputMaybe<ActivityLogActionsEnum>;
  createdAt?: InputMaybe<DateRangeInput>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  reservationCode?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  updatedBy?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReservationCancel = {
  __typename?: 'ReservationCancel';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  reservation?: Maybe<Reservation>;
  reservationErrors: Array<ReservationError>;
};

export type ReservationCountableConnection = {
  __typename?: 'ReservationCountableConnection';
  edges: Array<ReservationCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ReservationCountableEdge = {
  __typename?: 'ReservationCountableEdge';
  cursor: Scalars['String']['output'];
  node: Reservation;
};

export type ReservationCreate = {
  __typename?: 'ReservationCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  reservation?: Maybe<Reservation>;
  reservationErrors: Array<ReservationError>;
};

export type ReservationCreateInput = {
  alternateNo?: InputMaybe<Scalars['String']['input']>;
  customerName: Scalars['String']['input'];
  guestCount: Scalars['Int']['input'];
  guestEmail: Scalars['String']['input'];
  mobileNo: Scalars['String']['input'];
  remarks?: InputMaybe<Scalars['String']['input']>;
  reservationDate: Scalars['DateTime']['input'];
  reservationStatus: ReservationStatusEnum;
  tenantId: Scalars['ID']['input'];
};

export type ReservationError = {
  __typename?: 'ReservationError';
  code: ReservationErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum ReservationErrorCode {
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND'
}

export type ReservationFilterInput = {
  createdAt?: InputMaybe<DateRangeInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  reservationCode?: InputMaybe<Scalars['String']['input']>;
  reservationStatuses?: InputMaybe<Array<InputMaybe<ReservationStatusEnum>>>;
  withinPast3Months?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ReservationSortField {
  CreatedDate = 'CREATED_DATE',
  ReservationDate = 'RESERVATION_DATE',
  UpdatedDate = 'UPDATED_DATE'
}

export type ReservationSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: ReservationSortField;
};

export enum ReservationStatusEnum {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Confirmed = 'CONFIRMED',
  Declined = 'DECLINED',
  Pending = 'PENDING'
}

export type ReservationUpdateStatus = {
  __typename?: 'ReservationUpdateStatus';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  reservation?: Maybe<Reservation>;
  reservationErrors: Array<ReservationError>;
};

export type RiderCollectionTotal = {
  __typename?: 'RiderCollectionTotal';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
  totalAmount?: Maybe<Scalars['Decimal']['output']>;
};

export type RiderDispatchBatch = Node & ObjectWithMetadata & {
  __typename?: 'RiderDispatchBatch';
  batchCode?: Maybe<Scalars['String']['output']>;
  created: Scalars['DateTime']['output'];
  createdBy?: Maybe<User>;
  deliveryDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  orders?: Maybe<Array<Maybe<Order>>>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  rider?: Maybe<User>;
};

export type RiderDispatchBatchCountableConnection = {
  __typename?: 'RiderDispatchBatchCountableConnection';
  edges: Array<RiderDispatchBatchCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type RiderDispatchBatchCountableEdge = {
  __typename?: 'RiderDispatchBatchCountableEdge';
  cursor: Scalars['String']['output'];
  node: RiderDispatchBatch;
};

export type RiderDispatchBatchFilterInput = {
  batchCode?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<DateRangeInput>;
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  deliveryDate?: InputMaybe<DateRangeInput>;
  rider?: InputMaybe<Scalars['ID']['input']>;
  riderName?: InputMaybe<StaffNameInput>;
};

export enum RiderDispatchBatchSortField {
  CreationDate = 'CREATION_DATE',
  Number = 'NUMBER'
}

export type RiderDispatchBatchSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: RiderDispatchBatchSortField;
};

export type RiderNameInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type RiderPickUpLocation = Node & {
  __typename?: 'RiderPickUpLocation';
  deliveryCourier?: Maybe<DeliveryCourier>;
  id: Scalars['ID']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  remarks?: Maybe<Scalars['String']['output']>;
};

export type Sale = Node & {
  __typename?: 'Sale';
  categories?: Maybe<CategoryCountableConnection>;
  collections?: Maybe<CollectionCountableConnection>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isAppliedToAllMalls?: Maybe<Scalars['Boolean']['output']>;
  isAppliedToAllStores?: Maybe<Scalars['Boolean']['output']>;
  isCreatedBySeller?: Maybe<Scalars['Boolean']['output']>;
  malls?: Maybe<MallCountableConnection>;
  name: Scalars['String']['output'];
  productVariants?: Maybe<ProductVariantCountableConnection>;
  products?: Maybe<ProductCountableConnection>;
  startDate: Scalars['DateTime']['output'];
  status?: Maybe<DiscountStatusEnum>;
  tenants?: Maybe<TenantCountableConnection>;
  translation?: Maybe<SaleTranslation>;
  type: SaleType;
  value?: Maybe<Scalars['Float']['output']>;
};


export type SaleCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type SaleCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type SaleMallsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type SaleProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type SaleProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type SaleTenantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type SaleTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type SaleAddCatalogues = {
  __typename?: 'SaleAddCatalogues';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  sale?: Maybe<Sale>;
};

export type SaleBulkActivate = {
  __typename?: 'SaleBulkActivate';
  count: Scalars['Int']['output'];
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type SaleBulkDeactivate = {
  __typename?: 'SaleBulkDeactivate';
  count: Scalars['Int']['output'];
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type SaleBulkDelete = {
  __typename?: 'SaleBulkDelete';
  count: Scalars['Int']['output'];
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type SaleCatalogueInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  productVariants?: InputMaybe<Array<InputMaybe<SaleProductVariantInput>>>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type SaleCountableConnection = {
  __typename?: 'SaleCountableConnection';
  edges: Array<SaleCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type SaleCountableEdge = {
  __typename?: 'SaleCountableEdge';
  cursor: Scalars['String']['output'];
  node: Sale;
};

export type SaleCreate = {
  __typename?: 'SaleCreate';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  sale?: Maybe<Sale>;
};

export type SaleDelete = {
  __typename?: 'SaleDelete';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  sale?: Maybe<Sale>;
};

export type SaleFilterInput = {
  brand?: InputMaybe<Scalars['ID']['input']>;
  saleType?: InputMaybe<DiscountValueTypeEnum>;
  search?: InputMaybe<Scalars['String']['input']>;
  started?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<Array<InputMaybe<DiscountStatusEnum>>>;
};

export type SaleInput = {
  brand?: InputMaybe<Scalars['ID']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['DateTime']['input'];
  isAppliedToAllMalls: Scalars['Boolean']['input'];
  isAppliedToAllStores: Scalars['Boolean']['input'];
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startDate: Scalars['DateTime']['input'];
  tenants?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<DiscountValueTypeEnum>;
  value?: InputMaybe<Scalars['PositiveDecimal']['input']>;
};

export type SaleProductVariantInput = {
  product_variant: Scalars['ID']['input'];
  sellingPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  smoShare?: InputMaybe<Scalars['Decimal']['input']>;
  tenantShare?: InputMaybe<Scalars['Decimal']['input']>;
};

export type SaleRemoveCatalogues = {
  __typename?: 'SaleRemoveCatalogues';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  sale?: Maybe<Sale>;
};

export enum SaleSortField {
  EndDate = 'END_DATE',
  Name = 'NAME',
  SaleValue = 'SALE_VALUE',
  StartDate = 'START_DATE',
  Type = 'TYPE'
}

export type SaleSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: SaleSortField;
};

export type SaleTranslatableContent = Node & {
  __typename?: 'SaleTranslatableContent';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sale?: Maybe<Sale>;
  translation?: Maybe<SaleTranslation>;
};


export type SaleTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type SaleTranslate = {
  __typename?: 'SaleTranslate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  sale?: Maybe<Sale>;
  translationErrors: Array<TranslationError>;
};

export type SaleTranslation = Node & {
  __typename?: 'SaleTranslation';
  id: Scalars['ID']['output'];
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']['output']>;
};

export enum SaleType {
  AbsoluteValue = 'ABSOLUTE_VALUE',
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE'
}

export type SaleUpdate = {
  __typename?: 'SaleUpdate';
  discountErrors: Array<DiscountError>;
  errorVariantsCount?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  sale?: Maybe<Sale>;
};

export type SaleValidate = {
  __typename?: 'SaleValidate';
  errorVariantsCount?: Maybe<Scalars['Int']['output']>;
};

export type SearchHistory = Node & {
  __typename?: 'SearchHistory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  mall?: Maybe<Mall>;
  resultCount?: Maybe<Scalars['Int']['output']>;
  scope?: Maybe<SearchHistoryScope>;
  searchQuery?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};

export type SearchHistoryClear = {
  __typename?: 'SearchHistoryClear';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  status?: Maybe<SearchStatus>;
};

export type SearchHistoryCountableConnection = {
  __typename?: 'SearchHistoryCountableConnection';
  edges: Array<SearchHistoryCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type SearchHistoryCountableEdge = {
  __typename?: 'SearchHistoryCountableEdge';
  cursor: Scalars['String']['output'];
  node: SearchHistory;
};

export type SearchHistoryDelete = {
  __typename?: 'SearchHistoryDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  status?: Maybe<SearchStatus>;
};

export type SearchHistoryFilterInput = {
  scope?: InputMaybe<SearchScopeEnum>;
  scopes?: InputMaybe<Array<InputMaybe<SearchScopeEnum>>>;
  searchQuery?: InputMaybe<Scalars['String']['input']>;
};

export type SearchHistoryOrder = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: SearchHistoryOrderField;
};

export enum SearchHistoryOrderField {
  Recent = 'RECENT',
  SearchQuery = 'SEARCH_QUERY'
}

export enum SearchHistoryScope {
  Brand = 'BRAND',
  Category = 'CATEGORY',
  Collection = 'COLLECTION',
  Cyberzone = 'CYBERZONE',
  Discountedproducts = 'DISCOUNTEDPRODUCTS',
  Food = 'FOOD',
  General = 'GENERAL',
  Grocery = 'GROCERY',
  Homepage = 'HOMEPAGE',
  Pharmacy = 'PHARMACY',
  Smfulfilled = 'SMFULFILLED',
  Tenants = 'TENANTS'
}

export enum SearchOperationStatusEnum {
  Fail = 'FAIL',
  Noop = 'NOOP',
  Success = 'SUCCESS'
}

export type SearchRatingStatus = {
  __typename?: 'SearchRatingStatus';
  code?: Maybe<SearchOperationStatusEnum>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum SearchRatingTypeEnum {
  Feedback = 'FEEDBACK',
  Relevance = 'RELEVANCE'
}

export enum SearchResponseRatingEnum {
  NotRelevant = 'NOT_RELEVANT',
  Relevant = 'RELEVANT'
}

export enum SearchScopeEnum {
  Brand = 'BRAND',
  Category = 'CATEGORY',
  Collection = 'COLLECTION',
  Cyberzone = 'CYBERZONE',
  Discountedproducts = 'DISCOUNTEDPRODUCTS',
  Food = 'FOOD',
  General = 'GENERAL',
  Grocery = 'GROCERY',
  Homepage = 'HOMEPAGE',
  Pharmacy = 'PHARMACY',
  Smfulfilled = 'SMFULFILLED',
  Tenants = 'TENANTS'
}

export type SearchStatus = {
  __typename?: 'SearchStatus';
  code?: Maybe<SearchOperationStatusEnum>;
  message?: Maybe<Scalars['String']['output']>;
};

export type SelectedAttribute = {
  __typename?: 'SelectedAttribute';
  attribute: Attribute;
  values: Array<Maybe<AttributeValue>>;
};

export type SellerCreate = {
  __typename?: 'SellerCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

export type SeoInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceAccount = Node & ObjectWithMetadata & {
  __typename?: 'ServiceAccount';
  created?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  name?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  tokens?: Maybe<Array<Maybe<ServiceAccountToken>>>;
};

export type ServiceAccountClearPrivateMeta = {
  __typename?: 'ServiceAccountClearPrivateMeta';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  serviceAccount?: Maybe<ServiceAccount>;
};

export type ServiceAccountCountableConnection = {
  __typename?: 'ServiceAccountCountableConnection';
  edges: Array<ServiceAccountCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ServiceAccountCountableEdge = {
  __typename?: 'ServiceAccountCountableEdge';
  cursor: Scalars['String']['output'];
  node: ServiceAccount;
};

export type ServiceAccountCreate = {
  __typename?: 'ServiceAccountCreate';
  accountErrors: Array<AccountError>;
  authToken?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  serviceAccount?: Maybe<ServiceAccount>;
};

export type ServiceAccountDelete = {
  __typename?: 'ServiceAccountDelete';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  serviceAccount?: Maybe<ServiceAccount>;
};

export type ServiceAccountFilterInput = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceAccountInput = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<PermissionEnum>>>;
};

export enum ServiceAccountSortField {
  CreationDate = 'CREATION_DATE',
  ServiceAccountName = 'SERVICE_ACCOUNT_NAME'
}

export type ServiceAccountSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: ServiceAccountSortField;
};

export type ServiceAccountToken = Node & {
  __typename?: 'ServiceAccountToken';
  authToken?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type ServiceAccountTokenCreate = {
  __typename?: 'ServiceAccountTokenCreate';
  accountErrors: Array<AccountError>;
  authToken?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  serviceAccountToken?: Maybe<ServiceAccountToken>;
};

export type ServiceAccountTokenDelete = {
  __typename?: 'ServiceAccountTokenDelete';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  serviceAccountToken?: Maybe<ServiceAccountToken>;
};

export type ServiceAccountTokenInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  serviceAccount: Scalars['ID']['input'];
};

export type ServiceAccountUpdate = {
  __typename?: 'ServiceAccountUpdate';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  serviceAccount?: Maybe<ServiceAccount>;
};

export type ServiceAccountUpdatePrivateMeta = {
  __typename?: 'ServiceAccountUpdatePrivateMeta';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  serviceAccount?: Maybe<ServiceAccount>;
};

export type ServiceHours = Node & {
  __typename?: 'ServiceHours';
  closesAt: Scalars['Time']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  day: PickupLocationServiceTimeDay;
  id: Scalars['ID']['output'];
  isClosed: Scalars['Boolean']['output'];
  opensAt: Scalars['Time']['output'];
  pickupLocation: InStorePickupLocation;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServiceHoursCountableConnection = {
  __typename?: 'ServiceHoursCountableConnection';
  edges: Array<ServiceHoursCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ServiceHoursCountableEdge = {
  __typename?: 'ServiceHoursCountableEdge';
  cursor: Scalars['String']['output'];
  node: ServiceHours;
};

export type ServiceMallInput = {
  distanceFromMall?: InputMaybe<Scalars['Decimal']['input']>;
  latitude: Scalars['Decimal']['input'];
  longitude: Scalars['Decimal']['input'];
  mall: Scalars['ID']['input'];
  mapPlaceId?: InputMaybe<Scalars['String']['input']>;
};

export type ServicePause = Node & {
  __typename?: 'ServicePause';
  endedAt?: Maybe<Scalars['DateTime']['output']>;
  endedBy?: Maybe<User>;
  id: Scalars['ID']['output'];
  mall?: Maybe<Mall>;
  pauseReason?: Maybe<ServicePauseReason>;
  pauseType?: Maybe<Scalars['String']['output']>;
  reasonCode?: Maybe<Scalars['String']['output']>;
  reasonTitle?: Maybe<Scalars['String']['output']>;
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  startedBy?: Maybe<User>;
  tenant?: Maybe<TenantPrivate>;
};

export type ServicePauseConfig = Node & {
  __typename?: 'ServicePauseConfig';
  cluster?: Maybe<Cluster>;
  cooldownPeriod?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  mall?: Maybe<Mall>;
  maxExtension?: Maybe<Scalars['Int']['output']>;
  pauseDuration?: Maybe<Scalars['Int']['output']>;
};

export type ServicePauseCountableConnection = {
  __typename?: 'ServicePauseCountableConnection';
  edges: Array<ServicePauseCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ServicePauseCountableEdge = {
  __typename?: 'ServicePauseCountableEdge';
  cursor: Scalars['String']['output'];
  node: ServicePause;
};

export type ServicePauseError = {
  __typename?: 'ServicePauseError';
  code: ServicePauseErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum ServicePauseErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type ServicePauseReason = Node & {
  __typename?: 'ServicePauseReason';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  id: Scalars['ID']['output'];
  pauseType?: Maybe<Scalars['String']['output']>;
  reasonCode?: Maybe<Scalars['String']['output']>;
  reasonDetails?: Maybe<Scalars['String']['output']>;
  reasonTitle?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServicePauseReasonCountableConnection = {
  __typename?: 'ServicePauseReasonCountableConnection';
  edges: Array<ServicePauseReasonCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ServicePauseReasonCountableEdge = {
  __typename?: 'ServicePauseReasonCountableEdge';
  cursor: Scalars['String']['output'];
  node: ServicePauseReason;
};

export type SetCouponsToCollection = {
  __typename?: 'SetCouponsToCollection';
  assignedCoupons?: Maybe<Array<Maybe<Coupon>>>;
  couponCollection?: Maybe<CouponCollection>;
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  removedCoupons?: Maybe<Array<Maybe<Coupon>>>;
};

export type SetCouponsToCollectionInput = {
  assign?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  remove?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type SetDailyRemittanceConfig = {
  __typename?: 'SetDailyRemittanceConfig';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  mall?: Maybe<Mall>;
  remittanceConfig?: Maybe<RemittanceConfig>;
  remittanceErrors: Array<RemittanceError>;
};

export type SetMallAutoBookingConfig = {
  __typename?: 'SetMallAutoBookingConfig';
  autoBookingConfig?: Maybe<AutoBookingConfig>;
  autoBookingError: Array<AutoBookingError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  mall?: Maybe<Mall>;
};

export type SetPassword = {
  __typename?: 'SetPassword';
  accountErrors: Array<AccountError>;
  csrfToken?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type SetProductVisibility = {
  __typename?: 'SetProductVisibility';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVisibility?: Maybe<ProductVisibility>;
};

export type Shipment = Node & {
  __typename?: 'Shipment';
  airwayBill?: Maybe<Scalars['String']['output']>;
  carrier?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  order?: Maybe<Order>;
  pendingSince?: Maybe<Scalars['DateTime']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  status?: Maybe<SmopDeliveryStatusEnum>;
  targetDeliveryDate?: Maybe<Scalars['DateTime']['output']>;
  targetDispatchDate?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ShipmentCountableConnection = {
  __typename?: 'ShipmentCountableConnection';
  edges: Array<ShipmentCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ShipmentCountableEdge = {
  __typename?: 'ShipmentCountableEdge';
  cursor: Scalars['String']['output'];
  node: Shipment;
};

export type ShipmentCreate = {
  __typename?: 'ShipmentCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shipmentErrors: Array<ShipmentError>;
  shipments?: Maybe<Shipment>;
};

export type ShipmentCreateInput = {
  airwayBill?: InputMaybe<Scalars['String']['input']>;
  carrier?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  order: Scalars['ID']['input'];
  pendingSince?: InputMaybe<Scalars['DateTime']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  status: SmopDeliveryStatusEnum;
  targetDeliveryDate?: InputMaybe<Scalars['DateTime']['input']>;
  targetDispatchDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ShipmentError = {
  __typename?: 'ShipmentError';
  code: ShipmentErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum ShipmentErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type ShipmentUpdate = {
  __typename?: 'ShipmentUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shipmentErrors: Array<ShipmentError>;
  shipments?: Maybe<Shipment>;
};

export type ShipmentUpdateInput = {
  airwayBill?: InputMaybe<Scalars['String']['input']>;
  carrier?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  order: Scalars['ID']['input'];
  pendingSince?: InputMaybe<Scalars['DateTime']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  status: SmopDeliveryStatusEnum;
  targetDeliveryDate?: InputMaybe<Scalars['DateTime']['input']>;
  targetDispatchDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ShippingError = {
  __typename?: 'ShippingError';
  code: ShippingErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  warehouses?: Maybe<Array<Scalars['ID']['output']>>;
};

export enum ShippingErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  MaxLessThanMin = 'MAX_LESS_THAN_MIN',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type ShippingLabel = {
  __typename?: 'ShippingLabel';
  itemType?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  deliveryType?: Maybe<DeliveryTypeEnum>;
  error?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isCashAllowed?: Maybe<Scalars['Boolean']['output']>;
  maximumOrderPrice?: Maybe<Money>;
  maximumOrderWeight?: Maybe<Weight>;
  minimumOrderPrice?: Maybe<Money>;
  minimumOrderWeight?: Maybe<Weight>;
  minimumRequiredVersion?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Money>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  translation?: Maybe<ShippingMethodTranslation>;
  type?: Maybe<ShippingMethodTypeEnum>;
};


export type ShippingMethodTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ShippingMethodCountableConnection = {
  __typename?: 'ShippingMethodCountableConnection';
  edges: Array<ShippingMethodCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ShippingMethodCountableEdge = {
  __typename?: 'ShippingMethodCountableEdge';
  cursor: Scalars['String']['output'];
  node: ShippingMethod;
};

export type ShippingMethodTranslatableContent = Node & {
  __typename?: 'ShippingMethodTranslatableContent';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  shippingMethod?: Maybe<ShippingMethod>;
  translation?: Maybe<ShippingMethodTranslation>;
};


export type ShippingMethodTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ShippingMethodTranslation = Node & {
  __typename?: 'ShippingMethodTranslation';
  id: Scalars['ID']['output'];
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']['output']>;
};

export enum ShippingMethodTypeEnum {
  Price = 'PRICE',
  Weight = 'WEIGHT'
}

export type ShippingPriceBulkDelete = {
  __typename?: 'ShippingPriceBulkDelete';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
};

export type ShippingPriceCreate = {
  __typename?: 'ShippingPriceCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingPriceDelete = {
  __typename?: 'ShippingPriceDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingPriceInput = {
  deliveryType: DeliveryTypeEnum;
  isCashAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  maximumOrderPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  maximumOrderWeight?: InputMaybe<Scalars['WeightScalar']['input']>;
  minimumOrderPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  minimumOrderWeight?: InputMaybe<Scalars['WeightScalar']['input']>;
  minimumRequiredVersion?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  shippingZone?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<ShippingMethodTypeEnum>;
};

export type ShippingPriceTranslate = {
  __typename?: 'ShippingPriceTranslate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shippingMethod?: Maybe<ShippingMethod>;
  translationErrors: Array<TranslationError>;
};

export type ShippingPriceUpdate = {
  __typename?: 'ShippingPriceUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZone = Node & {
  __typename?: 'ShippingZone';
  countries?: Maybe<Array<Maybe<CountryDisplay>>>;
  default: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  priceRange?: Maybe<MoneyRange>;
  shippingMethods?: Maybe<Array<Maybe<ShippingMethod>>>;
  warehouses?: Maybe<Array<Maybe<Warehouse>>>;
};

export type ShippingZoneBulkDelete = {
  __typename?: 'ShippingZoneBulkDelete';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
};

export type ShippingZoneCountableConnection = {
  __typename?: 'ShippingZoneCountableConnection';
  edges: Array<ShippingZoneCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ShippingZoneCountableEdge = {
  __typename?: 'ShippingZoneCountableEdge';
  cursor: Scalars['String']['output'];
  node: ShippingZone;
};

export type ShippingZoneCreate = {
  __typename?: 'ShippingZoneCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneCreateInput = {
  addWarehouses?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  countries?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ShippingZoneDelete = {
  __typename?: 'ShippingZoneDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneUpdate = {
  __typename?: 'ShippingZoneUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
  shippingZone?: Maybe<ShippingZone>;
};

export type ShippingZoneUpdateInput = {
  addWarehouses?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  countries?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  removeWarehouses?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type Shop = {
  __typename?: 'Shop';
  authorizationKeys: Array<Maybe<AuthorizationKey>>;
  automaticFulfillmentDigitalProducts?: Maybe<Scalars['Boolean']['output']>;
  availablePaymentGateways: Array<PaymentGateway>;
  chargeTaxesOnShipping: Scalars['Boolean']['output'];
  companyAddress?: Maybe<Address>;
  countries: Array<CountryDisplay>;
  /** @deprecated This field will be removed in Saleor 3.0 */
  currencies: Array<Maybe<Scalars['String']['output']>>;
  customerSetPasswordUrl?: Maybe<Scalars['String']['output']>;
  defaultCountry?: Maybe<CountryDisplay>;
  /** @deprecated This field will be removed in Saleor 3.0 */
  defaultCurrency: Scalars['String']['output'];
  defaultDigitalMaxDownloads?: Maybe<Scalars['Int']['output']>;
  defaultDigitalUrlValidDays?: Maybe<Scalars['Int']['output']>;
  defaultMailSenderAddress?: Maybe<Scalars['String']['output']>;
  defaultMailSenderName?: Maybe<Scalars['String']['output']>;
  defaultWeightUnit?: Maybe<WeightUnitsEnum>;
  description?: Maybe<Scalars['String']['output']>;
  displayGrossPrices: Scalars['Boolean']['output'];
  domain: Domain;
  geolocalization?: Maybe<Geolocalization>;
  headerText?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `collection` query with the `slug` parameter. This field will be removed in Saleor 3.0 */
  homepageCollection?: Maybe<Collection>;
  includeTaxesInPrices: Scalars['Boolean']['output'];
  isFreshdeskSupportEnabled?: Maybe<Scalars['Boolean']['output']>;
  languages: Array<Maybe<LanguageDisplay>>;
  name: Scalars['String']['output'];
  /** @deprecated Fetch menus using the `menu` query with `slug` parameter. */
  navigation?: Maybe<Navigation>;
  permissions: Array<Maybe<Permission>>;
  phonePrefixes: Array<Maybe<Scalars['String']['output']>>;
  staffNotificationRecipients?: Maybe<Array<Maybe<StaffNotificationRecipient>>>;
  trackInventoryByDefault?: Maybe<Scalars['Boolean']['output']>;
  translation?: Maybe<ShopTranslation>;
};


export type ShopAvailablePaymentGatewaysArgs = {
  currency?: InputMaybe<Scalars['String']['input']>;
};


export type ShopCountriesArgs = {
  languageCode?: InputMaybe<LanguageCodeEnum>;
};


export type ShopTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type ShopAddressUpdate = {
  __typename?: 'ShopAddressUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shop?: Maybe<Shop>;
  shopErrors: Array<ShopError>;
};

export type ShopDomainUpdate = {
  __typename?: 'ShopDomainUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shop?: Maybe<Shop>;
  shopErrors: Array<ShopError>;
};

export type ShopError = {
  __typename?: 'ShopError';
  code: ShopErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum ShopErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  CannotFetchTaxRates = 'CANNOT_FETCH_TAX_RATES',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type ShopFetchTaxRates = {
  __typename?: 'ShopFetchTaxRates';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shop?: Maybe<Shop>;
  shopErrors: Array<ShopError>;
};

export type ShopSmManualSync = {
  __typename?: 'ShopSMManualSync';
  customCollectionsSynced?: Maybe<Scalars['Int']['output']>;
  errors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  productsSynced?: Maybe<Scalars['Int']['output']>;
  smartCollectionsSynced?: Maybe<Scalars['Int']['output']>;
};

export type ShopSettingsInput = {
  automaticFulfillmentDigitalProducts?: InputMaybe<Scalars['Boolean']['input']>;
  chargeTaxesOnShipping?: InputMaybe<Scalars['Boolean']['input']>;
  customerSetPasswordUrl?: InputMaybe<Scalars['String']['input']>;
  defaultDigitalMaxDownloads?: InputMaybe<Scalars['Int']['input']>;
  defaultDigitalUrlValidDays?: InputMaybe<Scalars['Int']['input']>;
  defaultMailSenderAddress?: InputMaybe<Scalars['String']['input']>;
  defaultMailSenderName?: InputMaybe<Scalars['String']['input']>;
  defaultWeightUnit?: InputMaybe<WeightUnitsEnum>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayGrossPrices?: InputMaybe<Scalars['Boolean']['input']>;
  headerText?: InputMaybe<Scalars['String']['input']>;
  includeTaxesInPrices?: InputMaybe<Scalars['Boolean']['input']>;
  isFreshdeskSupportEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  trackInventoryByDefault?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ShopSettingsTranslate = {
  __typename?: 'ShopSettingsTranslate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shop?: Maybe<Shop>;
  translationErrors: Array<TranslationError>;
};

export type ShopSettingsTranslationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  headerText?: InputMaybe<Scalars['String']['input']>;
};

export type ShopSettingsUpdate = {
  __typename?: 'ShopSettingsUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shop?: Maybe<Shop>;
  shopErrors: Array<ShopError>;
};

export type ShopTranslation = Node & {
  __typename?: 'ShopTranslation';
  description: Scalars['String']['output'];
  headerText: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  language: LanguageDisplay;
};

export type ShopifyBrandSync = {
  __typename?: 'ShopifyBrandSync';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  pid?: Maybe<Scalars['UUID']['output']>;
  shopifyError: Array<ShopifyError>;
};

export type ShopifyBrandSyncJob = Node & {
  __typename?: 'ShopifyBrandSyncJob';
  brand?: Maybe<Brand>;
  id: Scalars['ID']['output'];
  pid?: Maybe<Scalars['UUID']['output']>;
  status?: Maybe<TransactionStatusEnum>;
};

export type ShopifyBrandTagAdd = {
  __typename?: 'ShopifyBrandTagAdd';
  brand?: Maybe<BrandPrivate>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shopifyError: Array<ShopifyError>;
};

export type ShopifyBrandTagRemove = {
  __typename?: 'ShopifyBrandTagRemove';
  brand?: Maybe<BrandPrivate>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shopifyError: Array<ShopifyError>;
};

export type ShopifyBrandTagUpdate = {
  __typename?: 'ShopifyBrandTagUpdate';
  brand?: Maybe<BrandPrivate>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shopifyError: Array<ShopifyError>;
};

export type ShopifyCredentialsCheck = {
  __typename?: 'ShopifyCredentialsCheck';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shopifyError: Array<ShopifyError>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ShopifyCredentialsCheckInput = {
  brand?: InputMaybe<Scalars['ID']['input']>;
  shopifyApiSecret?: InputMaybe<Scalars['String']['input']>;
  shopifyApiShop?: InputMaybe<Scalars['String']['input']>;
};

export type ShopifyError = {
  __typename?: 'ShopifyError';
  code: ShopifyErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum ShopifyErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  Required = 'REQUIRED'
}

export enum ShopifyTagEnum {
  Exclusion = 'EXCLUSION',
  NonCod = 'NON_COD'
}

export type ShopifyTags = {
  __typename?: 'ShopifyTags';
  tag?: Maybe<Scalars['String']['output']>;
};

export type SiteDomainInput = {
  domain?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum SmopBannerTypeEnum {
  Announcement = 'ANNOUNCEMENT',
  Sale = 'SALE',
  Voucher = 'VOUCHER'
}

export type SmopCustomerCreate = {
  __typename?: 'SmopCustomerCreate';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type SmopCustomerInput = {
  address?: InputMaybe<AddressInput>;
  age?: InputMaybe<UserAgeEnum>;
  birthMonth?: InputMaybe<UserBirthMonthEnum>;
  contactNo: Scalars['String']['input'];
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  gender?: InputMaybe<Gender>;
  lastName: Scalars['String']['input'];
  prefix?: InputMaybe<UserPrefixEnum>;
  smac?: InputMaybe<Scalars['String']['input']>;
};

export type SmopCustomerMobileOrEmailUpdate = {
  __typename?: 'SmopCustomerMobileOrEmailUpdate';
  accountErrors: Array<AccountError>;
  csrfToken?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type SmopCustomerToken = {
  __typename?: 'SmopCustomerToken';
  accountErrors: Array<AccountError>;
  csrfToken?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export enum SmopDeliveryStatusEnum {
  Del = 'DEL',
  Dis = 'DIS',
  Pen = 'PEN',
  Res = 'RES'
}

export enum SmopIpay88MerchantTypeEnum {
  FoodAndBeverages = 'FOOD_AND_BEVERAGES',
  GeneralMerchandise = 'GENERAL_MERCHANDISE',
  SmFulfilled = 'SM_FULFILLED'
}

export enum SmopOpStatusEnum {
  Cls = 'CLS',
  Opn = 'OPN'
}

export enum SmopOrderStatusEnum {
  Acknowledged = 'ACKNOWLEDGED',
  Canceled = 'CANCELED',
  Collected = 'COLLECTED',
  Completed = 'COMPLETED',
  NewOrder = 'NEW_ORDER',
  Packed = 'PACKED',
  Ready = 'READY',
  ReadyToShip = 'READY_TO_SHIP',
  ReceivedAtFc = 'RECEIVED_AT_FC',
  ReturnToFc = 'RETURN_TO_FC',
  Shipped = 'SHIPPED'
}

export enum SmopRentalTypeEnum {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE'
}

export enum SmopStatusEnum {
  Act = 'ACT',
  Dcl = 'DCL',
  Del = 'DEL',
  Ina = 'INA',
  Rvw = 'RVW'
}

export enum SmopUserTypeCode {
  AccountManager = 'ACCOUNT_MANAGER',
  Acquisition = 'ACQUISITION',
  Customer = 'CUSTOMER',
  Finance = 'FINANCE',
  FinanceManager = 'FINANCE_MANAGER',
  FinanceSpecialist = 'FINANCE_SPECIALIST',
  FinanceTreasury_1 = 'FINANCE_TREASURY_1',
  FinanceTreasury_2 = 'FINANCE_TREASURY_2',
  MallAdmin = 'MALL_ADMIN',
  Marketing = 'MARKETING',
  OmiAdmin = 'OMI_ADMIN',
  OmiFinance = 'OMI_FINANCE',
  OmiOps = 'OMI_OPS',
  Rider = 'RIDER',
  Runner = 'RUNNER',
  SellerMaster = 'SELLER_MASTER',
  StoreAdmin = 'STORE_ADMIN'
}

export type StaffBulkDelete = {
  __typename?: 'StaffBulkDelete';
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  staffErrors: Array<StaffError>;
};

export type StaffCreate = {
  __typename?: 'StaffCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

export type StaffCreateInput = {
  accessGroup?: InputMaybe<Scalars['ID']['input']>;
  addGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  contactNo?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firebaseRegistrationId?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastOnlineDate?: InputMaybe<Scalars['DateTime']['input']>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  note?: InputMaybe<Scalars['String']['input']>;
  objectId?: InputMaybe<Scalars['ID']['input']>;
  osUsed?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  promoCreator?: InputMaybe<StaffPromoCreatorEnum>;
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  smopUsertypeCode?: InputMaybe<SmopUserTypeCode>;
  status?: InputMaybe<LockStatus>;
};

export type StaffDelete = {
  __typename?: 'StaffDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

export type StaffError = {
  __typename?: 'StaffError';
  code: AccountErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Scalars['ID']['output']>>;
  message?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<PermissionEnum>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Scalars['ID']['output']>>;
};

export type StaffNameInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type StaffNotificationRecipient = Node & {
  __typename?: 'StaffNotificationRecipient';
  active?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  user?: Maybe<User>;
};

export type StaffNotificationRecipientCreate = {
  __typename?: 'StaffNotificationRecipientCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shopErrors: Array<ShopError>;
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

export type StaffNotificationRecipientDelete = {
  __typename?: 'StaffNotificationRecipientDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shopErrors: Array<ShopError>;
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

export type StaffNotificationRecipientInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};

export type StaffNotificationRecipientUpdate = {
  __typename?: 'StaffNotificationRecipientUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  shopErrors: Array<ShopError>;
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>;
};

export enum StaffPromoCreatorEnum {
  AppDevelopment = 'APP_DEVELOPMENT',
  MallMarketing = 'MALL_MARKETING',
  SmoMarketing = 'SMO_MARKETING'
}

export type StaffUpdate = {
  __typename?: 'StaffUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  staffErrors: Array<StaffError>;
  user?: Maybe<User>;
};

export type StaffUpdateInput = {
  accessGroup?: InputMaybe<Scalars['ID']['input']>;
  addGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  contactNo?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firebaseRegistrationId?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastOnlineDate?: InputMaybe<Scalars['DateTime']['input']>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  note?: InputMaybe<Scalars['String']['input']>;
  objectId?: InputMaybe<Scalars['ID']['input']>;
  osUsed?: InputMaybe<Scalars['String']['input']>;
  promoCreator?: InputMaybe<StaffPromoCreatorEnum>;
  removeGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  smopUsertypeCode?: InputMaybe<SmopUserTypeCode>;
  status?: InputMaybe<LockStatus>;
};

export type StaffUserInput = {
  groups?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  smopUserType?: InputMaybe<Array<InputMaybe<SmopUserTypeCode>>>;
  status?: InputMaybe<LockStatus>;
};

export type StartServicePause = {
  __typename?: 'StartServicePause';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  servicePause?: Maybe<ServicePause>;
  servicePauseError: Array<ServicePauseError>;
};

export type StartServicePauseInput = {
  mallId?: InputMaybe<Scalars['ID']['input']>;
  reasonId: Scalars['ID']['input'];
  tenantId?: InputMaybe<Scalars['ID']['input']>;
};

export type Stock = Node & {
  __typename?: 'Stock';
  id: Scalars['ID']['output'];
  lastUpdatedAt: Scalars['DateTime']['output'];
  productVariant: ProductVariant;
  quantity: Scalars['Int']['output'];
  quantityAllocated: Scalars['Int']['output'];
  quantityAvailable?: Maybe<Scalars['Int']['output']>;
  warehouse: Warehouse;
};

export enum StockAvailability {
  InStock = 'IN_STOCK',
  OutOfStock = 'OUT_OF_STOCK'
}

export enum StockChangesSourceEnum {
  Available = 'AVAILABLE',
  Manual = 'MANUAL',
  Order = 'ORDER',
  Published = 'PUBLISHED',
  Unavailable = 'UNAVAILABLE',
  Unpublished = 'UNPUBLISHED'
}

export type StockCountableConnection = {
  __typename?: 'StockCountableConnection';
  edges: Array<StockCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type StockCountableEdge = {
  __typename?: 'StockCountableEdge';
  cursor: Scalars['String']['output'];
  node: Stock;
};

export type StockError = {
  __typename?: 'StockError';
  code: StockErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum StockErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type StockFilterInput = {
  brands?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isOutOfStock?: InputMaybe<Scalars['Boolean']['input']>;
  isTracked?: InputMaybe<Scalars['Boolean']['input']>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  productStatus?: InputMaybe<ProductStatusEnum>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  tenants?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type StockHistory = Node & {
  __typename?: 'StockHistory';
  createdAt: Scalars['DateTime']['output'];
  fromQuantity?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  orderLine?: Maybe<OrderLine>;
  productVisibility?: Maybe<ProductVisibility>;
  source?: Maybe<StockChangesSourceEnum>;
  stock?: Maybe<Stock>;
  tenant?: Maybe<Tenant>;
  toQuantity?: Maybe<Scalars['Int']['output']>;
};

export type StockHistoryCountableConnection = {
  __typename?: 'StockHistoryCountableConnection';
  edges: Array<StockHistoryCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type StockHistoryCountableEdge = {
  __typename?: 'StockHistoryCountableEdge';
  cursor: Scalars['String']['output'];
  node: StockHistory;
};

export type StockHistoryFilterInput = {
  brands?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  createdAt?: InputMaybe<DateRangeInput>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tenants?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export enum StockHistorySortField {
  CreatedAt = 'CREATED_AT'
}

export type StockHistorySortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: StockHistorySortField;
};

export type StockInput = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
  warehouse: Scalars['ID']['input'];
};

export enum StockSortField {
  LastUpdatedAt = 'LAST_UPDATED_AT',
  Quantity = 'QUANTITY'
}

export type StockSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: StockSortField;
};

export type StoreOrder = Node & ObjectWithMetadata & {
  __typename?: 'StoreOrder';
  cancelReason?: Maybe<Scalars['String']['output']>;
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  canceledBy?: Maybe<User>;
  discountAmount?: Maybe<Scalars['Decimal']['output']>;
  dropBinCode?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Maybe<OrderEvent>>>;
  id: Scalars['ID']['output'];
  lines?: Maybe<Array<Maybe<OrderLine>>>;
  mall?: Maybe<Mall>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  order?: Maybe<Order>;
  orderCode?: Maybe<Scalars['String']['output']>;
  overriddenByRunner?: Maybe<Scalars['Boolean']['output']>;
  parcelImageUrl?: Maybe<Scalars['String']['output']>;
  parcelNo?: Maybe<Scalars['String']['output']>;
  pickedAt?: Maybe<Scalars['DateTime']['output']>;
  pickedBy?: Maybe<User>;
  prepTimeLower?: Maybe<Scalars['Int']['output']>;
  prepTimeUpper?: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  receiptImageUrl?: Maybe<Scalars['String']['output']>;
  remainingPrepTime?: Maybe<Scalars['Int']['output']>;
  runner?: Maybe<User>;
  runnerDroppedOff?: Maybe<Scalars['Boolean']['output']>;
  runnerDroppedOffAt?: Maybe<Scalars['DateTime']['output']>;
  shopifyReference?: Maybe<Scalars['String']['output']>;
  smac?: Maybe<Scalars['String']['output']>;
  smopStatus?: Maybe<SmopOrderStatusEnum>;
  subtotal?: Maybe<Scalars['Decimal']['output']>;
  tenant?: Maybe<Tenant>;
  totalAmount?: Maybe<Scalars['Decimal']['output']>;
  validatedAt?: Maybe<Scalars['DateTime']['output']>;
  validatedBy?: Maybe<User>;
  validatedForPackingAt?: Maybe<Scalars['DateTime']['output']>;
  validatedForPackingBy?: Maybe<User>;
  verticalType?: Maybe<StoreTypeEnum>;
};


export type StoreOrderParcelImageUrlArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type StoreOrderReceiptImageUrlArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type StoreOrderCountableConnection = {
  __typename?: 'StoreOrderCountableConnection';
  edges: Array<StoreOrderCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type StoreOrderCountableEdge = {
  __typename?: 'StoreOrderCountableEdge';
  cursor: Scalars['String']['output'];
  node: StoreOrder;
};

export type StoreOrderFilterInput = {
  brandName?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  deliverySchedules?: InputMaybe<DateRangeInput>;
  deliveryType?: InputMaybe<Array<InputMaybe<DeliveryTypeEnum>>>;
  isUnassigned?: InputMaybe<Scalars['Boolean']['input']>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderCode?: InputMaybe<Scalars['String']['input']>;
  parcelNo?: InputMaybe<Scalars['String']['input']>;
  paymentChannelCode?: InputMaybe<Array<InputMaybe<PaymentChannelCodeEnum>>>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  riderName?: InputMaybe<StaffNameInput>;
  runner?: InputMaybe<Scalars['String']['input']>;
  runnerName?: InputMaybe<StaffNameInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  shipping?: InputMaybe<DateRangeInput>;
  smac?: InputMaybe<Scalars['String']['input']>;
  smopStatus?: InputMaybe<Array<InputMaybe<SmopOrderStatusEnum>>>;
  tenant?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  verticalType?: InputMaybe<Array<InputMaybe<StoreTypeEnum>>>;
};

export type StoreOrderLineDelete = {
  __typename?: 'StoreOrderLineDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  orderErrors: Array<OrderError>;
  storeOrder?: Maybe<StoreOrder>;
};

export type StoreOrderLineInput = {
  quantity: Scalars['Int']['input'];
  variantId: Scalars['ID']['input'];
};

export type StoreOrderLineUpdateQuantity = {
  __typename?: 'StoreOrderLineUpdateQuantity';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  orderErrors: Array<OrderError>;
  storeOrder?: Maybe<StoreOrder>;
};

export type StoreOrderLineUpdateQuantityInput = {
  lineId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type StoreOrderLinesAdd = {
  __typename?: 'StoreOrderLinesAdd';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  orderErrors: Array<OrderError>;
  storeOrder?: Maybe<StoreOrder>;
};

export type StoreOrderMarkAsValidForPacking = {
  __typename?: 'StoreOrderMarkAsValidForPacking';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  orderErrors: Array<OrderError>;
  storeOrder?: Maybe<StoreOrder>;
};

export type StoreOrderOpsAdminScanParcel = {
  __typename?: 'StoreOrderOpsAdminScanParcel';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  orderErrors: Array<OrderError>;
  storeOrder?: Maybe<StoreOrder>;
};

export type StoreOrderParcelImageUpload = {
  __typename?: 'StoreOrderParcelImageUpload';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
  storeOrder?: Maybe<StoreOrder>;
};

export type StoreOrderPickLine = {
  __typename?: 'StoreOrderPickLine';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  orderErrors: Array<OrderError>;
  storeOrder?: Maybe<StoreOrder>;
};

export type StoreOrderReceiptImageUpload = {
  __typename?: 'StoreOrderReceiptImageUpload';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
  storeOrder?: Maybe<StoreOrder>;
};

export type StoreOrderRevertFromCancelled = {
  __typename?: 'StoreOrderRevertFromCancelled';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
  storeOrder?: Maybe<StoreOrder>;
};

export type StoreOrderRunnerDropOff = {
  __typename?: 'StoreOrderRunnerDropOff';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
  storeOrder?: Maybe<StoreOrder>;
};

export type StoreOrderRunnerScanParcel = {
  __typename?: 'StoreOrderRunnerScanParcel';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  orderErrors: Array<OrderError>;
  storeOrder?: Maybe<StoreOrder>;
};

export type StoreOrderSetParcelNo = {
  __typename?: 'StoreOrderSetParcelNo';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  orderErrors: Array<OrderError>;
  storeOrder?: Maybe<StoreOrder>;
};

export enum StoreOrderSortField {
  CreationDate = 'CREATION_DATE',
  Number = 'NUMBER',
  RemainingPrepTime = 'REMAINING_PREP_TIME'
}

export type StoreOrderSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: StoreOrderSortField;
};

export type StorePopularity = Node & {
  __typename?: 'StorePopularity';
  id: Scalars['ID']['output'];
  numberOfOrders?: Maybe<Scalars['Int']['output']>;
  tenant?: Maybe<Tenant>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StorePopularityCountableConnection = {
  __typename?: 'StorePopularityCountableConnection';
  edges: Array<StorePopularityCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type StorePopularityCountableEdge = {
  __typename?: 'StorePopularityCountableEdge';
  cursor: Scalars['String']['output'];
  node: StorePopularity;
};

export type StorePopularityOrder = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: StorePopularityOrderField;
};

export enum StorePopularityOrderField {
  OrdersNumber = 'ORDERS_NUMBER'
}

export enum StoreTypeEnum {
  FoodAndBeverages = 'FOOD_AND_BEVERAGES',
  GeneralMerchandise = 'GENERAL_MERCHANDISE',
  Grocery = 'GROCERY',
  SmFulfilled = 'SM_FULFILLED'
}

export enum SubTenantTypeEnum {
  FoodCourt = 'FOOD_COURT',
  NonFoodCourt = 'NON_FOOD_COURT'
}

export type TaskArea = Node & ObjectWithMetadata & {
  __typename?: 'TaskArea';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dropOffLocation?: Maybe<DropOffLocation>;
  id: Scalars['ID']['output'];
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  name?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  runners?: Maybe<Array<Maybe<User>>>;
  status?: Maybe<LogisticsStatusEnum>;
  template?: Maybe<Template>;
  tenants?: Maybe<TenantCountableConnection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TaskAreaTenantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<TenantInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TaskAreaAddStores = {
  __typename?: 'TaskAreaAddStores';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  taskArea?: Maybe<TaskArea>;
  taskAreaError: Array<TaskAreaError>;
};

export type TaskAreaCountableConnection = {
  __typename?: 'TaskAreaCountableConnection';
  edges: Array<TaskAreaCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TaskAreaCountableEdge = {
  __typename?: 'TaskAreaCountableEdge';
  cursor: Scalars['String']['output'];
  node: TaskArea;
};

export type TaskAreaCreate = {
  __typename?: 'TaskAreaCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  taskArea?: Maybe<TaskArea>;
  taskAreaError: Array<TaskAreaError>;
};

export type TaskAreaCreateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dropOffLocation: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  runners?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  status?: InputMaybe<LogisticsStatusEnum>;
  template?: InputMaybe<Scalars['ID']['input']>;
  tenants?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type TaskAreaError = {
  __typename?: 'TaskAreaError';
  code: TaskAreaErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum TaskAreaErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type TaskAreaInput = {
  dropOffLocation?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mall?: InputMaybe<Scalars['ID']['input']>;
  runner?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<LogisticsStatusEnum>;
  template?: InputMaybe<Scalars['ID']['input']>;
};

export type TaskAreaRemoveStores = {
  __typename?: 'TaskAreaRemoveStores';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  taskArea?: Maybe<TaskArea>;
  taskAreaError: Array<TaskAreaError>;
};

export type TaskAreaUpdate = {
  __typename?: 'TaskAreaUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  taskArea?: Maybe<TaskArea>;
  taskAreaError: Array<TaskAreaError>;
};

export type TaskAreaUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dropOffLocation?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  runners?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  status?: InputMaybe<LogisticsStatusEnum>;
  template?: InputMaybe<Scalars['ID']['input']>;
  tenants?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type TaskAreadAddRemoveStoresInput = {
  id: Scalars['ID']['input'];
  tenants: Array<InputMaybe<Scalars['ID']['input']>>;
};

export enum TaxRateType {
  Accommodation = 'ACCOMMODATION',
  AdmissionToCulturalEvents = 'ADMISSION_TO_CULTURAL_EVENTS',
  AdmissionToEntertainmentEvents = 'ADMISSION_TO_ENTERTAINMENT_EVENTS',
  AdmissionToSportingEvents = 'ADMISSION_TO_SPORTING_EVENTS',
  Advertising = 'ADVERTISING',
  AgriculturalSupplies = 'AGRICULTURAL_SUPPLIES',
  BabyFoodstuffs = 'BABY_FOODSTUFFS',
  Bikes = 'BIKES',
  Books = 'BOOKS',
  ChildrensClothing = 'CHILDRENS_CLOTHING',
  DomesticFuel = 'DOMESTIC_FUEL',
  DomesticServices = 'DOMESTIC_SERVICES',
  EBooks = 'E_BOOKS',
  Foodstuffs = 'FOODSTUFFS',
  Hotels = 'HOTELS',
  Medical = 'MEDICAL',
  Newspapers = 'NEWSPAPERS',
  PassengerTransport = 'PASSENGER_TRANSPORT',
  Pharmaceuticals = 'PHARMACEUTICALS',
  PropertyRenovations = 'PROPERTY_RENOVATIONS',
  Restaurants = 'RESTAURANTS',
  SocialHousing = 'SOCIAL_HOUSING',
  Standard = 'STANDARD',
  Water = 'WATER',
  Wine = 'WINE'
}

export type TaxType = {
  __typename?: 'TaxType';
  description?: Maybe<Scalars['String']['output']>;
  taxCode?: Maybe<Scalars['String']['output']>;
};

export type TaxedMoney = {
  __typename?: 'TaxedMoney';
  currency: Scalars['String']['output'];
  gross: Money;
  net: Money;
  tax: Money;
};

export type TaxedMoneyRange = {
  __typename?: 'TaxedMoneyRange';
  start?: Maybe<TaxedMoney>;
  stop?: Maybe<TaxedMoney>;
};

export type Template = Node & ObjectWithMetadata & {
  __typename?: 'Template';
  assignedStores?: Maybe<TenantCountableConnection>;
  createdBy: User;
  dropOffLocations?: Maybe<DropOffLocationCountableConnection>;
  id: Scalars['ID']['output'];
  mall: Mall;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  name: Scalars['String']['output'];
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  racks?: Maybe<RackCountableConnection>;
  status: TemplateStatus;
  taskAreas?: Maybe<TaskAreaCountableConnection>;
  unassignedStores?: Maybe<TenantCountableConnection>;
};


export type TemplateAssignedStoresArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type TemplateDropOffLocationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type TemplateRacksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type TemplateTaskAreasArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type TemplateUnassignedStoresArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TemplateCountableConnection = {
  __typename?: 'TemplateCountableConnection';
  edges: Array<TemplateCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TemplateCountableEdge = {
  __typename?: 'TemplateCountableEdge';
  cursor: Scalars['String']['output'];
  node: Template;
};

export type TemplateCreate = {
  __typename?: 'TemplateCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  template?: Maybe<Template>;
  templateError: Array<TemplateError>;
};

export type TemplateCreateInput = {
  mall: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type TemplateDelete = {
  __typename?: 'TemplateDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  template?: Maybe<Template>;
  templateError: Array<TemplateError>;
};

export type TemplateDuplicate = {
  __typename?: 'TemplateDuplicate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  taskAreaError: Array<TaskAreaError>;
  template?: Maybe<Template>;
};

export type TemplateError = {
  __typename?: 'TemplateError';
  code: TemplateErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum TemplateErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type TemplateFinalize = {
  __typename?: 'TemplateFinalize';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  template?: Maybe<Template>;
  templateError: Array<TemplateError>;
};

export type TemplateInput = {
  mall?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<TemplateStatusEnum>;
};

export type TemplateRename = {
  __typename?: 'TemplateRename';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  taskAreaError: Array<TaskAreaError>;
  template?: Maybe<Template>;
};

export enum TemplateSortField {
  CreationDate = 'CREATION_DATE',
  DraftStatus = 'DRAFT_STATUS',
  Status = 'STATUS',
  TemplateName = 'TEMPLATE_NAME'
}

export type TemplateSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: TemplateSortField;
};

export enum TemplateStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Draft = 'DRAFT',
  Inactive = 'INACTIVE'
}

export enum TemplateStatusEnum {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Draft = 'DRAFT',
  Inactive = 'INACTIVE'
}

export type TemplateUpdate = {
  __typename?: 'TemplateUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  template?: Maybe<Template>;
  templateError: Array<TemplateError>;
};

export type TemplateUpdateInput = {
  mall: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  status: TemplateStatusEnum;
};

export type Tenant = Node & ObjectWithMetadata & {
  __typename?: 'Tenant';
  activePromoRibbon?: Maybe<Scalars['String']['output']>;
  bannerImage?: Maybe<Image>;
  brand?: Maybe<Brand>;
  cluster?: Maybe<Cluster>;
  code?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  contractId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `firstLevelCategoriesPaginated` instead for improved performance with pagination. This field will be removed after 2024-11-26. */
  firstLevelCategories?: Maybe<Array<Maybe<Category>>>;
  firstLevelCategoriesPaginated?: Maybe<CategoryCountableConnection>;
  hasVoucher?: Maybe<Scalars['Boolean']['output']>;
  iconImage?: Maybe<Image>;
  id: Scalars['ID']['output'];
  isExpressLongDistanceDeliveryAllowed?: Maybe<Scalars['Boolean']['output']>;
  isFeatured: Scalars['Boolean']['output'];
  isOfShopsm?: Maybe<Scalars['Boolean']['output']>;
  isPausable?: Maybe<Scalars['Boolean']['output']>;
  isSameDayDeliveryAllowed?: Maybe<Scalars['Boolean']['output']>;
  isUseTenantCluster?: Maybe<Scalars['Boolean']['output']>;
  isUseTenantOperatingHours?: Maybe<Scalars['Boolean']['output']>;
  leaseNo?: Maybe<Scalars['String']['output']>;
  legalName?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  mall?: Maybe<Mall>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  operationEndTime?: Maybe<Scalars['Time']['output']>;
  operationScheduleMeta?: Maybe<Scalars['JSONString']['output']>;
  operationStartTime?: Maybe<Scalars['Time']['output']>;
  operationStatus?: Maybe<SmopOpStatusEnum>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  products?: Maybe<ProductCountableConnection>;
  promoRibbonDescription?: Maybe<Scalars['String']['output']>;
  promoRibbonEnd?: Maybe<Scalars['DateTime']['output']>;
  promoRibbonStart?: Maybe<Scalars['DateTime']['output']>;
  /** @deprecated Use `secondLevelCategoriesPaginated` instead for improved performance with pagination. This field will be removed after 2024-11-26. */
  secondLevelCategories?: Maybe<Array<Maybe<Category>>>;
  secondLevelCategoriesPaginated?: Maybe<CategoryCountableConnection>;
  status?: Maybe<SmopStatusEnum>;
  storeId?: Maybe<Scalars['String']['output']>;
  storeName?: Maybe<Scalars['String']['output']>;
  taskAreas?: Maybe<TaskAreaCountableConnection>;
  tenantType?: Maybe<Scalars['String']['output']>;
  unitNo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  withReservation?: Maybe<Scalars['Boolean']['output']>;
};


export type TenantBannerImageArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type TenantFirstLevelCategoriesPaginatedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type TenantHasVoucherArgs = {
  voucherId: Scalars['ID']['input'];
};


export type TenantIconImageArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type TenantProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type TenantSecondLevelCategoriesArgs = {
  onlyWithVisibleProducts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
};


export type TenantSecondLevelCategoriesPaginatedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  onlyWithVisibleProducts?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
};


export type TenantTaskAreasArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TenantCountableConnection = {
  __typename?: 'TenantCountableConnection';
  edges: Array<TenantCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TenantCountableEdge = {
  __typename?: 'TenantCountableEdge';
  cursor: Scalars['String']['output'];
  node: Tenant;
};

export type TenantCreate = {
  __typename?: 'TenantCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  tenant?: Maybe<TenantPrivate>;
  tenantErrors: Array<TenantError>;
};

export type TenantCreateInput = {
  bankAccountName?: InputMaybe<Scalars['String']['input']>;
  bankAccountNo?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  bannerImage?: InputMaybe<Scalars['Upload']['input']>;
  bannerImageAlt?: InputMaybe<Scalars['String']['input']>;
  brand: Scalars['ID']['input'];
  cluster?: InputMaybe<Scalars['ID']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  completeAddress?: InputMaybe<Scalars['String']['input']>;
  contractId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  financeEmail?: InputMaybe<Scalars['String']['input']>;
  financeMobileNo?: InputMaybe<Scalars['String']['input']>;
  financeName?: InputMaybe<Scalars['String']['input']>;
  iconImage?: InputMaybe<Scalars['Upload']['input']>;
  iconImageAlt?: InputMaybe<Scalars['String']['input']>;
  ipay88SubMid?: InputMaybe<Scalars['String']['input']>;
  isExpressLongDistanceDeliveryAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isOtherBusiness?: InputMaybe<Scalars['Boolean']['input']>;
  isSameDayDeliveryAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  isUseTenantCluster?: InputMaybe<Scalars['Boolean']['input']>;
  isUseTenantOperatingHours?: InputMaybe<Scalars['Boolean']['input']>;
  leaseNo?: InputMaybe<Scalars['String']['input']>;
  legalName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  mall: Scalars['ID']['input'];
  operationEndTime?: InputMaybe<Scalars['Time']['input']>;
  operationScheduleMeta?: InputMaybe<Scalars['JSONString']['input']>;
  operationStartTime?: InputMaybe<Scalars['Time']['input']>;
  operationStatus: SmopOpStatusEnum;
  paymentFeeRate: Scalars['Decimal']['input'];
  rentalType?: InputMaybe<SmopRentalTypeEnum>;
  signatoryDesignation?: InputMaybe<Scalars['String']['input']>;
  signatoryEmail?: InputMaybe<Scalars['String']['input']>;
  signatoryMobileNo?: InputMaybe<Scalars['String']['input']>;
  signatoryName?: InputMaybe<Scalars['String']['input']>;
  status: SmopStatusEnum;
  subTenantType?: InputMaybe<SubTenantTypeEnum>;
  tenantType?: InputMaybe<StoreTypeEnum>;
  tinNo?: InputMaybe<Scalars['String']['input']>;
  unitNo?: InputMaybe<Scalars['String']['input']>;
  withReservation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TenantEnableReservation = {
  __typename?: 'TenantEnableReservation';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  reservationErrors: Array<ReservationError>;
  tenant?: Maybe<Tenant>;
};

export type TenantError = {
  __typename?: 'TenantError';
  code: TenantErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum TenantErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type TenantInput = {
  brandId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  category?: InputMaybe<Scalars['ID']['input']>;
  hasActivePause?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isAssignedInTemplates?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isAssignedToTaskArea?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isFollowed?: InputMaybe<Scalars['Boolean']['input']>;
  isNotAssignedInTemplates?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mallId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  pauseReasonIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  pauseStartedAt?: InputMaybe<DateRangeInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  storeType?: InputMaybe<StoreTypeEnum>;
  taskAreaId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type TenantPrivate = Node & ObjectWithMetadata & {
  __typename?: 'TenantPrivate';
  activePauseReasons?: Maybe<Array<Maybe<ServicePauseReason>>>;
  activePromoRibbon?: Maybe<Scalars['String']['output']>;
  bankAccountName?: Maybe<Scalars['String']['output']>;
  bankAccountNo?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  bannerImage?: Maybe<Image>;
  brand?: Maybe<BrandPrivate>;
  cluster?: Maybe<Cluster>;
  code?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  completeAddress?: Maybe<Scalars['String']['output']>;
  contractId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  financeEmail?: Maybe<Scalars['String']['output']>;
  financeMobileNo?: Maybe<Scalars['String']['output']>;
  financeName?: Maybe<Scalars['String']['output']>;
  hasVoucher?: Maybe<Scalars['Boolean']['output']>;
  iconImage?: Maybe<Image>;
  id: Scalars['ID']['output'];
  ipay88SubMid?: Maybe<Scalars['String']['output']>;
  isExpressLongDistanceDeliveryAllowed?: Maybe<Scalars['Boolean']['output']>;
  isFeatured: Scalars['Boolean']['output'];
  isOfShopsm?: Maybe<Scalars['Boolean']['output']>;
  isOtherBusiness?: Maybe<Scalars['String']['output']>;
  isPausable?: Maybe<Scalars['Boolean']['output']>;
  isSameDayDeliveryAllowed?: Maybe<Scalars['Boolean']['output']>;
  isUseTenantCluster?: Maybe<Scalars['Boolean']['output']>;
  isUseTenantOperatingHours?: Maybe<Scalars['Boolean']['output']>;
  leaseNo?: Maybe<Scalars['String']['output']>;
  legalName?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  mall?: Maybe<Mall>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  operationEndTime?: Maybe<Scalars['Time']['output']>;
  operationScheduleMeta?: Maybe<Scalars['JSONString']['output']>;
  operationStartTime?: Maybe<Scalars['Time']['output']>;
  operationStatus?: Maybe<SmopOpStatusEnum>;
  paymentFeeRate?: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  promoRibbonDescription?: Maybe<Scalars['String']['output']>;
  promoRibbonEnd?: Maybe<Scalars['DateTime']['output']>;
  promoRibbonStart?: Maybe<Scalars['DateTime']['output']>;
  rentalType?: Maybe<SmopRentalTypeEnum>;
  signatoryDesignation?: Maybe<Scalars['String']['output']>;
  signatoryEmail?: Maybe<Scalars['String']['output']>;
  signatoryMobileNo?: Maybe<Scalars['String']['output']>;
  signatoryName?: Maybe<Scalars['String']['output']>;
  status?: Maybe<SmopStatusEnum>;
  storeId?: Maybe<Scalars['String']['output']>;
  storeName?: Maybe<Scalars['String']['output']>;
  subTenantType?: Maybe<SubTenantTypeEnum>;
  tenantType?: Maybe<Scalars['String']['output']>;
  tinNo?: Maybe<Scalars['String']['output']>;
  unitNo?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  withReservation?: Maybe<Scalars['Boolean']['output']>;
};


export type TenantPrivateBannerImageArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type TenantPrivateHasVoucherArgs = {
  voucherId: Scalars['ID']['input'];
};


export type TenantPrivateIconImageArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type TenantPrivateCountableConnection = {
  __typename?: 'TenantPrivateCountableConnection';
  edges: Array<TenantPrivateCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TenantPrivateCountableEdge = {
  __typename?: 'TenantPrivateCountableEdge';
  cursor: Scalars['String']['output'];
  node: TenantPrivate;
};

export type TenantPromotionalRibbonInput = {
  bannerImage?: InputMaybe<Scalars['Upload']['input']>;
  bannerImageAlt?: InputMaybe<Scalars['String']['input']>;
  cluster?: InputMaybe<Scalars['ID']['input']>;
  isExpressLongDistanceDeliveryAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  isSameDayDeliveryAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  isUseTenantCluster?: InputMaybe<Scalars['Boolean']['input']>;
  isUseTenantOperatingHours?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  operationEndTime?: InputMaybe<Scalars['Time']['input']>;
  operationStartTime?: InputMaybe<Scalars['Time']['input']>;
  promoRibbonDescription?: InputMaybe<Scalars['String']['input']>;
  promoRibbonEnd?: InputMaybe<Scalars['DateTime']['input']>;
  promoRibbonStart?: InputMaybe<Scalars['DateTime']['input']>;
  status: SmopStatusEnum;
};

export type TenantPromotionalRibbonUpdate = {
  __typename?: 'TenantPromotionalRibbonUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  tenant?: Maybe<TenantPrivate>;
  tenantErrors: Array<TenantError>;
};

export enum TenantSortField {
  BrandName = 'BRAND_NAME',
  CreationDate = 'CREATION_DATE',
  LatestFeatured = 'LATEST_FEATURED',
  MallDistance = 'MALL_DISTANCE',
  MostPopular = 'MOST_POPULAR',
  Name = 'NAME',
  NameWithFeatured = 'NAME_WITH_FEATURED',
  Number = 'NUMBER',
  TenantName = 'TENANT_NAME'
}

export type TenantSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: TenantSortField;
};

export type TenantUpdate = {
  __typename?: 'TenantUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  tenant?: Maybe<TenantPrivate>;
  tenantErrors: Array<TenantError>;
};

export type TenantUpdateInput = {
  bankAccountName?: InputMaybe<Scalars['String']['input']>;
  bankAccountNo?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  bannerImage?: InputMaybe<Scalars['Upload']['input']>;
  bannerImageAlt?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['ID']['input']>;
  cluster?: InputMaybe<Scalars['ID']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  completeAddress?: InputMaybe<Scalars['String']['input']>;
  contractId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  financeEmail?: InputMaybe<Scalars['String']['input']>;
  financeMobileNo?: InputMaybe<Scalars['String']['input']>;
  financeName?: InputMaybe<Scalars['String']['input']>;
  iconImage?: InputMaybe<Scalars['Upload']['input']>;
  iconImageAlt?: InputMaybe<Scalars['String']['input']>;
  ipay88SubMid?: InputMaybe<Scalars['String']['input']>;
  isExpressLongDistanceDeliveryAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isOtherBusiness?: InputMaybe<Scalars['Boolean']['input']>;
  isSameDayDeliveryAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  isUseTenantCluster?: InputMaybe<Scalars['Boolean']['input']>;
  isUseTenantOperatingHours?: InputMaybe<Scalars['Boolean']['input']>;
  leaseNo?: InputMaybe<Scalars['String']['input']>;
  legalName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  mall?: InputMaybe<Scalars['ID']['input']>;
  operationEndTime?: InputMaybe<Scalars['Time']['input']>;
  operationScheduleMeta?: InputMaybe<Scalars['JSONString']['input']>;
  operationStartTime?: InputMaybe<Scalars['Time']['input']>;
  operationStatus?: InputMaybe<SmopOpStatusEnum>;
  paymentFeeRate: Scalars['Decimal']['input'];
  rentalType?: InputMaybe<SmopRentalTypeEnum>;
  signatoryDesignation?: InputMaybe<Scalars['String']['input']>;
  signatoryEmail?: InputMaybe<Scalars['String']['input']>;
  signatoryMobileNo?: InputMaybe<Scalars['String']['input']>;
  signatoryName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SmopStatusEnum>;
  subTenantType?: InputMaybe<SubTenantTypeEnum>;
  tenantType?: InputMaybe<StoreTypeEnum>;
  tinNo?: InputMaybe<Scalars['String']['input']>;
  unitNo?: InputMaybe<Scalars['String']['input']>;
  withReservation?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TenantsSetIsPausable = {
  __typename?: 'TenantsSetIsPausable';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  tenantErrors: Array<TenantError>;
  tenants?: Maybe<Array<Maybe<Tenant>>>;
};

export type TenantsSetIsPausableInput = {
  isPausable: Scalars['Boolean']['input'];
  tenants: Array<InputMaybe<Scalars['ID']['input']>>;
};

export type ThirdPartyRider = Node & {
  __typename?: 'ThirdPartyRider';
  contactNo?: Maybe<Scalars['String']['output']>;
  deliveryCourier?: Maybe<DeliveryCourier>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Order>;
};

export type Transaction = Node & {
  __typename?: 'Transaction';
  amount?: Maybe<Money>;
  created: Scalars['DateTime']['output'];
  error?: Maybe<TransactionError>;
  id: Scalars['ID']['output'];
  isSuccess: Scalars['Boolean']['output'];
  kind: TransactionKind;
  payment: Payment;
  token: Scalars['String']['output'];
};

export enum TransactionError {
  TransactionerrorDeclined = 'TRANSACTIONERROR_DECLINED',
  TransactionerrorExpired = 'TRANSACTIONERROR_EXPIRED',
  TransactionerrorIncorrectAddress = 'TRANSACTIONERROR_INCORRECT_ADDRESS',
  TransactionerrorIncorrectCvv = 'TRANSACTIONERROR_INCORRECT_CVV',
  TransactionerrorIncorrectNumber = 'TRANSACTIONERROR_INCORRECT_NUMBER',
  TransactionerrorIncorrectZip = 'TRANSACTIONERROR_INCORRECT_ZIP',
  TransactionerrorInvalidCvv = 'TRANSACTIONERROR_INVALID_CVV',
  TransactionerrorInvalidExpiryDate = 'TRANSACTIONERROR_INVALID_EXPIRY_DATE',
  TransactionerrorInvalidNumber = 'TRANSACTIONERROR_INVALID_NUMBER',
  TransactionerrorProcessingError = 'TRANSACTIONERROR_PROCESSING_ERROR'
}

export enum TransactionKind {
  ActionToConfirm = 'ACTION_TO_CONFIRM',
  Auth = 'AUTH',
  Cancel = 'CANCEL',
  Capture = 'CAPTURE',
  Confirm = 'CONFIRM',
  Pending = 'PENDING',
  Refund = 'REFUND',
  RefundOngoing = 'REFUND_ONGOING',
  Void = 'VOID'
}

export enum TransactionStatusEnum {
  Failed = 'FAILED',
  Success = 'SUCCESS'
}

export type TranslatableItem = AttributeTranslatableContent | AttributeValueTranslatableContent | CategoryTranslatableContent | CollectionTranslatableContent | MenuItemTranslatableContent | PageTranslatableContent | ProductTranslatableContent | ProductVariantTranslatableContent | SaleTranslatableContent | ShippingMethodTranslatableContent | VoucherTranslatableContent;

export type TranslatableItemConnection = {
  __typename?: 'TranslatableItemConnection';
  edges: Array<TranslatableItemEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type TranslatableItemEdge = {
  __typename?: 'TranslatableItemEdge';
  cursor: Scalars['String']['output'];
  node: TranslatableItem;
};

export enum TranslatableKinds {
  Attribute = 'ATTRIBUTE',
  AttributeValue = 'ATTRIBUTE_VALUE',
  Category = 'CATEGORY',
  Collection = 'COLLECTION',
  MenuItem = 'MENU_ITEM',
  Page = 'PAGE',
  Product = 'PRODUCT',
  Sale = 'SALE',
  ShippingMethod = 'SHIPPING_METHOD',
  Variant = 'VARIANT',
  Voucher = 'VOUCHER'
}

export type TranslationError = {
  __typename?: 'TranslationError';
  code: TranslationErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum TranslationErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export type TranslationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionJson?: InputMaybe<Scalars['JSONString']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  seoDescription?: InputMaybe<Scalars['String']['input']>;
  seoTitle?: InputMaybe<Scalars['String']['input']>;
};

export type TravelTime = {
  __typename?: 'TravelTime';
  canRefresh?: Maybe<Scalars['Boolean']['output']>;
  clusterLowerDay?: Maybe<Scalars['Int']['output']>;
  clusterLowerHour?: Maybe<Scalars['Int']['output']>;
  clusterLowerMin?: Maybe<Scalars['Int']['output']>;
  clusterUpperDay?: Maybe<Scalars['Int']['output']>;
  clusterUpperHour?: Maybe<Scalars['Int']['output']>;
  clusterUpperMin?: Maybe<Scalars['Int']['output']>;
  distance?: Maybe<Scalars['Decimal']['output']>;
  expiration?: Maybe<Scalars['DateTime']['output']>;
  lastUpdate?: Maybe<Scalars['DateTime']['output']>;
  travelDurDay?: Maybe<Scalars['Int']['output']>;
  travelDurHour?: Maybe<Scalars['Int']['output']>;
  travelDurMin?: Maybe<Scalars['Int']['output']>;
};

export type TravelTimeInput = {
  distance: Scalars['Decimal']['input'];
  travelDurDay: Scalars['Int']['input'];
  travelDurHour: Scalars['Int']['input'];
  travelDurMin: Scalars['Int']['input'];
};

export type UnassignRunnerFromTaskAreas = {
  __typename?: 'UnassignRunnerFromTaskAreas';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  runner?: Maybe<User>;
  taskAreaError: Array<TaskAreaError>;
};

export type UnfollowBrand = {
  __typename?: 'UnfollowBrand';
  brand?: Maybe<Brand>;
  brandErrors: Array<BrandError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type Update2GoShipmentStatus = {
  __typename?: 'Update2GoShipmentStatus';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type UpdateBrandStatus = {
  __typename?: 'UpdateBrandStatus';
  brand?: Maybe<BrandPrivate>;
  brandErrors: Array<BrandError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type UpdateInvoiceInput = {
  number?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMallOrderTimeframe = {
  __typename?: 'UpdateMallOrderTimeframe';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  mall?: Maybe<Mall>;
  mallErrors: Array<MallError>;
};

export type UpdateMallStatus = {
  __typename?: 'UpdateMallStatus';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  mall?: Maybe<Mall>;
  mallErrors: Array<MallError>;
};

export type UpdateMetadata = {
  __typename?: 'UpdateMetadata';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  item?: Maybe<ObjectWithMetadata>;
  metadataErrors: Array<MetadataError>;
};

export type UpdateOrderFulfillmentRemarks = {
  __typename?: 'UpdateOrderFulfillmentRemarks';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type UpdateOrderStatus = {
  __typename?: 'UpdateOrderStatus';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type UpdatePrivateMetadata = {
  __typename?: 'UpdatePrivateMetadata';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  item?: Maybe<ObjectWithMetadata>;
  metadataErrors: Array<MetadataError>;
};

export type UpdateRemittanceManualAdjustmentStatus = {
  __typename?: 'UpdateRemittanceManualAdjustmentStatus';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  order?: Maybe<Order>;
  orderErrors: Array<OrderError>;
};

export type UpdateSaleStatus = {
  __typename?: 'UpdateSaleStatus';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  sale?: Maybe<Sale>;
};

export type UpdateServiceMall = {
  __typename?: 'UpdateServiceMall';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type UpdateStoreOrderStatus = {
  __typename?: 'UpdateStoreOrderStatus';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  event?: Maybe<OrderEvent>;
  orderErrors: Array<OrderError>;
  storeOrder?: Maybe<StoreOrder>;
};

export type UpdateTenantStatus = {
  __typename?: 'UpdateTenantStatus';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  tenant?: Maybe<TenantPrivate>;
  tenantErrors: Array<TenantError>;
};

export type UpdateVoucherGroupStatus = {
  __typename?: 'UpdateVoucherGroupStatus';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucherJobBulk?: Maybe<VoucherJobBulk>;
};

export type UpdateVoucherStatus = {
  __typename?: 'UpdateVoucherStatus';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucher?: Maybe<Voucher>;
};

export enum UploadEventsEnum {
  UploadErrorFileSent = 'UPLOAD_ERROR_FILE_SENT',
  UploadFailed = 'UPLOAD_FAILED',
  UploadPending = 'UPLOAD_PENDING',
  UploadSuccess = 'UPLOAD_SUCCESS'
}

export type User = Node & ObjectWithMetadata & {
  __typename?: 'User';
  accessGroup?: Maybe<AccessGroup>;
  addresses?: Maybe<Array<Maybe<Address>>>;
  age?: Maybe<UserAgeEnum>;
  avatar?: Maybe<Image>;
  birthMonth?: Maybe<UserBirthMonthEnum>;
  businessDetails?: Maybe<Brand>;
  carriedOverOrders?: Maybe<OrderCountableConnection>;
  carts?: Maybe<CartCountableConnection>;
  checkout?: Maybe<Checkout>;
  companyName?: Maybe<Scalars['String']['output']>;
  contactNo?: Maybe<Scalars['String']['output']>;
  couponRedemptions?: Maybe<CouponRedemptionCountableConnection>;
  creditCards?: Maybe<UserCreditCardCountableConnection>;
  customerSegment?: Maybe<CustomerSegment>;
  dateJoined: Scalars['DateTime']['output'];
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  defaultBillingAddress?: Maybe<Address>;
  defaultMall?: Maybe<Mall>;
  defaultShippingAddress?: Maybe<Address>;
  distanceFromMall?: Maybe<Scalars['Decimal']['output']>;
  editableGroups?: Maybe<Array<Maybe<Group>>>;
  email?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<Maybe<CustomerEvent>>>;
  firebaseRegistrationId?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  followedBrands?: Maybe<BrandCountableConnection>;
  freshdeskRestoreId?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  giftCards?: Maybe<GiftCardCountableConnection>;
  hasForRedemptionCoupon?: Maybe<Scalars['Boolean']['output']>;
  hasForRedemptionOrNearExpiryCoupon?: Maybe<Scalars['Boolean']['output']>;
  hasNearExpiryCoupon?: Maybe<Scalars['Boolean']['output']>;
  homeAddress?: Maybe<Address>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isConnectedToSmMarket?: Maybe<Scalars['Boolean']['output']>;
  isStaff: Scalars['Boolean']['output'];
  isVerifiedEmail?: Maybe<Scalars['Boolean']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  lastOnlineDate?: Maybe<Scalars['DateTime']['output']>;
  lastOrderDate?: Maybe<Scalars['DateTime']['output']>;
  lastOrderStatus?: Maybe<OrderStatusFilter>;
  latitude?: Maybe<Scalars['Decimal']['output']>;
  longitude?: Maybe<Scalars['Decimal']['output']>;
  malls?: Maybe<MallCountableConnection>;
  mapPlaceId?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  newCustomerStatus?: Maybe<CustomerStatus>;
  note?: Maybe<Scalars['String']['output']>;
  orders?: Maybe<OrderCountableConnection>;
  osUsed?: Maybe<Scalars['String']['output']>;
  paymentMethods?: Maybe<UserPaymentMethodCountableConnection>;
  permissionGroups?: Maybe<Array<Maybe<Group>>>;
  /** @deprecated Will be removed in Saleor 2.11.Use the `userPermissions` instead. */
  permissions?: Maybe<Array<Maybe<Permission>>>;
  prefix?: Maybe<UserPrefixEnum>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  promoCreator?: Maybe<StaffPromoCreatorEnum>;
  riskCustomer?: Maybe<Scalars['Boolean']['output']>;
  smMarketEmail?: Maybe<Scalars['String']['output']>;
  smMarketPassword?: Maybe<Scalars['String']['output']>;
  smac?: Maybe<Scalars['String']['output']>;
  status?: Maybe<LockStatus>;
  storedPaymentSources?: Maybe<Array<Maybe<PaymentSource>>>;
  taskAreas?: Maybe<Array<Maybe<TaskArea>>>;
  travelTime?: Maybe<TravelTime>;
  userPermissions?: Maybe<Array<Maybe<UserPermission>>>;
  userType?: Maybe<UserTypesEnum>;
  wishlist?: Maybe<Wishlist>;
};


export type UserAvatarArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type UserCarriedOverOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MeOrderFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<OrderSortingInput>;
};


export type UserCartsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CartFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CartSortingInput>;
};


export type UserCouponRedemptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<CouponRedemptionFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CouponRedemptionSortingInput>;
};


export type UserCreditCardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CreditCardSortingInput>;
};


export type UserFollowedBrandsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type UserGiftCardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type UserMallsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MallInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<MallSortingInput>;
  status?: InputMaybe<SmopStatusEnum>;
};


export type UserOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MeOrderFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<OrderSortingInput>;
};


export type UserPaymentMethodsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<UserPaymentMethodFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<UserPaymentMethodSortingInput>;
};

export enum UserAgeEnum {
  Above_60 = 'ABOVE_60',
  Early_20 = 'EARLY_20',
  Early_30 = 'EARLY_30',
  Early_40 = 'EARLY_40',
  Early_50 = 'EARLY_50',
  EarlyAdult = 'EARLY_ADULT',
  Late_20 = 'LATE_20',
  Late_30 = 'LATE_30',
  Late_40 = 'LATE_40',
  Late_50 = 'LATE_50',
  PreferNotToSay = 'PREFER_NOT_TO_SAY'
}

export type UserAvatarDelete = {
  __typename?: 'UserAvatarDelete';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type UserAvatarUpdate = {
  __typename?: 'UserAvatarUpdate';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export enum UserBirthMonthEnum {
  April = 'APRIL',
  August = 'AUGUST',
  December = 'DECEMBER',
  February = 'FEBRUARY',
  January = 'JANUARY',
  July = 'JULY',
  June = 'JUNE',
  March = 'MARCH',
  May = 'MAY',
  November = 'NOVEMBER',
  October = 'OCTOBER',
  PreferNotToSay = 'PREFER_NOT_TO_SAY',
  September = 'SEPTEMBER'
}

export type UserBulkBlock = {
  __typename?: 'UserBulkBlock';
  accountErrors: Array<AccountError>;
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type UserBulkSetActive = {
  __typename?: 'UserBulkSetActive';
  accountErrors: Array<AccountError>;
  count: Scalars['Int']['output'];
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type UserClearMeta = {
  __typename?: 'UserClearMeta';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type UserClearPrivateMeta = {
  __typename?: 'UserClearPrivateMeta';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type UserCountableConnection = {
  __typename?: 'UserCountableConnection';
  edges: Array<UserCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type UserCountableEdge = {
  __typename?: 'UserCountableEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserCreateInput = {
  accessGroup?: InputMaybe<Scalars['ID']['input']>;
  customerSegment?: InputMaybe<CustomerSegment>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  defaultBillingAddress?: InputMaybe<AddressInput>;
  defaultShippingAddress?: InputMaybe<AddressInput>;
  distanceFromMall?: InputMaybe<Scalars['Decimal']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firebaseRegistrationId?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastOnlineDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastOrderDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastOrderStatus?: InputMaybe<OrderStatusFilter>;
  note?: InputMaybe<Scalars['String']['input']>;
  osUsed?: InputMaybe<Scalars['String']['input']>;
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  riskCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<LockStatus>;
};

export type UserCreditCard = Node & ObjectWithMetadata & {
  __typename?: 'UserCreditCard';
  cardName?: Maybe<Scalars['String']['output']>;
  cardNumber?: Maybe<Scalars['String']['output']>;
  cardType?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expirationDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  tokenId?: Maybe<Scalars['String']['output']>;
};

export type UserCreditCardCountableConnection = {
  __typename?: 'UserCreditCardCountableConnection';
  edges: Array<UserCreditCardCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type UserCreditCardCountableEdge = {
  __typename?: 'UserCreditCardCountableEdge';
  cursor: Scalars['String']['output'];
  node: UserCreditCard;
};

export type UserLocationInput = {
  lat: Scalars['Decimal']['input'];
  long: Scalars['Decimal']['input'];
};

export type UserPaymentMethod = Node & ObjectWithMetadata & {
  __typename?: 'UserPaymentMethod';
  channelCode?: Maybe<UserPaymentMethodChannelCode>;
  gateway?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  maskedAccountNumber?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `metadata` field. This field will be removed after 2020-07-31. */
  meta: Array<Maybe<MetaStore>>;
  metadata: Array<Maybe<MetadataItem>>;
  /** @deprecated Use the `privetaMetadata` field. This field will be removed after 2020-07-31. */
  privateMeta: Array<Maybe<MetaStore>>;
  privateMetadata: Array<Maybe<MetadataItem>>;
  token?: Maybe<Scalars['String']['output']>;
};

export enum UserPaymentMethodChannelCode {
  Bpi = 'BPI',
  Chinabank = 'CHINABANK',
  Grabpay = 'GRABPAY',
  Paymaya = 'PAYMAYA',
  Rcbc = 'RCBC',
  Shopeepay = 'SHOPEEPAY',
  Ubp = 'UBP'
}

export type UserPaymentMethodCountableConnection = {
  __typename?: 'UserPaymentMethodCountableConnection';
  edges: Array<UserPaymentMethodCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type UserPaymentMethodCountableEdge = {
  __typename?: 'UserPaymentMethodCountableEdge';
  cursor: Scalars['String']['output'];
  node: UserPaymentMethod;
};

export type UserPaymentMethodFilterInput = {
  gateway?: InputMaybe<Scalars['String']['input']>;
};

export enum UserPaymentMethodSortField {
  Created = 'CREATED'
}

export type UserPaymentMethodSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: UserPaymentMethodSortField;
};

export type UserPermission = {
  __typename?: 'UserPermission';
  code: PermissionEnum;
  name: Scalars['String']['output'];
  sourcePermissionGroups?: Maybe<Array<Group>>;
};


export type UserPermissionSourcePermissionGroupsArgs = {
  userId: Scalars['ID']['input'];
};

export enum UserPrefixEnum {
  Mr = 'MR',
  Ms = 'MS',
  PreferNotToSay = 'PREFER_NOT_TO_SAY'
}

export enum UserSortField {
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  LastName = 'LAST_NAME',
  OrderCount = 'ORDER_COUNT'
}

export type UserSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: UserSortField;
};

export enum UserTypesEnum {
  Service = 'SERVICE',
  Standard = 'STANDARD'
}

export type UserUpdateMeta = {
  __typename?: 'UserUpdateMeta';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type UserUpdatePrivateMeta = {
  __typename?: 'UserUpdatePrivateMeta';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  user?: Maybe<User>;
};

export type Vat = {
  __typename?: 'VAT';
  countryCode: Scalars['String']['output'];
  reducedRates: Array<Maybe<ReducedRate>>;
  standardRate?: Maybe<Scalars['Float']['output']>;
};

export type VariantImageAssign = {
  __typename?: 'VariantImageAssign';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  image?: Maybe<ProductImage>;
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type VariantImageUnassign = {
  __typename?: 'VariantImageUnassign';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  image?: Maybe<ProductImage>;
  productErrors: Array<ProductError>;
  productVariant?: Maybe<ProductVariant>;
};

export type VariantPricingInfo = {
  __typename?: 'VariantPricingInfo';
  discount?: Maybe<TaxedMoney>;
  discountLocalCurrency?: Maybe<TaxedMoney>;
  onSale?: Maybe<Scalars['Boolean']['output']>;
  price?: Maybe<TaxedMoney>;
  priceLocalCurrency?: Maybe<TaxedMoney>;
  priceUndiscounted?: Maybe<TaxedMoney>;
};

export type VerifyToken = {
  __typename?: 'VerifyToken';
  accountErrors: Array<AccountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  isValid: Scalars['Boolean']['output'];
  payload?: Maybe<Scalars['GenericScalar']['output']>;
  user?: Maybe<User>;
};

export type Voucher = Node & {
  __typename?: 'Voucher';
  applyOncePerCustomer: Scalars['Boolean']['output'];
  applyOncePerOrder: Scalars['Boolean']['output'];
  categories?: Maybe<CategoryCountableConnection>;
  code: Scalars['String']['output'];
  collections?: Maybe<CollectionCountableConnection>;
  countries?: Maybe<Array<Maybe<CountryDisplay>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deliveryType?: Maybe<DiscountDeliveryTypeEnum>;
  deliveryTypes?: Maybe<Array<Maybe<DiscountDeliveryTypeEnum>>>;
  description?: Maybe<Scalars['String']['output']>;
  discountValue?: Maybe<Scalars['Float']['output']>;
  discountValueType: DiscountValueTypeEnum;
  eligibleCustomers?: Maybe<UserCountableConnection>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  group?: Maybe<VoucherGroup>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Image>;
  isApplicable?: Maybe<Scalars['Boolean']['output']>;
  isAppliedOnEligibleItems: Scalars['Boolean']['output'];
  isAppliedToAllMalls?: Maybe<Scalars['Boolean']['output']>;
  isCashOnly: Scalars['Boolean']['output'];
  isHidden?: Maybe<Scalars['Boolean']['output']>;
  isLimitToNewCustomer: Scalars['Boolean']['output'];
  isMinEligibleOnly: Scalars['Boolean']['output'];
  isSpecificCustomer?: Maybe<Scalars['Boolean']['output']>;
  malls?: Maybe<MallCountableConnection>;
  maxDiscountValue?: Maybe<Scalars['Float']['output']>;
  minCheckoutItemsQuantity?: Maybe<Scalars['Int']['output']>;
  minSpent?: Maybe<Money>;
  minTenants?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  paymentMethod?: Maybe<DiscountPaymentMethodEnum>;
  productVariants?: Maybe<ProductVariantCountableConnection>;
  products?: Maybe<ProductCountableConnection>;
  smopDiscountShare?: Maybe<Scalars['Float']['output']>;
  startDate: Scalars['DateTime']['output'];
  status?: Maybe<DiscountStatusEnum>;
  tenantDiscountShare?: Maybe<Scalars['Float']['output']>;
  translation?: Maybe<VoucherTranslation>;
  type: VoucherTypeEnum;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  usageLimit?: Maybe<Scalars['Int']['output']>;
  used: Scalars['Int']['output'];
  user?: Maybe<User>;
  verticalType?: Maybe<VoucherClassificationEnum>;
  voucherTenants?: Maybe<Array<Maybe<VoucherTenant>>>;
};


export type VoucherCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type VoucherCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type VoucherEligibleCustomersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type VoucherImageUrlArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type VoucherMallsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type VoucherProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductVariantFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ProductVariantSortingInput>;
};


export type VoucherProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ProductFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type VoucherTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type VoucherAddBrandGroups = {
  __typename?: 'VoucherAddBrandGroups';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucher?: Maybe<Voucher>;
};

export type VoucherAddCatalogues = {
  __typename?: 'VoucherAddCatalogues';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucher?: Maybe<Voucher>;
};

export type VoucherAddCustomers = {
  __typename?: 'VoucherAddCustomers';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucher?: Maybe<Voucher>;
};

export type VoucherAddMalls = {
  __typename?: 'VoucherAddMalls';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucher?: Maybe<Voucher>;
};

export type VoucherBrandGroupInput = {
  brandGroup: Scalars['ID']['input'];
  isAppliedToAllTenants: Scalars['Boolean']['input'];
  smoDiscountShare?: InputMaybe<Scalars['Decimal']['input']>;
  tenantDiscountShare?: InputMaybe<Scalars['Decimal']['input']>;
  tenants?: InputMaybe<Array<InputMaybe<VoucherTenantInput>>>;
};

export type VoucherBrandGroupsInput = {
  brandGroups?: InputMaybe<Array<InputMaybe<VoucherBrandGroupInput>>>;
  isAppliedToAllBrandGroups: Scalars['Boolean']['input'];
  smoDiscountShare?: InputMaybe<Scalars['Decimal']['input']>;
  tenantDiscountShare?: InputMaybe<Scalars['Decimal']['input']>;
};

export type VoucherBulkActivate = {
  __typename?: 'VoucherBulkActivate';
  count: Scalars['Int']['output'];
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type VoucherBulkCreate = {
  __typename?: 'VoucherBulkCreate';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucherJob?: Maybe<VoucherJob>;
};

export type VoucherBulkDeactivate = {
  __typename?: 'VoucherBulkDeactivate';
  count: Scalars['Int']['output'];
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type VoucherBulkDelete = {
  __typename?: 'VoucherBulkDelete';
  count: Scalars['Int']['output'];
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
};

export type VoucherCatalogueInput = {
  brandGroupsWithSubsidy?: InputMaybe<VoucherBrandGroupsInput>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  productVariantsWithSubsidy?: InputMaybe<Array<InputMaybe<VoucherProductVariantInput>>>;
  product_variants?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  productsWithSubsidy?: InputMaybe<Array<InputMaybe<VoucherProductInput>>>;
  tenants?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export enum VoucherClassificationEnum {
  All = 'ALL',
  FoodAndBeverages = 'FOOD_AND_BEVERAGES',
  GeneralMerchandise = 'GENERAL_MERCHANDISE',
  Grocery = 'GROCERY',
  NationwideStores = 'NATIONWIDE_STORES',
  SmFulfilled = 'SM_FULFILLED'
}

export type VoucherCountableConnection = {
  __typename?: 'VoucherCountableConnection';
  edges: Array<VoucherCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type VoucherCountableEdge = {
  __typename?: 'VoucherCountableEdge';
  cursor: Scalars['String']['output'];
  node: Voucher;
};

export type VoucherCreate = {
  __typename?: 'VoucherCreate';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucher?: Maybe<Voucher>;
};

export type VoucherDelete = {
  __typename?: 'VoucherDelete';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucher?: Maybe<Voucher>;
};

export enum VoucherDiscountType {
  EVoucher = 'E_VOUCHER',
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE',
  PercentageAndCapped = 'PERCENTAGE_AND_CAPPED',
  Shipping = 'SHIPPING'
}

export type VoucherEligibleCustomerInput = {
  customers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type VoucherFilterInput = {
  discountType?: InputMaybe<Array<InputMaybe<VoucherDiscountType>>>;
  groupId?: InputMaybe<Scalars['ID']['input']>;
  hasGroup?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  started?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<Array<InputMaybe<DiscountStatusEnum>>>;
  timesUsed?: InputMaybe<IntRangeInput>;
  verticalType?: InputMaybe<VoucherClassificationEnum>;
  voucherType?: InputMaybe<Array<InputMaybe<VoucherTypeEnum>>>;
};

export type VoucherGroup = Node & {
  __typename?: 'VoucherGroup';
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  status?: Maybe<DiscountStatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vouchers?: Maybe<VoucherCountableConnection>;
};


export type VoucherGroupVouchersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<VoucherSortingInput>;
};

export type VoucherGroupCountableConnection = {
  __typename?: 'VoucherGroupCountableConnection';
  edges: Array<VoucherGroupCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type VoucherGroupCountableEdge = {
  __typename?: 'VoucherGroupCountableEdge';
  cursor: Scalars['String']['output'];
  node: VoucherGroup;
};

export type VoucherGroupCreate = {
  __typename?: 'VoucherGroupCreate';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucherGroup?: Maybe<VoucherGroup>;
};

export type VoucherGroupDelete = {
  __typename?: 'VoucherGroupDelete';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucherGroup?: Maybe<VoucherGroup>;
};

export type VoucherGroupFilterInput = {
  createdBy?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<DiscountStatusEnum>>>;
};

export type VoucherGroupInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<DiscountStatusEnum>;
};

export enum VoucherGroupSortField {
  Code = 'CODE',
  CreateDate = 'CREATE_DATE',
  DeleteDate = 'DELETE_DATE',
  UpdateDate = 'UPDATE_DATE'
}

export type VoucherGroupSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: VoucherGroupSortField;
};

export type VoucherImageCreate = {
  __typename?: 'VoucherImageCreate';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucher?: Maybe<Voucher>;
};

export type VoucherImageCreateInput = {
  image: Scalars['Upload']['input'];
  voucher: Scalars['ID']['input'];
};

export type VoucherImageDelete = {
  __typename?: 'VoucherImageDelete';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucher?: Maybe<Voucher>;
};

export type VoucherInput = {
  applyOncePerCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  applyOncePerOrder?: InputMaybe<Scalars['Boolean']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  countries?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  deliveryTypes?: InputMaybe<Array<InputMaybe<DiscountDeliveryTypeEnum>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  discountValue?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  discountValueType?: InputMaybe<DiscountValueTypeEnum>;
  endDate: Scalars['DateTime']['input'];
  groupCode?: InputMaybe<Scalars['String']['input']>;
  isAppliedOnEligibleItems?: InputMaybe<Scalars['Boolean']['input']>;
  isAppliedToAllMalls: Scalars['Boolean']['input'];
  isCashOnly?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['Boolean']['input']>;
  isLimitToNewCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  isMinEligibleOnly?: InputMaybe<Scalars['Boolean']['input']>;
  isSpecificCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  maxDiscountValue?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  minAmountSpent?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  minCheckoutItemsQuantity?: InputMaybe<Scalars['Int']['input']>;
  minTenants?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<DiscountPaymentMethodEnum>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  smopDiscountShare?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  startDate: Scalars['DateTime']['input'];
  tenantDiscountShare?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  type?: InputMaybe<VoucherTypeEnum>;
  usageLimit?: InputMaybe<Scalars['Int']['input']>;
  verticalType?: InputMaybe<VoucherClassificationEnum>;
};

export type VoucherJob = Job & Node & {
  __typename?: 'VoucherJob';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  processedCount?: Maybe<Scalars['Int']['output']>;
  status: JobStatusEnum;
  totalCount?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  voucherGroup?: Maybe<VoucherGroup>;
};

export type VoucherJobBulk = Job & Node & {
  __typename?: 'VoucherJobBulk';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  processedCount?: Maybe<Scalars['Int']['output']>;
  status: JobStatusEnum;
  totalCount?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  voucherGroups?: Maybe<Array<Maybe<VoucherGroup>>>;
};

export type VoucherMallInput = {
  isAppliedToAllMalls: Scalars['Boolean']['input'];
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type VoucherProductInput = {
  product: Scalars['ID']['input'];
  smoShare?: InputMaybe<Scalars['Decimal']['input']>;
  tenantShare?: InputMaybe<Scalars['Decimal']['input']>;
};

export type VoucherProductVariantInput = {
  product_variant: Scalars['ID']['input'];
  smoShare?: InputMaybe<Scalars['Decimal']['input']>;
  tenantShare?: InputMaybe<Scalars['Decimal']['input']>;
};

export type VoucherRemoveCatalogues = {
  __typename?: 'VoucherRemoveCatalogues';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucher?: Maybe<Voucher>;
};

export type VoucherRemoveCustomers = {
  __typename?: 'VoucherRemoveCustomers';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucher?: Maybe<Voucher>;
};

export type VoucherRemoveMalls = {
  __typename?: 'VoucherRemoveMalls';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucher?: Maybe<Voucher>;
};

export enum VoucherSortField {
  Applicability = 'APPLICABILITY',
  Code = 'CODE',
  CreationDate = 'CREATION_DATE',
  EndDate = 'END_DATE',
  MinimumSpentAmount = 'MINIMUM_SPENT_AMOUNT',
  StartDate = 'START_DATE',
  Type = 'TYPE',
  UpdateDate = 'UPDATE_DATE',
  UsageLimit = 'USAGE_LIMIT',
  VoucherValue = 'VOUCHER_VALUE'
}

export type VoucherSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: VoucherSortField;
};

export type VoucherTenant = Node & {
  __typename?: 'VoucherTenant';
  id: Scalars['ID']['output'];
  smoDiscountShare?: Maybe<Scalars['Float']['output']>;
  tenant: TenantPrivate;
  tenantDiscountShare?: Maybe<Scalars['Float']['output']>;
  voucher: Voucher;
};

export type VoucherTenantBulkUpdate = {
  __typename?: 'VoucherTenantBulkUpdate';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucherTenantsCount?: Maybe<Scalars['Int']['output']>;
};

export type VoucherTenantBulkUpdateInput = {
  id: Scalars['ID']['input'];
  smoDiscountShare: Scalars['Decimal']['input'];
  tenantDiscountShare: Scalars['Decimal']['input'];
};

export type VoucherTenantCountableConnection = {
  __typename?: 'VoucherTenantCountableConnection';
  edges: Array<VoucherTenantCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type VoucherTenantCountableEdge = {
  __typename?: 'VoucherTenantCountableEdge';
  cursor: Scalars['String']['output'];
  node: VoucherTenant;
};

export type VoucherTenantDelete = {
  __typename?: 'VoucherTenantDelete';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucherTenant?: Maybe<VoucherTenant>;
};

export type VoucherTenantFilterInput = {
  tenantIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  voucherIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type VoucherTenantInput = {
  smoDiscountShare: Scalars['Decimal']['input'];
  tenant: Scalars['ID']['input'];
  tenantDiscountShare: Scalars['Decimal']['input'];
};

export enum VoucherTenantSortField {
  CreatedAt = 'CREATED_AT',
  TenantStoreName = 'TENANT_STORE_NAME',
  UpdatedAt = 'UPDATED_AT',
  VoucherCode = 'VOUCHER_CODE',
  VoucherName = 'VOUCHER_NAME'
}

export type VoucherTenantSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: VoucherTenantSortField;
};

export type VoucherTenantSubsidyInput = {
  smoDiscountShare: Scalars['Decimal']['input'];
  tenantDiscountShare: Scalars['Decimal']['input'];
};

export type VoucherTenantUpdate = {
  __typename?: 'VoucherTenantUpdate';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucherTenant?: Maybe<VoucherTenant>;
};

export type VoucherTranslatableContent = Node & {
  __typename?: 'VoucherTranslatableContent';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  translation?: Maybe<VoucherTranslation>;
  voucher?: Maybe<Voucher>;
};


export type VoucherTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum;
};

export type VoucherTranslate = {
  __typename?: 'VoucherTranslate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  translationErrors: Array<TranslationError>;
  voucher?: Maybe<Voucher>;
};

export type VoucherTranslation = Node & {
  __typename?: 'VoucherTranslation';
  id: Scalars['ID']['output'];
  language: LanguageDisplay;
  name?: Maybe<Scalars['String']['output']>;
};

export enum VoucherTypeEnum {
  EntireOrder = 'ENTIRE_ORDER',
  EVoucher = 'E_VOUCHER',
  Shipping = 'SHIPPING',
  SpecificProduct = 'SPECIFIC_PRODUCT'
}

export type VoucherUpdate = {
  __typename?: 'VoucherUpdate';
  discountErrors: Array<DiscountError>;
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  voucher?: Maybe<Voucher>;
};

export type Warehouse = Node & {
  __typename?: 'Warehouse';
  address?: Maybe<Address>;
  companyName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  homeLocations?: Maybe<Array<Maybe<HomeLocation>>>;
  id: Scalars['ID']['output'];
  mall?: Maybe<Mall>;
  name: Scalars['String']['output'];
  shippingZones: ShippingZoneCountableConnection;
  slug: Scalars['String']['output'];
};


export type WarehouseShippingZonesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type WarehouseAddressInput = {
  areaCode?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  cityArea?: InputMaybe<Scalars['String']['input']>;
  country: CountryCode;
  countryArea?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  streetAddress1: Scalars['String']['input'];
  streetAddress2?: InputMaybe<Scalars['String']['input']>;
};

export type WarehouseCountableConnection = {
  __typename?: 'WarehouseCountableConnection';
  edges: Array<WarehouseCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type WarehouseCountableEdge = {
  __typename?: 'WarehouseCountableEdge';
  cursor: Scalars['String']['output'];
  node: Warehouse;
};

export type WarehouseCreate = {
  __typename?: 'WarehouseCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  warehouse?: Maybe<Warehouse>;
  warehouseErrors: Array<WarehouseError>;
};

export type WarehouseCreateInput = {
  address: WarehouseAddressInput;
  companyName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  mall?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  shippingZones?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['ID']['input']>;
};

export type WarehouseDelete = {
  __typename?: 'WarehouseDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  warehouse?: Maybe<Warehouse>;
  warehouseErrors: Array<WarehouseError>;
};

export type WarehouseError = {
  __typename?: 'WarehouseError';
  code: WarehouseErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum WarehouseErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type WarehouseFilterInput = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  malls?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['ID']['input']>;
};

export type WarehouseShippingZoneAssign = {
  __typename?: 'WarehouseShippingZoneAssign';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  warehouse?: Maybe<Warehouse>;
  warehouseErrors: Array<WarehouseError>;
};

export type WarehouseShippingZoneUnassign = {
  __typename?: 'WarehouseShippingZoneUnassign';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  warehouse?: Maybe<Warehouse>;
  warehouseErrors: Array<WarehouseError>;
};

export enum WarehouseSortField {
  WarehouseName = 'WAREHOUSE_NAME'
}

export type WarehouseSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: WarehouseSortField;
};

export type WarehouseUpdate = {
  __typename?: 'WarehouseUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  warehouse?: Maybe<Warehouse>;
  warehouseErrors: Array<WarehouseError>;
};

export type WarehouseUpdateInput = {
  address?: InputMaybe<WarehouseAddressInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tenant?: InputMaybe<Scalars['ID']['input']>;
};

export type Webhook = Node & {
  __typename?: 'Webhook';
  app: App;
  events: Array<WebhookEvent>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  secretKey?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the `app` field instead. This field will be removed after 2020-07-31. */
  serviceAccount: ServiceAccount;
  targetUrl: Scalars['String']['output'];
};

export type WebhookCountableConnection = {
  __typename?: 'WebhookCountableConnection';
  edges: Array<WebhookCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type WebhookCountableEdge = {
  __typename?: 'WebhookCountableEdge';
  cursor: Scalars['String']['output'];
  node: Webhook;
};

export type WebhookCreate = {
  __typename?: 'WebhookCreate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  webhook?: Maybe<Webhook>;
  webhookErrors: Array<WebhookError>;
};

export type WebhookCreateInput = {
  app?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<InputMaybe<WebhookEventTypeEnum>>>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  secretKey?: InputMaybe<Scalars['String']['input']>;
  serviceAccount?: InputMaybe<Scalars['ID']['input']>;
  targetUrl?: InputMaybe<Scalars['String']['input']>;
};

export type WebhookDelete = {
  __typename?: 'WebhookDelete';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  webhook?: Maybe<Webhook>;
  webhookErrors: Array<WebhookError>;
};

export type WebhookError = {
  __typename?: 'WebhookError';
  code: WebhookErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum WebhookErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type WebhookEvent = {
  __typename?: 'WebhookEvent';
  eventType: WebhookEventTypeEnum;
  name: Scalars['String']['output'];
};

export enum WebhookEventTypeEnum {
  AnyEvents = 'ANY_EVENTS',
  BrandCreated = 'BRAND_CREATED',
  BrandUpdated = 'BRAND_UPDATED',
  CheckoutCreated = 'CHECKOUT_CREATED',
  CheckoutQuantityChanged = 'CHECKOUT_QUANTITY_CHANGED',
  CheckoutUpdated = 'CHECKOUT_UPDATED',
  CustomerCreated = 'CUSTOMER_CREATED',
  FulfillmentCreated = 'FULFILLMENT_CREATED',
  InvoiceDeleted = 'INVOICE_DELETED',
  InvoiceRequested = 'INVOICE_REQUESTED',
  InvoiceSent = 'INVOICE_SENT',
  MallCreated = 'MALL_CREATED',
  MallUpdated = 'MALL_UPDATED',
  OrderCancelled = 'ORDER_CANCELLED',
  OrderCreated = 'ORDER_CREATED',
  OrderFulfilled = 'ORDER_FULFILLED',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderUpdated = 'ORDER_UPDATED',
  ProductCreated = 'PRODUCT_CREATED',
  ProductUpdated = 'PRODUCT_UPDATED',
  TenantCreated = 'TENANT_CREATED',
  TenantUpdated = 'TENANT_UPDATED'
}

export type WebhookFilterInput = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export enum WebhookSampleEventTypeEnum {
  BrandCreated = 'BRAND_CREATED',
  BrandUpdated = 'BRAND_UPDATED',
  CheckoutCreated = 'CHECKOUT_CREATED',
  CheckoutQuantityChanged = 'CHECKOUT_QUANTITY_CHANGED',
  CheckoutUpdated = 'CHECKOUT_UPDATED',
  CustomerCreated = 'CUSTOMER_CREATED',
  FulfillmentCreated = 'FULFILLMENT_CREATED',
  InvoiceDeleted = 'INVOICE_DELETED',
  InvoiceRequested = 'INVOICE_REQUESTED',
  InvoiceSent = 'INVOICE_SENT',
  MallCreated = 'MALL_CREATED',
  MallUpdated = 'MALL_UPDATED',
  OrderCancelled = 'ORDER_CANCELLED',
  OrderCreated = 'ORDER_CREATED',
  OrderFulfilled = 'ORDER_FULFILLED',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderUpdated = 'ORDER_UPDATED',
  ProductCreated = 'PRODUCT_CREATED',
  ProductUpdated = 'PRODUCT_UPDATED',
  TenantCreated = 'TENANT_CREATED',
  TenantUpdated = 'TENANT_UPDATED'
}

export enum WebhookSortField {
  App = 'APP',
  ServiceAccount = 'SERVICE_ACCOUNT',
  TargetUrl = 'TARGET_URL',
  WebhookName = 'WEBHOOK_NAME'
}

export type WebhookSortingInput = {
  behavior?: InputMaybe<OrderBehavior>;
  direction: OrderDirection;
  field: WebhookSortField;
};

export type WebhookUpdate = {
  __typename?: 'WebhookUpdate';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  webhook?: Maybe<Webhook>;
  webhookErrors: Array<WebhookError>;
};

export type WebhookUpdateInput = {
  app?: InputMaybe<Scalars['ID']['input']>;
  events?: InputMaybe<Array<InputMaybe<WebhookEventTypeEnum>>>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  secretKey?: InputMaybe<Scalars['String']['input']>;
  serviceAccount?: InputMaybe<Scalars['ID']['input']>;
  targetUrl?: InputMaybe<Scalars['String']['input']>;
};

export type Weight = {
  __typename?: 'Weight';
  unit: WeightUnitsEnum;
  value: Scalars['Float']['output'];
};

export enum WeightUnitsEnum {
  G = 'G',
  Kg = 'KG',
  Lb = 'LB',
  Oz = 'OZ'
}

export type Wishlist = Node & {
  __typename?: 'Wishlist';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  items: WishlistItemCountableConnection;
};


export type WishlistItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mallId?: InputMaybe<Scalars['ID']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type WishlistAddProductMutation = {
  __typename?: 'WishlistAddProductMutation';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  wishlistErrors: Array<WishlistError>;
  wishlistItems?: Maybe<Array<Maybe<WishlistItem>>>;
};

export type WishlistAddProductVariantMutation = {
  __typename?: 'WishlistAddProductVariantMutation';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  wishlistErrors: Array<WishlistError>;
  wishlistItems?: Maybe<Array<Maybe<WishlistItem>>>;
};

export type WishlistError = {
  __typename?: 'WishlistError';
  code: WishlistErrorCode;
  field?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export enum WishlistErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export type WishlistItem = Node & {
  __typename?: 'WishlistItem';
  id: Scalars['ID']['output'];
  mall?: Maybe<Mall>;
  product: Product;
  variants: ProductVariantCountableConnection;
  wishlist: Wishlist;
};


export type WishlistItemVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type WishlistItemCountableConnection = {
  __typename?: 'WishlistItemCountableConnection';
  edges: Array<WishlistItemCountableEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type WishlistItemCountableEdge = {
  __typename?: 'WishlistItemCountableEdge';
  cursor: Scalars['String']['output'];
  node: WishlistItem;
};

export type WishlistRemoveProductMutation = {
  __typename?: 'WishlistRemoveProductMutation';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  wishlistErrors: Array<WishlistError>;
  wishlistItems?: Maybe<Array<Maybe<WishlistItem>>>;
};

export type WishlistRemoveProductVariantMutation = {
  __typename?: 'WishlistRemoveProductVariantMutation';
  /** @deprecated Use typed errors with error codes. This field will be removed after 2020-07-31. */
  errors: Array<Error>;
  wishlistErrors: Array<WishlistError>;
  wishlistItems?: Maybe<Array<Maybe<WishlistItem>>>;
};

export type _Entity = Address | App | Category | Choice | Collection | Group | Product | ProductImage | ProductType | ProductUploadJob | ProductVariant | ServiceAccount | User;

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
};

export type PageInfoFragmentFragment = { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null };

export type UserFragment = { __typename?: 'User', id: string, email?: string | null, firstName: string, lastName: string, status?: LockStatus | null, contactNo?: string | null, promoCreator?: StaffPromoCreatorEnum | null, userPermissions?: Array<{ __typename?: 'UserPermission', code: PermissionEnum, name: string } | null> | null, avatar?: { __typename?: 'Image', url: string } | null, businessDetails?: { __typename?: 'Brand', id: string, status?: SmopStatusEnum | null } | null, permissionGroups?: Array<{ __typename?: 'Group', name: string, smopUsertypeCode?: SmopUserTypeCode | null } | null> | null, accessGroup?: { __typename?: 'AccessGroup', name?: string | null, smopUsertypeCode?: SmopUserTypeCode | null, accesses: Array<{ __typename?: 'Access', objectId?: string | null, privateObjectId?: string | null, accessType?: AccessTypeEnum | null, description?: string | null, storeType?: StoreTypeEnum | null } | null> } | null };

export type TokenAuthMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type TokenAuthMutation = { __typename?: 'Mutation', tokenCreate?: { __typename?: 'CreateToken', csrfToken?: string | null, token?: string | null, errors: Array<{ __typename?: 'AccountError', code: AccountErrorCode, field?: string | null, message?: string | null, user?: { __typename?: 'User', id: string, email?: string | null } | null }>, user?: { __typename?: 'User', id: string, email?: string | null, firstName: string, lastName: string, status?: LockStatus | null, contactNo?: string | null, promoCreator?: StaffPromoCreatorEnum | null, malls?: { __typename?: 'MallCountableConnection', totalCount?: number | null, edges: Array<{ __typename?: 'MallCountableEdge', node: { __typename?: 'Mall', id: string, name?: string | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null, userPermissions?: Array<{ __typename?: 'UserPermission', code: PermissionEnum, name: string } | null> | null, avatar?: { __typename?: 'Image', url: string } | null, businessDetails?: { __typename?: 'Brand', id: string, status?: SmopStatusEnum | null } | null, permissionGroups?: Array<{ __typename?: 'Group', name: string, smopUsertypeCode?: SmopUserTypeCode | null } | null> | null, accessGroup?: { __typename?: 'AccessGroup', name?: string | null, smopUsertypeCode?: SmopUserTypeCode | null, accesses: Array<{ __typename?: 'Access', objectId?: string | null, privateObjectId?: string | null, accessType?: AccessTypeEnum | null, description?: string | null, storeType?: StoreTypeEnum | null } | null> } | null } | null } | null };

export type VerifyTokenMutationVariables = Exact<{
  token: Scalars['String']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type VerifyTokenMutation = { __typename?: 'Mutation', tokenVerify?: { __typename?: 'VerifyToken', payload?: any | null, user?: { __typename?: 'User', id: string, email?: string | null, firstName: string, lastName: string, status?: LockStatus | null, contactNo?: string | null, promoCreator?: StaffPromoCreatorEnum | null, malls?: { __typename?: 'MallCountableConnection', totalCount?: number | null, edges: Array<{ __typename?: 'MallCountableEdge', node: { __typename?: 'Mall', id: string, name?: string | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null, userPermissions?: Array<{ __typename?: 'UserPermission', code: PermissionEnum, name: string } | null> | null, avatar?: { __typename?: 'Image', url: string } | null, businessDetails?: { __typename?: 'Brand', id: string, status?: SmopStatusEnum | null } | null, permissionGroups?: Array<{ __typename?: 'Group', name: string, smopUsertypeCode?: SmopUserTypeCode | null } | null> | null, accessGroup?: { __typename?: 'AccessGroup', name?: string | null, smopUsertypeCode?: SmopUserTypeCode | null, accesses: Array<{ __typename?: 'Access', objectId?: string | null, privateObjectId?: string | null, accessType?: AccessTypeEnum | null, description?: string | null, storeType?: StoreTypeEnum | null } | null> } | null } | null } | null };

export type UserDetailsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UserDetailsQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, email?: string | null, firstName: string, lastName: string, status?: LockStatus | null, contactNo?: string | null, promoCreator?: StaffPromoCreatorEnum | null, malls?: { __typename?: 'MallCountableConnection', totalCount?: number | null, edges: Array<{ __typename?: 'MallCountableEdge', node: { __typename?: 'Mall', id: string, name?: string | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } | null, userPermissions?: Array<{ __typename?: 'UserPermission', code: PermissionEnum, name: string } | null> | null, avatar?: { __typename?: 'Image', url: string } | null, businessDetails?: { __typename?: 'Brand', id: string, status?: SmopStatusEnum | null } | null, permissionGroups?: Array<{ __typename?: 'Group', name: string, smopUsertypeCode?: SmopUserTypeCode | null } | null> | null, accessGroup?: { __typename?: 'AccessGroup', name?: string | null, smopUsertypeCode?: SmopUserTypeCode | null, accesses: Array<{ __typename?: 'Access', objectId?: string | null, privateObjectId?: string | null, accessType?: AccessTypeEnum | null, description?: string | null, storeType?: StoreTypeEnum | null } | null> } | null } | null };

export const PageInfoFragmentFragmentDoc = gql`
    fragment PageInfoFragment on PageInfo {
  endCursor
  hasNextPage
  hasPreviousPage
  startCursor
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  email
  firstName
  lastName
  userPermissions {
    code
    name
  }
  avatar {
    url
  }
  businessDetails {
    id
    status
  }
  permissionGroups {
    name
    smopUsertypeCode
  }
  accessGroup {
    name
    smopUsertypeCode
    accesses {
      objectId
      privateObjectId
      accessType
      description
      storeType
    }
  }
  status
  contactNo
  promoCreator
}
    `;
export const TokenAuthDocument = gql`
    mutation TokenAuth($email: String!, $password: String!, $after: String, $before: String, $last: Int) {
  tokenCreate(email: $email, password: $password) {
    errors: accountErrors {
      code
      field
      message
      user {
        id
        email
      }
    }
    csrfToken
    token
    user {
      ...User
      malls(after: $after, before: $before, first: 100, last: $last) {
        edges {
          node {
            id
            name
          }
        }
        totalCount
        pageInfo {
          ...PageInfoFragment
        }
      }
    }
  }
}
    ${UserFragmentDoc}
${PageInfoFragmentFragmentDoc}`;
export type TokenAuthMutationFn = Apollo.MutationFunction<TokenAuthMutation, TokenAuthMutationVariables>;

/**
 * __useTokenAuthMutation__
 *
 * To run a mutation, you first call `useTokenAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenAuthMutation, { data, loading, error }] = useTokenAuthMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      last: // value for 'last'
 *   },
 * });
 */
export function useTokenAuthMutation(baseOptions?: Apollo.MutationHookOptions<TokenAuthMutation, TokenAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TokenAuthMutation, TokenAuthMutationVariables>(TokenAuthDocument, options);
      }
export type TokenAuthMutationHookResult = ReturnType<typeof useTokenAuthMutation>;
export type TokenAuthMutationResult = Apollo.MutationResult<TokenAuthMutation>;
export type TokenAuthMutationOptions = Apollo.BaseMutationOptions<TokenAuthMutation, TokenAuthMutationVariables>;
export const VerifyTokenDocument = gql`
    mutation VerifyToken($token: String!, $after: String, $before: String, $last: Int) {
  tokenVerify(token: $token) {
    payload
    user {
      ...User
      malls(after: $after, before: $before, first: 100, last: $last) {
        edges {
          node {
            id
            name
          }
        }
        totalCount
        pageInfo {
          ...PageInfoFragment
        }
      }
    }
  }
}
    ${UserFragmentDoc}
${PageInfoFragmentFragmentDoc}`;
export type VerifyTokenMutationFn = Apollo.MutationFunction<VerifyTokenMutation, VerifyTokenMutationVariables>;

/**
 * __useVerifyTokenMutation__
 *
 * To run a mutation, you first call `useVerifyTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyTokenMutation, { data, loading, error }] = useVerifyTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      last: // value for 'last'
 *   },
 * });
 */
export function useVerifyTokenMutation(baseOptions?: Apollo.MutationHookOptions<VerifyTokenMutation, VerifyTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyTokenMutation, VerifyTokenMutationVariables>(VerifyTokenDocument, options);
      }
export type VerifyTokenMutationHookResult = ReturnType<typeof useVerifyTokenMutation>;
export type VerifyTokenMutationResult = Apollo.MutationResult<VerifyTokenMutation>;
export type VerifyTokenMutationOptions = Apollo.BaseMutationOptions<VerifyTokenMutation, VerifyTokenMutationVariables>;
export const UserDetailsDocument = gql`
    query UserDetails($id: ID!, $after: String, $before: String, $last: Int) {
  user(id: $id) {
    ...User
    malls(after: $after, before: $before, first: 100, last: $last) {
      edges {
        node {
          id
          name
        }
      }
      totalCount
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
}
    ${UserFragmentDoc}
${PageInfoFragmentFragmentDoc}`;

/**
 * __useUserDetailsQuery__
 *
 * To run a query within a React component, call `useUserDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      last: // value for 'last'
 *   },
 * });
 */
export function useUserDetailsQuery(baseOptions: Apollo.QueryHookOptions<UserDetailsQuery, UserDetailsQueryVariables> & ({ variables: UserDetailsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserDetailsQuery, UserDetailsQueryVariables>(UserDetailsDocument, options);
      }
export function useUserDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserDetailsQuery, UserDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserDetailsQuery, UserDetailsQueryVariables>(UserDetailsDocument, options);
        }
export function useUserDetailsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UserDetailsQuery, UserDetailsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserDetailsQuery, UserDetailsQueryVariables>(UserDetailsDocument, options);
        }
export type UserDetailsQueryHookResult = ReturnType<typeof useUserDetailsQuery>;
export type UserDetailsLazyQueryHookResult = ReturnType<typeof useUserDetailsLazyQuery>;
export type UserDetailsSuspenseQueryHookResult = ReturnType<typeof useUserDetailsSuspenseQuery>;
export type UserDetailsQueryResult = Apollo.QueryResult<UserDetailsQuery, UserDetailsQueryVariables>;