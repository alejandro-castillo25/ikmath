import type { Int } from "ikmath-shared";

export const normalInts: Array<Int> = [
  {
    id: 1,
    int: String.raw`\int_a^b f(x)\,dx = \int_a^b f(a+b-x)\,dx`,
    header: "\\text{Demostrar:}",
    footer: "\\text{King's Rule}",
  },
  {
    id: 2,
    int: String.raw`\int_0^{\pi/2} x\sin x\,dx`,
    header: "\\text{Resolver por King's Rule:}",
  },
  {
    id: 3,
    int: String.raw`\int_0^{\pi/2} \frac{\cos x}{\sin x+\cos x}\,dx`,
  },
  {
    id: 4,
    int: String.raw`\int_0^\pi \frac{x\sin x}{1+\cos^2x}\,dx`,
  },
  {
    id: 5,
    int: String.raw`\int_0^2 \frac {x^2} {x^2 + (2-x)^2}\,dx`,
  },
  {
    id: 6,
    int: String.raw`\int_0^{\pi/2} \frac {dx} {1+ \tan^3 x}`,
  },
  {
    id: 7,
    int: String.raw`\int_0^{\pi/2} \frac {e^{\cos x}} {e^{\sin x} + e^{\cos x}}\,dx`,
  },
  {
    id: 8,
    int: String.raw`\int_0^{\pi/2}x\sin x \cos x\,dx`,
  },
  {
    id: 9,
    int: String.raw`\int_0^{\pi/2} \ln (\tan x)\,dx`,
  },
  {
    id: 10,
    int: String.raw`\int_0^{\pi/2} \frac {h(\cos x)} {h(\sin x) + h(\cos x)}\,dx`,
    header: String.raw`\text{Sea:} \qquad h:\,\mathbb{R} \to \mathbb{R}\,;\quad h(\sin x) + h(\cos x) \ne 0\,,\,\forall x \in \left[0,\frac \pi 2\right]`,
  },
  {
    id: 11,
    int: String.raw`\int_0^{\pi/2} \frac{\sqrt[3]{\sin x}}{\sqrt[3]{\sin x}+\sqrt[3]{\cos x}}\,dx`,
  },
  {
    id: 12,
    int: String.raw`\int_{-\infty}^{\infty} \frac{x^7\,\cosh(x)\,\ln(1+x^4)}{e^{x^2}\left(1+x^2+\cos^2(x^3)\right)}\,dx`,
  },
  {
    id: 13,
    int: String.raw`\int_0^{\pi/2} \frac{\ln(2+\sin^4x)\,e^{\tan(\sin x)}}{\ln(2+\sin^4x)\,e^{\tan(\sin x)}+\ln(2+\cos^4x)\,e^{\tan(\cos x)}}\,dx`,
  },
  {
    id: 14,
    int: String.raw`\int_1^2 \frac {\ln x} {\ln x + \ln(3-x)}\,dx`,
  },
  {
    id: 15,
    int: String.raw`\int_0^5 \frac {e^x} {e^x + e^{5-x}}\,dx`,
  },
  {
    id: 16,
    int: String.raw`\int_0^4 \frac {\sqrt x} {\sqrt x + \sqrt{4-x}}\,dx`,
  },
  {
    id: 17,
    header: String.raw`\text{Sea:} \qquad h:\,\mathbb{R} \to \mathbb{R}\,;\quad h(x) + h(a+b -x) \ne 0\,,\,\forall x \in [a,b]`,
    int: String.raw`\int_a^b \frac {h(x)} {h(x) + h(a+b-x)}\,dx`,
  },
  {
    id: 18,
    header: String.raw`\text{Evaluar:}`,
    int: String.raw`\int\text{erf}(x)\,dx`,
    footer: String.raw`\text{Sabiendo que:}\quad \text{erf}(x)= \frac 2 {\sqrt \pi } \int_0^x e^{-t^2}\,dt`,
  },
  {
    id: 19,
    int: String.raw`\int_{1/e}^e \frac {\sqrt{1-\ln ^2x}} x \, dx`,
  },
  {
    id: 20,
    int: String.raw`\int_0^{1/3} \frac {x^{-1/2}} {x+1}\,dx`,
  },
  {
    id: 21,
    int: String.raw`\int_2^6 \frac x {\sqrt{x+\frac 1  4}\left(\sqrt{x+\frac 1  4} - \frac 1 2\right)}\,dx`,
  },
  {
    id: 22,
    int: String.raw`\int_0^1 \sqrt{-\ln x}\,dx`,
  },
  {
    id: 23,
    int: String.raw`\int \psi(x)\,dx`,
  },
  {
    id: 24,
    int: String.raw`\int\frac {\psi(x)} {1+\Gamma(x)}\,dx`,
  },
  {
    id: 25,
    int: String.raw`\int_0^1 \frac {x^3} {(1+x^2)^2} \,dx`,
  },
  {
    id: 26,
    int: String.raw`\int_0^1 \sqrt \frac {1-x} {1+x} \,dx`,
  },
  {
    id: 27,
    int: String.raw`\int \sin x \cos x \tan x \csc x \sec x \cot x\,dx`,
  },
  {
    id: 28,
    int: String.raw`\int_0^1 \frac {1 - \frac 1 {x^2}} {x^2 - \frac 1 {x^2}}\,dx`,
  },
  {
    id: 29,
    int: String.raw`\int \frac {dx} {\sqrt{9-4x^2}}\quad`,
  },
  {
    id: 30,
    int: String.raw`\int \frac {e^x}{e^x - e^{-x}}\,dx\quad`,
  },
  {
    id: 31,
    int: String.raw`\int_{-\pi/2}^{\pi/2} \frac {x^2+\sin x + \cos x - 1} {\tan x}\,dx`,
  },
  {
    id: 32,
    int: String.raw`\int x^2\cos x\,dx`,
  },
  {
    id: 33,
    int: String.raw`\int \cos x \,e^{\sin x}\,dx`,
  },
  {
    id: 34,
    int: String.raw`\int_{\pi/8}^{\pi/4} \left(e^{\tan x}\sec^2 x + \frac 1 x\right)\cos\left( e^{\tan x} + \ln x \right)\,dx`,
  },
  {
    id: 35,
    int: String.raw`\int_1^\infty \frac {(x-1)\ln x} {\sqrt x (1+x)^2}\,dx`,
  },
  {
    id: 36,
    int: String.raw`\int_0^\infty \left( \frac {\cos x} {e^x} \right)^2\,dx`,
  },
  {
    id: 37,
    int: String.raw`\int_0^{\pi/2} \sin^{10} x \cos x \,dx`,
  },
  {
    id: 38,
    int: String.raw`\int_0^{\pi/2} \frac{\sin^4 x + \cos^2 x}{\cos^4 x + \sin^2x}\,dx`,
  },
  {
    id: 39,
    int: String.raw`\int H_x\,dx`,
  },
  {
    id: 40,
    int: String.raw`\int_{e-2}^{e^2 - 2} \frac {\ln(x^2+4x+4)} {x+2}\,dx`,
  },
  {
    id: 41,
    int: String.raw`\int_0^{\pi/8} \frac {\frac{\tan x}{\cos^2 x - \sin^2 x}} {\frac 1 2 \sec^2 x - \tan^2 x}\,dx`,
  },
  {
    id: 42,
    int: String.raw`\int_C \bar z \,dz`,
    footer: "C: |z|=1,\\,\\text{Círculo completo, Sentido antihorario}",
  },
  {
    id: 43,
    int: String.raw`\int_C \Re(z)\,dz`,
    footer: "C:|z| = 2,\\,\\text{Círculo completo, Sentido antihorario}",
  },
  {
    id: 44,
    int: String.raw`\int_C \Im(z)\,dz`,
    footer: "C: \\text{El segmento de recta de } z=0\,\\text a\\, z = 2",
  },
  {
    id: 45,
    int: String.raw`\int_C \Re(z)\,dz`,
    footer:
      "C: \\text{El segmento de recta de } z = 0\\,\\text a\\, z = 1 + i",
  },
  {
    id: 46,
    int: String.raw`\int_C \Im(z)\,dz`,
    footer:
      "C: \\text{El segmento de recta de } z = 0 \\, \\text a \\, z = 2 + i",
  },
];
