import React from 'react'
import Container from './Container'
import Button from './Button'
import BackgroundLight from './BackgroundLight'
import EnvironmentSvg from './EnvirontmentSvg'

export default function Hero() {
  return (
    <header className="w-full">
      <BackgroundLight>
        <Container>
          <div className="pt-20 pb-3 md:py-32">
            <div className="grid grid-cols-12 gap-y-16 md:gap-4">
              <div className="col-span-12 md:col-span-7">
                <div className="flex flex-col">
                  <h2 className="text-4xl md:text-5xl text-center md:text-left leading-tight font-serif font-bold mb-4">
                    Wir engagieren uns wirtschaftlich und sozial
                  </h2>
                  <p className="mx-auto md:ml-0 w-5/6 mb-16 text-center md:text-left">
                    Unser Ziel ist es die Gesellschaft mit Beteiligungen und
                    sozielen Projekt nachhaltig zu unterstützen.
                  </p>
                  <div className="flex">
                    <Button>Kontakt aufnehmen</Button>
                  </div>
                </div>
              </div>
              <div className="col-span-12 flex md:col-span-5">
                <div className="relative flex items-end justify-end w-full">
                  <div
                    className="w-full max-w-sm md:w-64 lg:w-80 xl:w-96"
                    style={{ transform: 'scaleX(-1)' }}
                  >
                    <EnvironmentSvg />
                  </div>
                  {/* <img
                    src="https://assets.website-files.com/5e4d529bb3825e74aeecd40e/5e502dd7e2da8075eed7b8de_Hand%201%402x.png"
                    width="395.5"
                    srcSet="https://assets.website-files.com/5e4d529bb3825e74aeecd40e/5e502dd7e2da8075eed7b8de_Hand%201%402x-p-500.png 500w, https://assets.website-files.com/5e4d529bb3825e74aeecd40e/5e502dd7e2da8075eed7b8de_Hand%201%402x.png 791w"
                    sizes="(max-width: 479px) 100vw, (max-width: 991px) 320px, 395.5px"
                    data-w-id="59a684a5-902a-2db3-ffd2-472a426da6d9"
                    alt=""
                    className="absolute z-30"
                  />
                  <img
                    src="https://assets.website-files.com/5e4d529bb3825e74aeecd40e/5e502dd77b939281410b4ca2_Hand%203%402x.png"
                    width="395.5"
                    srcSet="https://assets.website-files.com/5e4d529bb3825e74aeecd40e/5e502dd77b939281410b4ca2_Hand%203%402x-p-500.png 500w, https://assets.website-files.com/5e4d529bb3825e74aeecd40e/5e502dd77b939281410b4ca2_Hand%203%402x.png 791w"
                    sizes="(max-width: 479px) 100vw, (max-width: 991px) 320px, 395.5px"
                    data-w-id="6c84af14-f5dd-0f96-7720-47010729103b"
                    alt=""
                    className="absolute z-20"
                  />
                  <img
                    src="https://assets.website-files.com/5e4d529bb3825e74aeecd40e/5e502dd90cd1400c1d47c102_Hand%202%402x.png"
                    width="395.5"
                    srcSet="https://assets.website-files.com/5e4d529bb3825e74aeecd40e/5e502dd90cd1400c1d47c102_Hand%202%402x-p-500.png 500w, https://assets.website-files.com/5e4d529bb3825e74aeecd40e/5e502dd90cd1400c1d47c102_Hand%202%402x.png 791w"
                    sizes="(max-width: 479px) 100vw, (max-width: 991px) 320px, 395.5px"
                    data-w-id="fd4a6d6b-712d-2cf1-dfa3-e397dbaf2318"
                    alt=""
                    className="absolute z-20"
                  />
                  <img
                    src="https://assets.website-files.com/5e4d529bb3825e74aeecd40e/5e502dd90cd140264c47c103_Hand%204%402x.png"
                    width="395.5"
                    srcSet="https://assets.website-files.com/5e4d529bb3825e74aeecd40e/5e502dd90cd140264c47c103_Hand%204%402x-p-500.png 500w, https://assets.website-files.com/5e4d529bb3825e74aeecd40e/5e502dd90cd140264c47c103_Hand%204%402x.png 791w"
                    sizes="(max-width: 479px) 100vw, (max-width: 991px) 320px, 395.5px"
                    data-w-id="64e4ceaf-d3e2-1561-b15a-4491e083c6f7"
                    alt=""
                    className="absolute z-10"
                  />
                  <img
                    src="https://assets.website-files.com/5e4d529bb3825e74aeecd40e/5e502dd77b9392495b0b4ca3_Hand%205%402x.png"
                    width="395.5"
                    srcSet="https://assets.website-files.com/5e4d529bb3825e74aeecd40e/5e502dd77b9392495b0b4ca3_Hand%205%402x-p-500.png 500w, https://assets.website-files.com/5e4d529bb3825e74aeecd40e/5e502dd77b9392495b0b4ca3_Hand%205%402x.png 791w"
                    sizes="(max-width: 479px) 100vw, (max-width: 991px) 320px, 395.5px"
                    data-w-id="961e8057-d3a3-0d4d-8177-82e9676dfc53"
                    alt=""
                    className="absolute z-10"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </BackgroundLight>
    </header>
  )
}
