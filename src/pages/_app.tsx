import "@/styles/style.scss";
import type { AppProps } from "next/app";
import {ThemeSwitchProvider} from '@jaiminmoslake7020/react-dark-light-theme-switcher';

export default function App({ Component, pageProps }: AppProps) {

  return <ThemeSwitchProvider applyTo={'body'} >
    <Component {...pageProps} />
  </ThemeSwitchProvider>
}
