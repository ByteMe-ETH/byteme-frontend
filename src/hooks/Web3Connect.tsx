'use client'
import {useWeb3Modal, useWeb3ModalAccount, useWalletInfo} from '@web3modal/ethers5/react'
import {Button} from "@/components/ui/button";

export default function Web3Connect() {
    const {open} = useWeb3Modal()
    return (
        <>
            <Button onClick={() => open()}>{'Connect Wallet'}</Button>
        </>
    )
}