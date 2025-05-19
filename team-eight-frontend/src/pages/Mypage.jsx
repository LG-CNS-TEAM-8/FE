import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Icon,
  Grid,
  GridItem,
  Image,
  VStack,
} from "@chakra-ui/react";

import { CiSettings } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Mypage = () => {
  return (
    <>
      <NavBar />
      <Box px={12} minH="100vh">
        {/* 상단 프로필 영역 */}
        <Flex
          bg="gray.100"
          p={10}
          borderRadius="2xl"
          justify="space-between"
          mb={10}
        >
          <Flex align="center">
            <Image
              size="xl"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBUQEBAVEBAQFRUPFRUVFRUVFRAQFRUWFhUWFRUYHSkgGRolGxUVIjEiJSktLi4uFx8zODUtNygvLisBCgoKDg0OFxAQFyslHx0rKy0tKy8rListLS0tLS0tLS0tKystLS0tKy0tLS0tKy0tLSstLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBQYHBAj/xABDEAABAwEFBQYCBwYEBwEAAAABAAIDEQQFEiExBkFRYXEHEyIygZGhsRQjQlLB0fBicoKisrMzNXThJUNTksLS8Rb/xAAZAQACAwEAAAAAAAAAAAAAAAAAAQIDBAX/xAAmEQEAAgICAQMEAwEAAAAAAAAAAQIDESExEgQTIjJBQlEzYXEU/9oADAMBAAIRAxEAPwDqCBTRSk2ClFNFKAIiJgUqFKYEUIgCIiZCIhKZCodK0EAuAJ0Fcz0CxF6Xw1oAje3xav1DRWh036/BarbNpmwOGfeFrqggUdmC2meoofjvVNs9azo4rLoReBvQPB3rnT9r2yZtND6ivKhyRm0jRUPfhOAloP3hoa7qKH/VXej8JdHRa7ZNq4n4cUcrGSCrZHN8B9QcvVZ2Kdj6hrgaZHktFb1t1KuYmF1QiKSIigomiIiJkgqFKIJCgqpQUEoKhVKCmjKlFKIJeUoFKytwpRFIChSiYQilQmQiKUwhFKhBIcaCq1DafaR0b3QxBvhbVzjU1JrRrQKZ5HPcsttPM8WeYR+drKtbvc4516ZLjt6Xs45OkLsqEHOlSDXPQ616rPnyTHxhKNPfJeWPzOLa1yrkNcqU6LG2a6ZLSC4UaS4UcB6buSiON0uHmQKDeKLfrlu4Ma2tCRupoVzpt49NNccT21ODY6WOjzKTTMilCRyPFX7ZcL8Dg3xZVAO+n61XQWxVOf4pHYmtFNVGb2me1nt1105zdN5PYxsD3OADsbgRUM4UNVvtz3uwyBoqxpa1gr9p7agZ8S2nsFgdpria4YtCNKfb/wB1ibirO7CHloaQ71bp8gr8WWd8KMlIiHX4ZMQqq1gNm7RIHPs8vnjAcD95h0Py91n11aW8o2x24QiIpIiIiaIiIgkKCqlBQSlQVUVBTRUqFKIC+FNEClZ24QoiYQiIghQilSAiIghQpVLzQGuiA0TbW/WYS0ENDQSXE0PIDrmaLlFotIkf95prnxqf17rZO0iyNbK5sbi40ElQSRR2tTxrl7LSLO/A7StcvmsVomZmZ7E21w3m7WhjcQbU0BH4ALYrPa5izKWKN4+yQSfgCsRdNmcYmgeYgemWVV6rJsezvGvlxvcx2KuIBpP7tNCsuqzPLXuYjhkLsv6fvRFJhdXRzSCDWoqCFk73vqWzuwtDSeJpQdarG2uyxQSAxgg6muZFTWg5LK267WWuMYq18wIIBIpoTQ09OCU62nG9bW23jLJHiexj208WBwJA44Vr1iljs9uLHPYxhxOY1w82IDFhAFXHlyWSu3Zd1noY3y1Di4teGkOaaVAc00OVfda1e3cPtcjJwwBgwhz9GeKpIFMzTmNVZjiIvwpyTuvLfdirS2Wa0ltXNa5jA4nFTw1dG01OQPtWm5bYtP7OJw6KWNseBkUhDKClY3Vc2o+9ShP7wW4Lp4vphjt2IihWoSIiIREREFIiImSCqVUoQihERAXwiBFnbxQpRMkIiJgRETAiIghee34TG4ONA5pbWtDmNx4q+qZYw4FpFQdUyfP18skE8jZJHS4RgBcXHwE1FK6bvdWLJd7XShtakZkb8I3ra+0KzwQTtLWmI4SXUaMLsRoRXkOC8N1XUY3GYnESC2tPMx1M6nL2XOyfGV1KxaGZsr8NKLY7HbA5q1R78KuutuCKlaF5wjpqVmtHLRWeOU3/AH5HE/EWPfwwjw5aklZG49rI5nMiwEOcTTCC4aVzIyHqtWN82fFhc10u6jaDF0rqs7cl82JtI4WmzknyuFASab/zU5px0Itz23jv2ltQtNtVzCW2lxHgleC52PAWANANCDXcVlmT+bkVjb0s8TzHDaJHs+kShsfdkhxrgcG1GYqRSuSji3N4LJEeMy3q6bFDDEGQNDY83CmeInVxO8nivardlgbGxsbBhYwBjRwaBQK4V246c2ZQoUqCmiIiIREREwIiIRFClQgkKFKIJeUqEVDeIiJhCIiYEUhQghQiJklERAc/7U7tdKIj9gYw7cMRw4a8d+q5VdjJ47Q2ESuEchpgLiWgUdoDppuX0Te8DXwux6NDnGoqCA01BG8EVHquI2yySx3iwuiEbXONACSMIH2TXPcs2autz+zjuGYmdryVf0Ns8Rr/AMt2evkcCD8aLx2x5ac9DvV66raGvwnyvq13RYZ/cNMTzqWtTbBh8hEdqa1ppTvGmo5VBz9l67n7OpBO0SWhpiBq7u8Yc7lnSnVbW65HONRIMNK+izF03Y6LMvBHAcVZOedHGGkTvRKwQsdXRtT6DP5KrZa2TWqaN7rNhZGPE57QMBLT/hk5k1w+ldKAG4bCbW8xscGUo4kioIDh4ac/zW4WaztjFGim88yrfSYvylRnyfjC6FClQugyCIiZIREQQiImQiIgkIpRBIREQS6ilFQ3oRETCEUomSEUqEEhSiJgUKSrc0zY2l73BjG5lziGtA5k5BMK3AEUOYOS1vai7oGx96WgPaMDBlQGpOQOmRdorG0HaDYLEWAvNoxjETAWSCNu4uOIewzWBvDaVl4UfE4GJvlAOldcXPkdFn9RkitJSxx5WYO0tDgWuFQfh0Wr2qV8EmAnm07nDj14hbZIsZe1gbMymjhm08D+RXPx21205Kbjhau3aqWLwkYm7hwWYsu1UknhDcIOS0DCQcJqCDQ8iul7I3JFHEH17yR+rj9kfdaDp1Vt4rWNqqWvPG247GwnC951OEfMn8Fsix9xxYYurifag/BZBb8EaxwzZZ+UiIoVysKIhTRkUKVCCEREFIiIghERBIRSiAuoihUN4iImBFCJoiIpTCF4b2vez2RneWiVsTd1T4nng1ozcegWs9oO3Dbub3MNH2p4qK5thadHOG8ncOVTwPFrTeUk8jpZnulkdq9xqenIchkFC1tITbTqlv7VmgkQ2UubudI8AnngaD81pG0m09ovA/XyjADVsbWlsbedKmp5krWjaCpEo371XNplHZamgCg/XxXmgkkidjheY3cjkeRGh9VekbQqiiQZmwbWSA4bRHiH32ZEcy3Q+lFs13wOtdHQnEw6u3Dl15Ln5Cqs800JJgmfFi1DXObX2IVN8MT1wupntH1cusT3BAyIlrA57hRzjq4cOXoslcgEceEClOVFzSx7ZW6NmF7xOw5UkaC5vLE2hr1qs1cG3kccjBaIXCPE0lzHB2EA/dIFR6qj2L9L4z007TY4cEbWnUDPqcz8VeVmxWuOeNssTg+ORoe1w0c06HNXl14jUahgmdyIiJkIiJooUKUQSEREEIiIAiIhEREQFyqKFKpdARETJCIUTIWp7f7YNu2LCyjrTICWNOYY3QvcPkN56LOX9fEVhs77TMaMjFaDzPccmsbzJoF8435e8ttnfaJj45TioDkxoyaxvICg50ULTpC1tPJb7Y+Z7pZXl8khL3OJqXOPH4D0VqJ2XxVqQ5fBXY+R5KtWklQ05I5W60CAvslr4eCrovJB5gvWSg0FRRSiAlpprocjy4H9blNFSV5bS8jpuJ+RQG77Fbb2iwlsRd3tnDiDC7VjdS6N2451poeG9d1sdqZNG2WNwdHIA5pG8FfLtmo4Yszhzqab8uOmRypvC3HZHauawu8Jxwk+OInJ3Nv3Xc/dTrfXEk7uixtxX7Z7dH3kD8VPMw5PjPBzd3XQ7lklfHKIoUqEyERCgkIiIIREQQiIghERBLiBQpVLoChETIRFidrL2+hWGe0imKKMlldDKfDGDx8RbkmUuSdsu0ff2oWNjqxWTNwGjrQRnX91pp1LloXVUMJe8ucS4uJe4nMucTUkneSVWqZlTvcrEpzVQfQV36K25yrhbiyO8j5pEuVr6paIi0Cu/dyVUsdB+vZeed2Tf4vmEB6bC8iSnEL1MtBDCMiSa5itRTPXmsZA+jwfRex+p6ok4e6ykOa4YW4hmMh+uKsCQEEFrRvBAoajd6pYJMLxzy91FpZheRurUdDmEjWwpwVyAz/JVQROe4Na0uccgBqVv2zV3Nu8GaVze9cKHOojZqR1yzUL3iq3Him8udsYAa7z8V7bPVorTwk0rurwVq3va6V72ijXPc5o4NLiQKdFVDO5ooCRUg5dD+vRTV/dk7BeEtnkbNC8xyM0I3jeCNCORXc9kr/beFmbMAGvB7uRv3JAATTkQQR1XBQzG1jq0c+reReDlXhXRZzs72h+h2xgcaQ2giGQbmknwP8ARx9iVPHbUo2h3dERaVcihSoQQiIghERBCIiAIiIJWihFU3pUKVCALl3blepEUFiac5XG0SfuMyYDyLiT/Auor577Uby7685yNIsNmbybGPF/OXpW6Qv01YZZD1RUM06qqqqVLcjKqmIUPIq64q0XoD0QS4mFh11HVeW0DwtPAke//wAVbZCHAZAcup1VsmuRzANUBbZr0zXsc7Q8QPy/BWZmUoAKVFeqv2UVafEaAaURIhUxxrlruWcsl0yWyVjI8jTxOOjG8T7lYOywOkeI4xVzjQdOJ4ALodzWRtlio00cc3EauPzoqsuTxj+1+HH5zz0yl37PR2RhEIxSnIyPIFfbQcgvDb7l77/FtOFv2msFa/xO0HovbdrZJagyYW8taLy2m6WtdR9ry4YRip1xU+CyeU73vl0fGPHx1wR7EXe9gPfzA8cUf/qrX/4iwk0FrkYRvOBwPsAvTZLHYGPDHve+vF5AJ6MoF7bTc110rhfXWnfyj/yU/O37Vzip+mhXrZhZ/qQ8SBj3Ue3IOG403aheOatatFcVJBlo4HxDpqtj2vsFkEcRszyJMRYYy8EFlPMK51qAPVa/GHNaK1BaajLMB1WnLqB7rVWdxtgyV8ZmH0Nct5NtdmitLPLMxslPukjNvUGo9F7lz7sUtbn3e+J2XcTOaB+xI1sn9TnroC21ncM8iIiaIiLnl6bSOltzo4ycDD3TKHLEDRx9T8AFVlyeEbXYMM5ba26GigCgAKK1RKUREEIiICpFAUhVN6UREyWrTO2JjpHmjI2l7jwa0VJ9gvlS8bcZZXyuzfI50hHAuJca+pXeO2C+Po13OjafHanCAfuULpD7DD/EuAYwdyheVd5WXSkqO9K9ApwVXdjgFBB5RIqg9Z65Nn7RbD9VH4K0MjvCwcc9SelVttl7N2U+umxHgxob7EklVXzUrxMrKYb25iHN3nM81dsVkkldSNjnkmnhaXfJdZsexNiioe7LyMhjJPwWwRQsY2jWhoG4AAfBUz6qPxhdX0s/eXK7HsTbp25xd0Aah0jg3w9NfhuWbsHZ62Iky2nFUaRtoP8AudWvst6dIF53srWiqnPef6X09PSO+WAsl0WeyNLYW5u8znGrjwFdw5BWX2jPj8lfvRpadcisRK8lRiJnmVs6jiHqgZLI+jZAw88suStWm6ZQ7xTsaOJqfxXja8AjUU3r12iyRSEO+lOY07sIJB3qzpGeYRBcjMQ722OI1GABvxWSmuG7h4pJHvPAyAV55ALHwXVY60ktUz9+RDBT2S2Wu67KSRGZ5CKAFziTlqToBkpxueplCdRHMQ8F/mwh8TbGBnibIK42k5Bpz+1WuixEDsWE11LmkEkigwnKun+y89pZhcJG+VxDujuCuHwk/smRw9WVHyWiI1DFadzt0jsbtLe8tELdGxxEc8LntP8AUF1FcZ7JbQBeJaBQywOBG40wOr8KLsy04/pU37ERFYgx9/XkLLZ3ynzAYWDjIfL+foubdn13d9aw8ioi+sJzFXDSvHOi2Hai8mS2sWY0LIRU10MpAOfQGnuqLhvSKKVzY4wwnIjicuJ0yC5+bNHuRvqHT9PhmMMzHct7WE2d2gbbC8BuEsJy5A01WtXztRMZKYA2NpLXs1xA01O/5ZrJbD2KNrnyxuo14FI/u55mvD81bGfzvEV6UW9N7eO027bciKFrYUooRAVBSFSFIVbcqqoKIgnEe3S2OdbYYT5IoO8A/ake4E+0bVzUFdB7bh/xNv8Apov7ky58VVbtVPaaratltnxMRLaKiLUM0MnXg35rGXBdPeuxvH1bf5it2ikDRSuXBZs2TXENGHFv5WbJZrUxjQ1oDWtFAAAABuACui2haubcBorTrxKx+22eUNqkt9F5pr3aFq0t4OK87pidVOMaM5Gdtd/U8oWON+TbjRYe125jPM7PgMysLbLze8Ub4G8tT6q6uLf2U2z6bBaL2bUh8oxa61p7Kwb6h0x/yu/JaoEcrvahR79mxzXtHqKu+A+KsT3jjHhcYz015VCxI0VbU4pEIzktK93rnauLupJVy3QuDWOIp4Q08iCfzXnaVVXKlddeaki9FjtQAwuzYdRwXpnaG4j5hgaeooWrFjJehsvgc3XKg4ijgafNA2z2wl8Msd4RTOyicO5fXPCx4AxV5Gh6Ar6EXyxHJQ+i+idhbX3122Z9cX1QYSdasqzPn4Vdin7K7s8gUVXO+07bX6K36LZ5PrZGnG5nnjBybQ6CufPTTVWWtFUIiZa39NMlofK7WSRzzyq4r1WxjnNMlKCoFRqCMxWmYXmscEcbahxqDQDgOZVX2nAOycASB9k/ZNOoXIn5S7UfGI29ga60xUaaTigp/wBQDLD14LfNlbidZGEyOxSOAFB5WD8StY7P7lkdIZpWjBG4uafvPOlBy1z5Loq3enxRHylg9VnmfjAqSpKgrWwlUUImFaIiqb0qURCLhnbh/mLP9NH/AHJVz2IeIdQoRVWVz23uyCkTaZZKHFEWH7t/2WyVSiJoyhy8d5uIjcQaGm5EUq9o26as0k5lVbkRaWOEMUnVEQF9VBEQYFUURAU71UdCiICy45+3yX0B2Uf5VF+9L/ccURWY+0LdM3fryGZEhcH2vztspOZwt/oRFRf+af8AF1f4o/1kGuNDmvXdp+t9ERZ69t1/pdc2WaBY4qACramm8kmpPNZQIi6lPphyL/VKCoRFJBBRETD/2Q=="
              mr={6}
              boxSize={"200px"}
              borderRadius={"full"}
            />
            <Flex direction={"column"} align={"start"}>
              <Text fontWeight="bold" fontSize="xl">
                Mark Zuckerberg
              </Text>
              <Text mb={4} color="gray.600">
                mzmz@naver.com
              </Text>
              <Text mt={2} fontWeight="bold">
                관심 키워드들
              </Text>
            </Flex>
          </Flex>
          <VStack justify={"space-between"} align={"end"}>
            <Link to={"/mypage/settings"}>
              <Icon
                as={CiSettings}
                boxSize={8}
                color="gray.400"
                _hover={{
                  color: "gray.600",
                  transform: "scale(1.05)",
                  cursor: "pointer",
                }}
              />
            </Link>
            <Link to="/mypage/edit">
              <Button
                _hover={{
                  color: "gray.500",
                  transform: "scale(1.05)",
                  cursor: "pointer",
                }}
              >
                회원정보수정
              </Button>
            </Link>
          </VStack>
        </Flex>
        {/* 하단 뉴스 카드 영역 */}
        <Box
          border={"1px solid "}
          borderColor={"gray.200"}
          p={8}
          borderRadius="xl"
        >
          <Flex justify={"space-between"}>
            <Text fontSize={20} fontWeight="bold" mb={5}>
              좋아요를 누른 뉴스들
            </Text>
            <Icon
              as={FaPlus}
              boxSize={6}
              color="gray.400"
              _hover={{
                color: "gray.600",
                transform: "scale(1.05)",
                cursor: "pointer",
              }}
            />
          </Flex>

          <Grid
            templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            rowGap={12}
            columnGap={8}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <GridItem
                key={item}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="md"
              >
                <Box
                  bg="gray.200"
                  height="180px"
                  borderRadius="md"
                  mb={3}
                ></Box>
                <Text fontWeight="bold" fontSize={"xl"}>
                  Title
                </Text>
                <Text fontSize="sm" color="gray.600" mt={1}>
                  Body text for whatever you’d like to say. Add main takeaway
                  points, quotes, anecdotes, or even a very short story.
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Mypage;
