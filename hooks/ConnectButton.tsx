import {useWeb3Modal} from '@web3modal/ethers5/react'
import {Button} from "../components/ui/button";

export default function ConnectButton() {

    const {open} = useWeb3Modal()

    return (
        <>
            <Button onClick={() => open()} variant={'default'}>Connect Wallet</Button>
            <Button onClick={() => open({view: 'Networks'})} variant={'secondary'}>Networks</Button>
        </>
    )
}