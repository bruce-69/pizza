import * as S from "./style";
//esse s nao muite semantico ps Style

const Home = () => {
  <header>
    <S.HomeHeaderDetails>
      <div>
        <S.HomeHeaderDetailsLogo>Pizza Fresh</S.HomeHeaderDetailsLogo>
        <S.HomeHeaderDetailsDate>Aqui ficará a data</S.HomeHeaderDetailsDate>
      </div>
      <header>
        <S.HomeHeaderDetails>
          <div>...</div>
          <S.HomeHeaderDetailsSearch>
            <input type="text" placeholder="Procure pelo sabor" />
          </S.HomeHeaderDetailsSearch>
        </S.HomeHeaderDetails>
      </header>
    </S.HomeHeaderDetails>
  </header>;
};

export default Home;
