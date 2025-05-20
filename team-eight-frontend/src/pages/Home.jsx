import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Flex,
  For,
  Image,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import NewsListItem from "../components/NewsListItem";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";

import onlyLogo from "../assets/onlyLogo.png";
import high from "../assets/high.jpg";

const Home = () => {
  const [openDialogIndex, setOpenDialogIndex] = useState(null);

  return (
    <Box width={"100%"}>
      <NavBar />
      <Flex direction={"column"} alignItems={"start"} mx={12} mt={10}>
        <VStack mx={4} align={"start"} mb={8}>
          <Text fontSize="3xl" fontWeight="bold">
            My News
          </Text>
          <Text color="gray.500">관련 키워드들...</Text>
        </VStack>

        {/* 나중에 데이터들을 리스트로 받아서 map으로 호출 */}
        <For each={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
          {(item, index) => (
            <Dialog.Root
              key={index}
              size={"xl"}
              width={"100%"}
              lazyMount
              open={openDialogIndex === index}
              onOpenChange={(e) => setOpenDialogIndex(e.open ? index : null)}
            >
              <Dialog.Trigger asChild>
                <Button
                  onClick={() => console.log("CLICK")}
                  height={"auto"}
                  width={"100%"}
                  variant="plain"
                >
                  <NewsListItem />
                </Button>
              </Dialog.Trigger>
              <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                  <Dialog.Content>
                    <Dialog.Header>
                      <Box>
                        <Dialog.Title>뉴스 #{index + 1}</Dialog.Title>
                        <Text fontSize="sm" color="gray.500">
                          2024년 5월 19일
                        </Text>
                      </Box>
                    </Dialog.Header>
                    <Dialog.Body px={12}>
                      <VStack>
                        <Image
                          mb={4}
                          src={high}
                          borderRadius={"2xl"}
                          height={400}
                        />
                        <Text color={"gray"} fontSize={"md"}>
                          금호타이어 주가가 넥스트레이드 프리마켓(오전 8시~8시
                          50분)에 이어 정규장(메인마켓)에서도 급락세를 보이고
                          있다. 19일 오전 10시 29분 기준 금호타이어는 전 거래일
                          대비 360원(7.48%) 하락한 4450원에 거래되고 있다.
                          금호타이어는 이날 프리마켓에서 전 거래일 대비
                          195원(4.05%) 하락한 4615원으로 장을 열었다. 이후
                          낙폭을 확대하며 4405원에 거래를 마쳤다. 주가는 지난
                          17일 금호타이어 광주공장에서 발생한 대형 화재로 급락한
                          것으로 풀이된다.
                        </Text>

                        <Image src={onlyLogo} mb={4} />
                        <Text color={"gray"} fontSize={"md"}>
                          김창호 한국투자증권(030490) 연구원은 "광주 공장
                          생산능력은 1600만 본으로, 국내 공장 생산능력의 60%를
                          차지한다"며 "2025년 사업계획 생산량은 1200만 본으로
                          계획돼 있었으나 연내 가동 재개가 어려울 경우 약
                          700만본 규모의 판매 차질을 빚을 것"이라고 했다. 이어
                          "생산 차질에 따른 판매량 감소를 반영해 실적 추정치를
                          하향 조정하고 목표가를 기존 7000원에서 6000원으로
                          하향한다"고 덧붙였다. 같은 시각 넥센타이어는 5.12%,
                          한국타이어앤테크놀로지는 1.25% 오르는 중이다.
                          반사이익을 볼 수 있다는 심리가 작용한 영향이다.
                        </Text>

                        <Text mt={8} color={"gray.400"}>
                          Reference:
                          https://www.ltn.kr/news/articleView.html?idxno=48479
                        </Text>
                      </VStack>
                    </Dialog.Body>
                    <Dialog.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Dialog.CloseTrigger>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>
          )}
        </For>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Home;
