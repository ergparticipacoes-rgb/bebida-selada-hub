#!/bin/bash
echo "🧹 Limpando cache e executando deploy..."
vercel build --prod
vercel deploy --prebuilt --force
echo "✅ Deploy concluído com cache limpo e atualizado."

