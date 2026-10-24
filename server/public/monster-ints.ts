import type { Int } from "ikmath-shared";

export const monsterIntsToml: { items: Array<Int> } = {
  items: [
    { id: 1, int: String.raw`\int_0^\infty \frac {\sin^3x\cos^2x} x \,dx` },
    { id: 2, int: String.raw`\int_0^1 \frac {x^6-x^3}{(1+x)\ln x}\,dx` },
    {
      id: 3,
      int: String.raw`\int_0^\infty \frac {x^{s-1}}{e^x-1}\,dx=\Gamma(s)\zeta(s)`,
      header: String.raw`\text{Probar que:}`,
    },
    { id: 4, int: String.raw`\int_0^1 \frac {\ln(1+x^3)}{x} \,dx` },
    { id: 5, int: String.raw`\int_0^\infty \frac {x^2} {e^{4x}-1}\,dx` },
    {
      id: 6,
      int: String.raw`\int_0^\infty\frac{x^{m-1}}{1+x^n}\,dx=\frac \pi n \csc \left( \frac {m\pi} n\right),\qquad 0 < m < n`,
      header: String.raw`\text{Probar que:}`,
    },
    {
      id: 7,
      int: String.raw`\int_0^{\ln^2(2e)} \frac {\log_{2e}x} {\log_2 x + \log_e x} \,dx`,
    },
    {
      id: 8,
      int: String.raw`\int_0^\infty \frac {x^s} {\cosh x - 1}\,dx`,
      header: String.raw`\text{Hallar la Generalización:}`,
    },
    {
      id: 9,
      int: String.raw`\mathcal{L}\{\ln t\}(s) = I(s)`,
      header: String.raw`\text{Hallar:}`,
    },
    {
      id: 10,
      int: String.raw`\int_0^\infty \frac {(e^{-2x} - e^{-5x})\cos (3x)} x \,dx`,
    },
    {
      id: 11,
      int: String.raw`\int_0^\infty x^3\left( \frac 1 {e^x-1} - \frac 1 {e^x+1}\right)\,dx`,
    },
    {
      id: 12,
      int: String.raw`\int_0^\infty \frac {x^{s-1}}{e^x+1}\,dx=\Gamma(s)\eta(s)`,
      header: String.raw`\text{Demostrar:}`,
    },
    { id: 13, int: String.raw`\int_0^\infty \frac {x \ln x} {e^x - 1} \,dx` },
    { id: 14, int: String.raw`\int_0^1 \frac x {x+(x-x^2)^x} \,dx` },
    {
      id: 15,
      int: String.raw`\int_3^7 \frac {\ln (x+2)} {\ln (x+2) +\ln(12-x)} \,dx`,
    },
    { id: 16, int: String.raw`\int_0^{\pi/2} \ln^2(\cos x) \,dx` },
    { id: 17, int: String.raw`\int_0^{\pi/2} \tan^sx \,dx` },
    {
      id: 18,
      int: String.raw`\int_0^{\pi / 2} \frac {\ln(\sin x)}{\sqrt{\sin x \cos x}} \,dx`,
    },
    {
      id: 19,
      int: String.raw`\int_{-1}^{1} \frac{1+x+x^2+\cdots+x^{2026}}{1+x^2+x^4+\cdots+x^{2026}-x^{2027}+x^{2028}-x^{2029}+\cdots}\, dx`,
    },
    {
      id: 20,
      int: String.raw`\int_{-\infty}^{\infty} \frac {\sin x} x \, dx`,
      header: String.raw`\text{Resolver la Integral de Dirichlet}`,
    },
    {
      id: 21,
      int: String.raw`\int_0^1 \frac {1-x^n} {1-x}\,dx`,
      header: String.raw`\text{Hallar la Generalización:}`,
    },
    { id: 22, int: String.raw`\int_0^\infty \frac {\cos x} {\cosh x}\,dx` },
    {
      id: 23,
      int: String.raw`\int_0^1 \frac {x^b - x^a} {\ln x}\,dx = \ln\left(\frac {b + 1} {a + 1}\right)\,,\quad a,b > -1`,
      header: String.raw`\text{Probar que:}`,
    },
    { id: 24, int: String.raw`\int_0^1\frac {1-x^6} {1-x}\,dx` },
    { id: 25, int: String.raw`\int_0^\infty x^4 \ln x\,e^{-x}\,dx` },
    {
      id: 26,
      int: String.raw`\int_0^\infty \frac {x^6 \ln x} {(1+x^2)^5}\,dx`,
    },
    {
      id: 27,
      int: String.raw`I_n = -\int_0^1 x^n \ln (1-x)\,dx\,,\quad n \in \mathbb N_0`,
      title: String.raw`\text{Hallar la Generalización:}`,
      footer: String.raw`\text{Expresada en Números Armónicos}`,
    },
    {
      id: 28,
      int: String.raw`\int_0^\infty \frac {\sin x} x \sin^6 x\,\cos^2 x \,dx`,
    },
    {
      id: 29,
      int: String.raw`\int_0^1 x^2(1-x)^3\ln\left(\frac 1 x\right)\,dx`,
    },
    {
      id: 30,
      int: String.raw`\mathcal{L}\{t^{n-1}\ln t\}(s)`,
      header: String.raw`\text{Hallar:}`,
    },
    { id: 31, int: String.raw`\int_0^\infty \sqrt x \ln x\,e^{-x}\,dx` },
    {
      id: 32,
      int: String.raw`\int_{-\infty}^{\infty} \frac {\cos x} {x^2 + 1}\,dx`,
    },
    {
      id: 33,
      int: String.raw`\int_{-\infty}^{\infty}e^{-\alpha x^2}\,dx= \sqrt{\frac \pi \alpha}`,
      header: String.raw`\text{Probar que:}`,
    },
    {
      id: 34,
      int: String.raw`\int_{-\pi}^\pi \sin^{2025} x\,\cos^{2026} x\,dx`,
    },
    { id: 35, int: String.raw`\int_0^{\pi/2} \sin^8 x\,dx` },
    {
      id: 36,
      int: String.raw`\int_0^\infty \frac {\cos(\alpha x)-\cos(\beta x)} x\ln x\,dx`,
    },
    { id: 37, int: String.raw`\int_0^{\pi/2}\cos^9 x \,dx` },
    {
      id: 38,
      int: String.raw`\int_0^\infty \frac {e^{-x^2}\sin^2(x^2)} {x^2}\,dx`,
    },
    {
      id: 39,
      int: String.raw`\int_0^1 e^{-x}\ln x \,dx = -\gamma`,
      header: String.raw`\text{Probar que:}`,
    },
    {
      id: 40,
      int: String.raw`\int_0^{\pi/2} x \sin x \cos x \ln(\sin x) \ln(\cos x)\,dx`,
    },
    {
      id: 41,
      int: String.raw`\int_0^\infty \Gamma^2(1-ix^2)\,\Gamma^2(1+ix^2)\,dx`,
    },
    {
      id: 42,
      int: String.raw`\int_0^\infty \sin(x^2)\,dx\,,\quad\int_0^\infty \cos(x^2)\,dx`,
      header: String.raw`\text{Resolver las Integrales de Fresnel:}`,
    },
    { id: 43, int: String.raw`\int_0^\infty e^{-x} \ln^2 x \,dx` },
    { id: 44, int: String.raw`\int_0^\infty \sin\left(x^2\right) \ln x \,dx` },
    {
      id: 45,
      int: String.raw`\int_0^\infty \frac {x^{\pi/5-1}} {1+x^{2\pi}}\,dx = \varphi`,
      header: String.raw`\text{Probar que:}`,
    },
    {
      id: 46,
      int: String.raw`\int_0^1 \frac {-\ln x\,} {1-x} (1-x^n)\,dx = H^{(2)}_n`,
      header: String.raw`\text{Probar que:}`,
    },
    { id: 47, int: String.raw`\int_0^\infty \frac {dx} {1+e^{x^2}}` },
    {
      id: 48,
      int: String.raw`\int_0^1 x^4 \left(\frac {-\ln x} {1-x}\right)\,dx`,
    },
    {
      id: 49,
      int: String.raw`\int_0^\infty \frac {e^{-x} - e^{-nx}} x\,dx = \ln n`,
      header: String.raw`\text{Probar que:}`,
    },
    { id: 50, int: String.raw`\int_0^\infty \frac {\sin^{12} x} {x^2}\,dx` },
    { id: 51, int: String.raw`\int_0^1\frac {(1-x^5)\ln x} {1-x}\,dx` },
    {
      id: 52,
      int: String.raw`\mathcal{M}\{\sin x\}(s) = \int_0^\infty x^{s-1}\sin x \,dx\,,\quad 0 < \Re(s) < 1`,
      header: String.raw`\text{Hallar la Transformada de Mellin:}`,
    },
    { id: 53, int: String.raw`\int_{0}^{\infty} \frac {\ln x} {e^x + 1}\,dx` },
    {
      id: 54,
      int: String.raw`\int_{-\infty}^{\infty} x^2 e^{-e^x} e^{2x}\,dx`,
    },
    {
      id: 55,
      int: String.raw`\int_0^1 x^n \ln^2 (1-x)\,dx = \frac {H^2_{n+1} + H^{(2)}_{n+1}} {n+1}`,
      header: String.raw`\text{Probar que:}`,
    },
    {
      id: 56,
      int: String.raw`\int_0^1 \frac {dx}{\Gamma^2(x) + \pi\csc(\pi x)}`,
    },
    { id: 57, int: String.raw`\int_0^1 \frac {\ln^2 x\,\ln(1-x)} x\,dx` },
    {
      id: 58,
      int: String.raw`\int_0^1 x^x\,dx = \sum_{n=0}^\infty \frac {(-1)^{n }} {(n+1)^{n+1}}`,
      header: String.raw`\text{Probar la Integral de Bernoulli:}`,
    },
    { id: 59, int: String.raw`\int_0^1 \frac {\ln x} {1 - x} \,dx` },
    { id: 60, int: String.raw`\int_0^1 \frac {\ln^4 x} {1 + x^2} \,dx` },
    {
      id: 61,
      int: String.raw`\int_0^1 \frac {x^\alpha - x^\beta} {(1+x+x^2)\ln\left(\frac 1 x\right)}\,dx\,,\quad\alpha , \beta > -1`,
      header: String.raw`\text{Hallar la Generalización:}`,
    },
    {
      id: 62,
      int: String.raw`\int_0^1 \frac {\ln \left(\frac 1 x\right)} {1 + x^2}\,dx `,
    },
    {
      id: 63,
      int: String.raw`\int_0^\infty \frac {x^2\ln x} {1+ e^{\pi x}}\,dx`,
    },
    {
      id: 64,
      int: String.raw`\int_0^1 x^n \ln^m x \,dx = \frac {(-1)^m\,\Gamma(m+1)} {(n+1)^{m+1}}`,
      header: String.raw`\text{Probar que:}`,
    },
    { id: 65, int: String.raw`\int_0^1 \frac {\arctan x} x\,dx` },
    {
      id: 66,
      int: String.raw`\int_0^\infty \frac {x\ln(e^x - 1)} {e^x - 1}\,dx`,
    },
    {
      id: 67,
      int: String.raw`\int_0^1 [x(1-x)]^{n-1}\ln x\,\ln(1-x)\,dx = \frac {[(n-1)!]^2} {(2n-1)!}[(H_{n-1}-H_{2n-1})^2-\zeta(2)+H^{(2)}_{2n-1}]`,
    },
    { id: 68, int: String.raw`\int_0^\infty x^4 e^{-2x^2}\,dx` },
    {
      id: 69,
      int: String.raw`\underbrace{\int\int\cdots\int}_{20}x^{25}\,\underbrace{dxdx\cdots dx}_{20}`,
    },
    {
      id: 70,
      int: String.raw`\int_0^\infty \frac {x^{s-1}} {2\cosh x}\,dx=\Gamma(s)\beta(s)\,,\quad\Re(s) > 0`,
      header: String.raw`\text{Demostrar que:}`,
    },
    {
      id: 71,
      int: String.raw`\int_0^7 \left( \sqrt[3]{\sqrt{1+x^2} + x}-\sqrt[3]{\sqrt{x^2+1}-x} \right)^3\,dx`,
    },
    { id: 72, int: String.raw`\int_0^1 x(-1)^x\,dx` },
    {
      id: 73,
      int: String.raw`\int_0^\infty \frac {1-e^x} {1-e^{\alpha x}}\,dx\,,\quad \alpha > 1`,
      header: String.raw`\text{Hallar la Generalización:}`,
    },
    { id: 74, int: String.raw`\int_0^1 x^5 \ln^3(1-x)\,dx` },
    {
      id: 75,
      int: String.raw`\int_0^\infty \left[ \frac {x^{\varphi -1 }} {e^x - 1} + \frac{x^{\varphi - 1}}{e^x + 1} + \frac {x^{\varphi - 1}} {2\cosh x}\right]\,dx`,
    },
    {
      id: 76,
      int: String.raw`\int_0^\infty e^{-\sigma x^n} \cos(\alpha x^n)\,dx\,,\quad \sigma,\alpha > 1`,
      header: String.raw`\text{Hallar la Generalización:}`,
    },
    { id: 77, int: String.raw`\int_0^\infty {x^9 \ln x \over e^x - 1}\,dx` },
    {
      id: 78,
      int: String.raw`\int_0^{\pi/2} \ln(\sin x )\ln(\cos x) \tan x\,dx`,
    },
    { id: 79, int: String.raw`\int_0^\infty \sin(x^n)\,dx` },
    {
      id: 80,
      int: String.raw`\int_0^\infty \sin(x^2)\,dx`,
      header: String.raw`\text{Resolver la Integral de Fresnel:}`,
      footer: String.raw`\text{Usando la transformada de Mellin}`,
    },
    {
      id: 81,
      int: String.raw`\int_0^\infty \text{sinc}\,x\,dx`,
      header: String.raw`\text{Resolver usando la Transformada de Mellin:}`,
    },
    {
      id: 82,
      int: String.raw`S\left\{\frac 1 {t^2 + 1}\right\}(p)=\mathcal{L}_s \left\{ \mathcal{L}_t \left\{ \frac 1 {t^2 + 1} \right\}(s) \right\}(p) `,
      header: String.raw`\text{Hallar la Transformada de Stieltjes:}`,
    },
    { id: 83, int: String.raw`\int_0^1 \frac {x^3 \ln^2x} {1-x}\,dx` },
    {
      id: 84,
      int: String.raw`\int_0^1  \ln \left( \frac 1 {\Gamma(1+x)+\Gamma(x) + \Gamma(x-1)}\right)\,dx`,
    },
    {
      id: 85,
      int: String.raw`\int_0^1 \frac{(1+x^{s-1})\sin(a\ln x)+1-\cos(a\ln x)}{\ln x}\,dx\,,\quad s>0,\,a\in\R`,
      header: String.raw`\text{Hallar la Generalización:}`,
    },
    { id: 86, int: String.raw`\int_0^{2\pi} \sin(123x)\sin(456x)\,dx` },
    {
      id: 87,
      int: String.raw`\int \begin{vmatrix}x&1&0&0&0\\1&x&1&0&0\\0&1&x&1&0\\0&0&1&x&1\\0&0&0&1&x\end{vmatrix}\,dx`,
    },
    {
      id: 88,
      int: String.raw`\int_0^1 \frac {x^{s-1}} {x+1}\,dx=H_{s-1} - H_{s/2 - 1}-\ln 2`,
      header: String.raw`\text{Demostrar que:}`,
    },
    { id: 89, int: String.raw`\int_0^{2\pi} \tan(\cos x)\,dx` },
    {
      id: 90,
      int: String.raw`\sum_{k=0}^{\infty}\int_0^{\pi}\left[\frac{x^k}{k!} + \frac{(-1)^kx^{2k+1}}{(2k+1)!} + \frac{(-1)^kx^{2k}}{(2k)!}\right]dx`,
    },
    {
      id: 91,
      int: String.raw`\int_0^\infty \left(x\ln x\right)^3 e^{-sx}\,dx\,,\quad s>0`,
      header: String.raw`\text{Hallar la Generalización:}`,
    },
    {
      id: 92,
      int: String.raw`\int_0^\infty \frac {x^3 e^{-x} \ln x} {1 + e^{-x}}\,dx`,
    },
    { id: 93, int: String.raw`\int_0^\infty x^2 \sin x\,e^{-2x}\,dx` },
    {
      id: 94,
      int: String.raw`\int_0^\infty\frac{x^{s-1}}{e^x+1}\,dx = \big(1-2^{1-s}\big)\int_0^\infty\frac{x^{s-1}}{e^x-1}\,dx\,,\quad \Re(s)>0`,
      header: String.raw`\text{Demostrar:}`,
    },
    { id: 95, int: String.raw`\int_0^\infty x^3\,\text{csch}\,x\,dx` },
    { id: 96, int: String.raw`\int_0^\infty \frac {x^3}{2\sinh(2x)}\,dx` },
    {
      id: 97,
      int: String.raw`\int_0^\infty \frac {x^{s - 1}}{2\sinh x}\,dx=\Gamma(s)\,\lambda(s)\,,\quad \Re(s)>1`,
      header: String.raw`\text{Demostrar que:}`,
    },
    {
      id: 98,
      int: String.raw`\int_0^\infty \frac {x\,\text{sech}\, x} 2 \,dx`,
    },
    { id: 99, int: String.raw`\int_0^\infty \frac{x^2 \ln x}{2\cosh x}\,dx` },
    {
      id: 100,
      int: String.raw`\int_0^1 \frac {-x^n\ln^{m-1}x} {1-x}\,dx = (-1)^m(m-1)![\zeta(m) - H_n^{(m)}]`,
      header: String.raw`\text{Probar que:}`,
    },
    {
      id: 101,
      int: String.raw`\int_0^\infty \frac {x^9 e^{-2x}} {1-e^{-2x}}\,dx`,
    },
    { id: 102, int: String.raw`\int_0^{\pi/2} x \cot x \,dx` },
    {
      id: 103,
      int: String.raw`\int_0^a x\,\text{csch}\,x\,dx,\qquad0<a<\pi`,
      header: String.raw`\text{Hallar:}`,
    },
    { id: 104, int: String.raw`\int_0^{\pi/3} x^3\,\text{csch}\,x\,dx` },
    {
      id: 105,
      int: String.raw`\int_0^\infty \frac {x^{13}} {e^x - 1}\,dx`,
      header: String.raw`\text{Expresar en función de } B_{14}:`,
    },
    {
      id: 106,
      int: String.raw`\int_0^a \frac {x\,\text{csch}\,x - 1} {x^2}\,dx = \sum_{n=1}^\infty \frac {(2-4^n)B_{2n} a ^{2n - 1}} {(2n)!(2n-1)},\qquad 0<a<\pi`,
      header: String.raw`\text{Demostrar:} `,
    },
    { id: 107, int: String.raw`\int_0^\infty \frac {x^{17}} {e^x - 1} \,dx` },
    { id: 108, int: String.raw`\int_0^1 \tan x \ln x\,dx` },
    {
      id: 109,
      int: String.raw`\int_0^\infty \frac {x^{2s - 1}} {e^x - 1}\,dx = \frac {(-1)^{s+1}(2\pi)^{2s} B_{2s}} {4s},\quad s \in \mathbb Z^+`,
      header: String.raw`\text{Demostrar:}`,
    },
    {
      id: 110,
      int: String.raw`\int_{-\infty}^\infty \frac {\ln(1+4^x)} {2^x + 8^x} \,dx`,
    },
    {
      id: 111,
      int: String.raw`\int_{\sqrt 2 - 1}^{\sqrt 2 + 1} \frac {\arctan (x^5)} {x}\,dx`,
    },
    {
      id: 112,
      int: String.raw`\int_0^\infty \frac {x^{2n}} {\sinh^2 x}\,dx = (-1)^{n+1}\pi^{2n} B_{2n},\qquad n \in \mathbb Z^+`,
      header: String.raw`\text{Demostrar que:}`,
    },
    { id: 113, int: String.raw`\int_0^1 \frac {x^x - 1} {\ln x}\,dx` },
    { id: 114, int: String.raw`\int_1^e x^{2x}e^{-2x}\ln x\,dx` },
    {
      id: 115,
      int: String.raw`\int_0^a W(x)\,dx,\qquad a > 0`,
      header: String.raw`\text{Hallar:}`,
    },
    { id: 116, int: String.raw`\int_0^\infty \frac {W(x)} {x}e^{-W^2(x)}\,dx` },
    {
      id: 117,
      int: String.raw`\int_0^1 \arctan \left( \frac {\sqrt{1+x} + \sqrt{1-x}} {\sqrt{1+x} - \sqrt{1-x}}\right)\,dx`,
    },
    {
      id: 118,
      int: String.raw`\Gamma(z) = \int_0^\infty x^{z-1}e^{-x}\,dx,\qquad \Re(z) > 0`,
      header: String.raw`\text{Demostrar la función Gamma:}`,
    },
    {
      id: 119,
      int: String.raw`\int_{-\infty}^\infty \text{sech}\,(\arcsin(\tanh x))\frac {\,\text{sech}^2\,x} {\sqrt{1-\tanh^2 x}}\,dx`,
    },
    { id: 120, int: String.raw`\int_0^{\pi/4}x\sec x\,dx` },
    {
      id: 121,
      int: String.raw`\int_0^a x^m\,\text{sech}\,x\,dx,\qquad m \in \mathbb Z^+ \land 0<a<\frac \pi 2`,
      header: String.raw`\text{Hallar:}`,
    },
    { id: 122, int: String.raw`\int_0^\infty \frac {x^{20}} {2\cosh x}\,dx` },
    { id: 123, int: String.raw`\int_0^{\pi/2} \ln(\sin x)\,dx` },
    {
      id: 124,
      int: String.raw`\int_0^\infty \frac{x^{2n}}{2\cosh x}\,dx=\frac{|E_{2n}|\,\pi^{2n+1}}{4^{n+1}},\qquad \forall\,n\in \mathbb Z_{\ge 0}`,
      header: String.raw`\text{Probar que:}`,
    },
    { id: 125, int: String.raw`\int_0^1 x\ln^3 x\,\ln(-\ln x)\,dx` },
    {
      id: 126,
      int: String.raw`\int \ln x\left[ \left( \frac {x} {e}\right)^x + \left(\frac {e} {x}\right)^x \right]\,dx`,
    },
    {
      id: 127,
      int: String.raw`\int_0^\infty x^\alpha e^{-\beta x}\cos(\gamma x)\,dx\qquad \gamma \in \mathbb R,\, \alpha,\beta \in \mathbb R^+`,
      header: String.raw`\text{Hallar la Generalización:}`,
    },
    { id: 128, int: String.raw`\int_0^4 x\,\lfloor x\rfloor \,dx` },
    {
      id: 129,
      int: String.raw`\int_0^2 \lfloor x \rfloor \, \lfloor x^2 \rfloor\,dx`,
    },
    {
      id: 130,
      int: String.raw`\int_0^n x^2\,\lfloor x \rfloor\,dx,\qquad n \in \mathbb Z^+`,
      header: String.raw`\text{Evaluar:}`,
    },
    { id: 131, int: String.raw`\int_0^4 x\,\lceil x  \rceil\,dx` },
    { id: 132, int: String.raw`\int_0^3 \lceil x^2 \rceil\,dx` },
    {
      id: 133,
      int: String.raw`\int_0^n x^2 \,\lceil x \rceil,\qquad n \in \mathbb Z^+`,
      header: String.raw`\text{Evaluar:}`,
    },
  ],
};
