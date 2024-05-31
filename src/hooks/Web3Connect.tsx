'use client'
import {useWeb3Modal, useWeb3ModalAccount, useWalletInfo} from '@web3modal/ethers5/react'
import { Button } from "@/components/ui/button";

export default function Web3Connect() {
    const {open} = useWeb3Modal()
    const {address, isConnected, chainId} = useWeb3ModalAccount()
    const {walletInfo} = useWalletInfo()


    return (
        <>
            <Button onClick={() => open()}>{isConnected ? `Account` : 'Connect Wallet'}</Button>
        </>
    )
}