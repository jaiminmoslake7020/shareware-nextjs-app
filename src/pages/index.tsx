import SinInputWrapper from '@/components/sin-input-wrapper/SinInputWrapper';
import {ThemeSwitcherBtnProviderChild} from '@jaiminmoslake7020/react-dark-light-theme-switcher';

export default function Home() {
  return (
      <main className="app-wrapper">
          <div className={"fixed top-4 w-screen flex justify-center"}>
              <ThemeSwitcherBtnProviderChild/>
          </div>
          <SinInputWrapper />
      </main>
  );
}
