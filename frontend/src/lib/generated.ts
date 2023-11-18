import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Token
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'error',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'verfier', internalType: 'address', type: 'address' },
      { name: 'pars', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'ConditionNotMet',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [], name: 'OnlyOracle' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BatchMetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '__name', internalType: 'string', type: 'string' },
      { name: '__symbol', internalType: 'string', type: 'string' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: '_verifiers', internalType: 'address[]', type: 'address[]' },
      { name: '_parsArray', internalType: 'bytes32[][]', type: 'bytes32[][]' },
      { name: '_oracle', internalType: 'address', type: 'address' },
    ],
    name: 'init',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'mintConditions',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'mintOracle',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenFactoryABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_master', internalType: 'address payable', type: 'address' },
    ],
  },
  { type: 'error', inputs: [], name: 'ERC1167FailedCreateClone' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'creator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'TokenCreated',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'salt', internalType: 'bytes32', type: 'bytes32' }],
    name: 'contractAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '__name', internalType: 'string', type: 'string' },
      { name: '__symbol', internalType: 'string', type: 'string' },
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: '_verifiers', internalType: 'address[]', type: 'address[]' },
      { name: '_parsArray', internalType: 'bytes32[][]', type: 'bytes32[][]' },
      { name: '_oracle', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'create',
    outputs: [
      { name: 'proxy', internalType: 'address payable', type: 'address' },
    ],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenFactoryERC20BalanceOf
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenFactoryErc20BalanceOfABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'error',
    inputs: [{ name: 'who', internalType: 'address', type: 'address' }],
    name: 'BalanceNotEnough',
  },
  { type: 'error', inputs: [], name: 'WrongNumberOfParameters' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'adr', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'Verified',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'who', internalType: 'address', type: 'address' },
      { name: 'pars', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'verify',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenABI}__.
 */
export function useTokenRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof tokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: tokenABI, ...config } as UseContractReadConfig<
    typeof tokenABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useTokenBalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<typeof tokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"getApproved"`.
 */
export function useTokenGetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<typeof tokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useTokenIsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof tokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"name"`.
 */
export function useTokenName<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<typeof tokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"owner"`.
 */
export function useTokenOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof tokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useTokenOwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<typeof tokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useTokenSupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof tokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"symbol"`.
 */
export function useTokenSymbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<typeof tokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useTokenTokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<typeof tokenABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<typeof tokenABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenABI}__.
 */
