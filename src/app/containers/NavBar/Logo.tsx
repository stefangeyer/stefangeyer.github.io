import * as React from 'react'
import styled from 'styled-components/macro'

export function Logo() {
    return (
        <Wrapper>
            <Title data-text="Hello, it's me, Stefan">
                Hello, it's me, Stefan
            </Title>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const Title = styled.div`
    font-size: 2rem;
    color: ${p => p.theme.text};
    font-weight: bold;
    position: relative;
    padding-right: 10px;
    margin: 0 auto;

    ::after {
        content: attr(data-text);
        position: absolute;
        left: 1px;
        text-shadow: -1px 0 red;
        top: 0;
        color: ${p => p.theme.text};
        background: ${p => p.theme.background};
        overflow: hidden;
        animation: noise-anim 2s infinite linear alternate-reverse;
    }

    ::before {
        content: attr(data-text);
        position: absolute;
        left: -1px;
        text-shadow: 1px 0 blue;
        top: 0;
        color: ${p => p.theme.text};
        background: ${p => p.theme.background};
        overflow: hidden;
        animation: noise-anim-2 15s infinite linear alternate-reverse;
    }

    @keyframes noise-anim {
        0% {
            clip-path: inset(97% 0 1% 0);
        }
        5% {
            clip-path: inset(4% 0 45% 0);
        }
        10% {
            clip-path: inset(95% 0 3% 0);
        }
        15% {
            clip-path: inset(66% 0 24% 0);
        }
        20% {
            clip-path: inset(75% 0 23% 0);
        }
        25% {
            clip-path: inset(52% 0 22% 0);
        }
        30% {
            clip-path: inset(40% 0 9% 0);
        }
        35% {
            clip-path: inset(57% 0 2% 0);
        }
        40% {
            clip-path: inset(96% 0 5% 0);
        }
        45% {
            clip-path: inset(13% 0 17% 0);
        }
        50% {
            clip-path: inset(68% 0 10% 0);
        }
        55% {
            clip-path: inset(68% 0 27% 0);
        }
        60% {
            clip-path: inset(58% 0 29% 0);
        }
        65% {
            clip-path: inset(95% 0 4% 0);
        }
        70% {
            clip-path: inset(81% 0 20% 0);
        }
        75% {
            clip-path: inset(48% 0 2% 0);
        }
        80% {
            clip-path: inset(75% 0 21% 0);
        }
        85% {
            clip-path: inset(96% 0 5% 0);
        }
        90% {
            clip-path: inset(96% 0 1% 0);
        }
        95% {
            clip-path: inset(14% 0 48% 0);
        }
        100% {
            clip-path: inset(64% 0 6% 0);
        }
    }

    @keyframes noise-anim-2 {
        0% {
            clip-path: inset(24% 0 50% 0);
        }
        5% {
            clip-path: inset(72% 0 4% 0);
        }
        10% {
            clip-path: inset(36% 0 13% 0);
        }
        15% {
            clip-path: inset(44% 0 13% 0);
        }
        20% {
            clip-path: inset(64% 0 18% 0);
        }
        25% {
            clip-path: inset(20% 0 68% 0);
        }
        30% {
            clip-path: inset(29% 0 70% 0);
        }
        35% {
            clip-path: inset(98% 0 1% 0);
        }
        40% {
            clip-path: inset(48% 0 7% 0);
        }
        45% {
            clip-path: inset(88% 0 5% 0);
        }
        50% {
            clip-path: inset(43% 0 24% 0);
        }
        55% {
            clip-path: inset(89% 0 12% 0);
        }
        60% {
            clip-path: inset(74% 0 22% 0);
        }
        65% {
            clip-path: inset(42% 0 26% 0);
        }
        70% {
            clip-path: inset(67% 0 17% 0);
        }
        75% {
            clip-path: inset(37% 0 52% 0);
        }
        80% {
            clip-path: inset(5% 0 27% 0);
        }
        85% {
            clip-path: inset(90% 0 11% 0);
        }
        90% {
            clip-path: inset(63% 0 17% 0);
        }
        95% {
            clip-path: inset(1% 0 36% 0);
        }
        100% {
            clip-path: inset(56% 0 29% 0);
        }
    }
`
