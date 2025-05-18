# Instruções para configuração de ícones do Lança 360°

Para que o site tenha uma aparência profissional quando compartilhado nas redes sociais e quando adicionado à tela inicial dos dispositivos, você precisa gerar os seguintes ícones:

## Lista de ícones necessários

1. **favicon.ico** (multi-tamanho, geralmente 16x16, 32x32, 48x48)
2. **Ícones PNG:**
   - icon-16x16.png
   - icon-32x32.png
   - icon-72x72.png
   - icon-96x96.png
   - icon-128x128.png
   - icon-144x144.png
   - icon-152x152.png
   - icon-192x192.png
   - icon-384x384.png
   - icon-512x512.png
3. **Apple Touch Icon:**
   - apple-touch-icon.png (180x180)
4. **Ícone Adaptativo (Maskable):**
   - maskable-icon.png (512x512 com área segura de visualização)

## Como gerar os ícones

### Método 1: RealFaviconGenerator (recomendado)

1. Acesse [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Faça upload do seu arquivo logo.svg
3. Configure as opções para cada plataforma
4. Baixe o pacote de ícones gerado
5. Extraia os arquivos para a pasta `/public/icons/`

### Método 2: PWA Asset Generator

```bash
# Instalar a ferramenta
npm install -g pwa-asset-generator

# Gerar ícones
pwa-asset-generator ./public/images/logo.svg ./public/icons --manifest ./public/manifest.json --index ./index.html --favicon
```

### Método 3: Favicon.io

1. Acesse [Favicon.io](https://favicon.io/favicon-converter/)
2. Faça upload do seu arquivo logo.svg
3. Baixe o pacote de ícones
4. Extraia os arquivos para a pasta `/public/icons/`

## Verificação

Depois de gerar e colocar os ícones na pasta correta, você pode verificar se tudo está funcionando corretamente usando:

1. [Meta Tags](https://metatags.io/) - Para verificar as tags Open Graph
2. [Web Manifest Validator](https://manifest-validator.appspot.com/) - Para verificar o manifest.json
3. [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Para verificar o desempenho geral e PWA

## Implementação no AWS Amplify

Quando fizer deploy no AWS Amplify, verifique se os cabeçalhos de cache estão configurados corretamente para os arquivos de manifesto e ícones:

```yaml
# amplify.yml
customHeaders:
  - pattern: '/manifest.json'
    headers:
      - key: 'Cache-Control'
        value: 'max-age=86400'
  - pattern: '/icons/*'
    headers:
      - key: 'Cache-Control'
        value: 'max-age=2592000'
```