export function useTokenWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof tokenABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof tokenABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof tokenABI, TFunctionName, TMode>({
    abi: tokenABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"approve"`.
 */
export function useTokenApprove<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<typeof tokenABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof tokenABI, 'approve', TMode>({
    abi: tokenABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"init"`.
 */
export function useTokenInit<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof tokenABI, 'init'>['request']['abi'],
        'init',
        TMode
      > & { functionName?: 'init' }
    : UseContractWriteConfig<typeof tokenABI, 'init', TMode> & {
        abi?: never
        functionName?: 'init'
      } = {} as any,
) {
  return useContractWrite<typeof tokenABI, 'init', TMode>({
    abi: tokenABI,
    functionName: 'init',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"mintConditions"`.
 */
export function useTokenMintConditions<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenABI,
          'mintConditions'
        >['request']['abi'],
        'mintConditions',
        TMode
      > & { functionName?: 'mintConditions' }
    : UseContractWriteConfig<typeof tokenABI, 'mintConditions', TMode> & {
        abi?: never
        functionName?: 'mintConditions'
      } = {} as any,
) {
  return useContractWrite<typeof tokenABI, 'mintConditions', TMode>({
    abi: tokenABI,
    functionName: 'mintConditions',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"mintOracle"`.
 */
export function useTokenMintOracle<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenABI,
          'mintOracle'
        >['request']['abi'],
        'mintOracle',
        TMode
      > & { functionName?: 'mintOracle' }
    : UseContractWriteConfig<typeof tokenABI, 'mintOracle', TMode> & {
        abi?: never
        functionName?: 'mintOracle'
      } = {} as any,
) {
  return useContractWrite<typeof tokenABI, 'mintOracle', TMode>({
    abi: tokenABI,
    functionName: 'mintOracle',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useTokenRenounceOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<typeof tokenABI, 'renounceOwnership', TMode> & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof tokenABI, 'renounceOwnership', TMode>({
    abi: tokenABI,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useTokenSafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<typeof tokenABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof tokenABI, 'safeTransferFrom', TMode>({
    abi: tokenABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useTokenSetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<typeof tokenABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<typeof tokenABI, 'setApprovalForAll', TMode>({
    abi: tokenABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useTokenTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<typeof tokenABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<typeof tokenABI, 'transferFrom', TMode>({
    abi: tokenABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useTokenTransferOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<typeof tokenABI, 'transferOwnership', TMode> & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof tokenABI, 'transferOwnership', TMode>({
    abi: tokenABI,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenABI}__.
 */
export function usePrepareTokenWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof tokenABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareTokenApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof tokenABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"init"`.
 */
export function usePrepareTokenInit(
  config: Omit<
    UsePrepareContractWriteConfig<typeof tokenABI, 'init'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenABI,
    functionName: 'init',
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenABI, 'init'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"mintConditions"`.
 */
export function usePrepareTokenMintConditions(
  config: Omit<
    UsePrepareContractWriteConfig<typeof tokenABI, 'mintConditions'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenABI,
    functionName: 'mintConditions',
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenABI, 'mintConditions'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"mintOracle"`.
 */
export function usePrepareTokenMintOracle(
  config: Omit<
    UsePrepareContractWriteConfig<typeof tokenABI, 'mintOracle'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenABI,
    functionName: 'mintOracle',
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenABI, 'mintOracle'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareTokenRenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof tokenABI, 'renounceOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenABI,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenABI, 'renounceOwnership'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareTokenSafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof tokenABI, 'safeTransferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenABI, 'safeTransferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareTokenSetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<typeof tokenABI, 'setApprovalForAll'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenABI, 'setApprovalForAll'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareTokenTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof tokenABI, 'transferFrom'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenABI, 'transferFrom'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareTokenTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof tokenABI, 'transferOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenABI,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenABI, 'transferOwnership'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenABI}__.
 */
export function useTokenEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof tokenABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenABI,
    ...config,
  } as UseContractEventConfig<typeof tokenABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenABI}__ and `eventName` set to `"Approval"`.
 */
export function useTokenApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof tokenABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useTokenApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<typeof tokenABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenABI}__ and `eventName` set to `"BatchMetadataUpdate"`.
 */
export function useTokenBatchMetadataUpdateEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenABI, 'BatchMetadataUpdate'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenABI,
    eventName: 'BatchMetadataUpdate',
    ...config,
  } as UseContractEventConfig<typeof tokenABI, 'BatchMetadataUpdate'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenABI}__ and `eventName` set to `"Initialized"`.
 */
export function useTokenInitializedEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenABI, 'Initialized'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenABI,
    eventName: 'Initialized',
    ...config,
  } as UseContractEventConfig<typeof tokenABI, 'Initialized'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenABI}__ and `eventName` set to `"MetadataUpdate"`.
 */
export function useTokenMetadataUpdateEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenABI, 'MetadataUpdate'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenABI,
    eventName: 'MetadataUpdate',
    ...config,
  } as UseContractEventConfig<typeof tokenABI, 'MetadataUpdate'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useTokenOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenABI, 'OwnershipTransferred'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenABI,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<typeof tokenABI, 'OwnershipTransferred'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenABI}__ and `eventName` set to `"Transfer"`.
 */
export function useTokenTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof tokenABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenFactoryABI}__.
 */
export function useTokenFactoryRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof tokenFactoryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof tokenFactoryABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenFactoryABI,
    ...config,
  } as UseContractReadConfig<
    typeof tokenFactoryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenFactoryABI}__ and `functionName` set to `"contractAddress"`.
 */
export function useTokenFactoryContractAddress<
  TFunctionName extends 'contractAddress',
  TSelectData = ReadContractResult<typeof tokenFactoryABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof tokenFactoryABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: tokenFactoryABI,
    functionName: 'contractAddress',
    ...config,
  } as UseContractReadConfig<
    typeof tokenFactoryABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenFactoryABI}__.
 */
export function useTokenFactoryWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenFactoryABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof tokenFactoryABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof tokenFactoryABI, TFunctionName, TMode>({
    abi: tokenFactoryABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenFactoryABI}__ and `functionName` set to `"create"`.
 */
export function useTokenFactoryCreate<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenFactoryABI,
          'create'
        >['request']['abi'],
        'create',
        TMode
      > & { functionName?: 'create' }
    : UseContractWriteConfig<typeof tokenFactoryABI, 'create', TMode> & {
        abi?: never
        functionName?: 'create'
      } = {} as any,
) {
  return useContractWrite<typeof tokenFactoryABI, 'create', TMode>({
    abi: tokenFactoryABI,
    functionName: 'create',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenFactoryABI}__.
 */
export function usePrepareTokenFactoryWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof tokenFactoryABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenFactoryABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenFactoryABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenFactoryABI}__ and `functionName` set to `"create"`.
 */
export function usePrepareTokenFactoryCreate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof tokenFactoryABI, 'create'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenFactoryABI,
    functionName: 'create',
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenFactoryABI, 'create'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenFactoryABI}__.
 */
export function useTokenFactoryEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof tokenFactoryABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenFactoryABI,
    ...config,
  } as UseContractEventConfig<typeof tokenFactoryABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenFactoryABI}__ and `eventName` set to `"TokenCreated"`.
 */
export function useTokenFactoryTokenCreatedEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenFactoryABI, 'TokenCreated'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenFactoryABI,
    eventName: 'TokenCreated',
    ...config,
  } as UseContractEventConfig<typeof tokenFactoryABI, 'TokenCreated'>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenFactoryErc20BalanceOfABI}__.
 */
export function useTokenFactoryErc20BalanceOfWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenFactoryErc20BalanceOfABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof tokenFactoryErc20BalanceOfABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenFactoryErc20BalanceOfABI,
    TFunctionName,
    TMode
  >({ abi: tokenFactoryErc20BalanceOfABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenFactoryErc20BalanceOfABI}__ and `functionName` set to `"verify"`.
 */
export function useTokenFactoryErc20BalanceOfVerify<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenFactoryErc20BalanceOfABI,
          'verify'
        >['request']['abi'],
        'verify',
        TMode
      > & { functionName?: 'verify' }
    : UseContractWriteConfig<
        typeof tokenFactoryErc20BalanceOfABI,
        'verify',
        TMode
      > & {
        abi?: never
        functionName?: 'verify'
      } = {} as any,
) {
  return useContractWrite<
    typeof tokenFactoryErc20BalanceOfABI,
    'verify',
    TMode
  >({
    abi: tokenFactoryErc20BalanceOfABI,
    functionName: 'verify',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenFactoryErc20BalanceOfABI}__.
 */
export function usePrepareTokenFactoryErc20BalanceOfWrite<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenFactoryErc20BalanceOfABI,
      TFunctionName
    >,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenFactoryErc20BalanceOfABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenFactoryErc20BalanceOfABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenFactoryErc20BalanceOfABI}__ and `functionName` set to `"verify"`.
 */
export function usePrepareTokenFactoryErc20BalanceOfVerify(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenFactoryErc20BalanceOfABI,
      'verify'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: tokenFactoryErc20BalanceOfABI,
    functionName: 'verify',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof tokenFactoryErc20BalanceOfABI,
    'verify'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenFactoryErc20BalanceOfABI}__.
 */
export function useTokenFactoryErc20BalanceOfEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof tokenFactoryErc20BalanceOfABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenFactoryErc20BalanceOfABI,
    ...config,
  } as UseContractEventConfig<typeof tokenFactoryErc20BalanceOfABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenFactoryErc20BalanceOfABI}__ and `eventName` set to `"Verified"`.
 */
export function useTokenFactoryErc20BalanceOfVerifiedEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenFactoryErc20BalanceOfABI, 'Verified'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: tokenFactoryErc20BalanceOfABI,
    eventName: 'Verified',
    ...config,
  } as UseContractEventConfig<typeof tokenFactoryErc20BalanceOfABI, 'Verified'>)
}
