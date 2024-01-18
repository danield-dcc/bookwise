import {
  HomeContainer,
  LoginContent,
  SubTitle,
  Title,
} from '@/styles/pages/home'
import Image from 'next/image'
import loginImg from '@/assets/login/Image.svg'
import { LoginButton } from '@/components/loginButton'

import googleImg from '@/assets/login/google-icon.svg'
import gitHubImg from '@/assets/login/github-icon.svg'
import rocketIcon from '@/assets/login/rocket-icon.svg'

export default function Home() {
  return (
    <HomeContainer>
      <Image src={loginImg} width={598} height={912} alt="" />

      <LoginContent>
        <Title>Boas Vindas!</Title>
        <SubTitle>Faça seu login ao acesse como visitante</SubTitle>

        <LoginButton text="Entrar com Google" img={googleImg} />
        <LoginButton text="Entrar com GitHub" img={gitHubImg} />
        <LoginButton text="Acessar como visitante" img={rocketIcon} />
      </LoginContent>
    </HomeContainer>
  )
}
