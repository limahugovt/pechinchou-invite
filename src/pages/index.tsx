import Image from "next/image";
import { useEffect, useState } from "react";
import CustomHead from "../components/CustomHead";
import backgroundImage from "../components/InviteWhatsappPage/background-image.jpg";
import { generateRandomPhone } from "../components/InviteWhatsappPage/functions";
import IconWhatsAppSimple from "../components/InviteWhatsappPage/IconWhatsAppSimple";
import Logo from "../components/InviteWhatsappPage/logo.jpg";
import Products from "../components/InviteWhatsappPage/products.png";
import {
  AnimatedPhone,
  AnimatedVacancies,
  BackgroundProductsImage,
  CardContentWrapper,
  CardWithBackground,
  CentralContent,
  CopyrightText,
  GroupCard,
  GroupInfoSection,
  GroupLogo,
  GroupName,
  HeaderContainer,
  HeaderTitle,
  JoinGroupButton,
  MainContentArea,
  PageContainer,
} from "../components/InviteWhatsappPage/styles";

export default function WhatsAppPage() {
  const [remainingSlots, setRemainingSlots] = useState(50);
  const [currentPhone, setCurrentPhone] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      setRemainingSlots(Math.floor(Math.random() * 21) + 30);
      setCurrentPhone(generateRandomPhone());
      setIsInitialized(true);
      return;
    }

    if (remainingSlots <= 1) {
      return;
    }

    const randomDelay = Math.floor(Math.random() * 2000) + 1000;

    const timeout = setTimeout(() => {
      setIsAnimating(true);

      setTimeout(() => {
        let newPhone;
        do {
          newPhone = generateRandomPhone();
        } while (newPhone === currentPhone);

        setCurrentPhone(newPhone);
        setRemainingSlots((prev) => Math.max(1, prev - 1));
        setIsAnimating(false);
      }, 250);
    }, randomDelay);

    return () => clearTimeout(timeout);
  }, [currentPhone, isInitialized, remainingSlots]);

  return (
    <>
      <CustomHead />
      <PageContainer backgroundImage={backgroundImage.src}>
        <HeaderContainer>
          <HeaderTitle>
            RECEBA AS MELHORES PROMOÇÕES NO SEU WHATSAPP
          </HeaderTitle>
        </HeaderContainer>
        <MainContentArea>
          <CentralContent>
            <CardWithBackground>
              <BackgroundProductsImage
                src={Products.src}
                alt="Produtos em promoção"
              />
              <GroupCard>
                <CardContentWrapper>
                  <GroupLogo src={Logo.src} alt="Logo do grupo de promoções" />
                  <GroupName>Pechinchou Promoções</GroupName>
                  <JoinGroupButton
                    href={"https://pechinchou.com.br/whatsapp/entrar"}
                    target="_blank"
                  >
                    <Image
                      src={IconWhatsAppSimple({})}
                      alt="Ícone do WhatsApp"
                      width={17}
                      height={17}
                    />
                    <p>Entrar Agora</p>
                  </JoinGroupButton>
                </CardContentWrapper>
              </GroupCard>
            </CardWithBackground>
            <GroupInfoSection>
              <AnimatedVacancies key={remainingSlots} isAnimating={isAnimating}>
                <span
                  style={{ display: "inline-block" }}
                  className="animated-number"
                >
                  {remainingSlots}
                </span>{" "}
                Vagas Restantes
              </AnimatedVacancies>
              <AnimatedPhone key={currentPhone} isAnimating={isAnimating}>
                {currentPhone
                  ? `${currentPhone} entrou no grupo`
                  : "Carregando..."}
              </AnimatedPhone>
            </GroupInfoSection>
          </CentralContent>
          <CopyrightText>
            ©️ Ajudando pessoas a economizarem desde 2014
          </CopyrightText>
        </MainContentArea>
      </PageContainer>
    </>
  );
}
