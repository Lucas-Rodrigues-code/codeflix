# 🎬 CodeFlix

**CodeFlix** é uma plataforma de streaming inspirada na Netflix, desenvolvida com uma arquitetura moderna baseada em **microserviços**.  
O objetivo é oferecer uma estrutura escalável, modular e flexível para o gerenciamento e exibição de vídeos sob demanda.

---

## 🚀 Visão Geral do Projeto

O sistema CodeFlix possui as seguintes funcionalidades principais:

- **Assinatura de serviço** — o cliente pode assinar o serviço diretamente pela plataforma.  
- **Catálogo de vídeos** — navegação completa entre os vídeos disponíveis.  
- **Playback de vídeos** — reprodução contínua e otimizada dos conteúdos.  
- **Busca full-text** — sistema de pesquisa eficiente para o catálogo.  
- **Processamento e encoding de vídeos** — conversão e otimização dos arquivos enviados.  
- **Administração de conteúdo** — gerenciamento do catálogo de vídeos e dos serviços de assinatura.  
- **Autenticação** — controle de acesso seguro para usuários e administradores.  

---

## 🧩 Arquitetura e Decisões de Projeto

O CodeFlix foi projetado com **arquitetura baseada em microserviços**, seguindo princípios de **alta disponibilidade, escalabilidade e isolamento de responsabilidades**.

### 🔹 Microserviços

- Arquitetura **baseada em microserviços** para garantir modularidade e facilidade de manutenção.  
- Cada microserviço é **independente** e pode ser desenvolvido com tecnologias diferentes conforme o contexto.  
- Exemplo: utilização de **Go** para o serviço de processamento de vídeos devido ao seu desempenho em tarefas de CPU intensiva.  
- Não há uma única "verdade" na escolha das tecnologias — cada componente utiliza a ferramenta mais adequada ao seu propósito.  
- Microserviços podem ser substituídos por outros com tecnologias diferentes, sem impacto no restante do sistema.  
- Cada microserviço possui seu próprio **pipeline de CI/CD**, garantindo deploys e atualizações independentes.

---

## ⚙️ Escalabilidade e Infraestrutura

O sistema foi projetado para **escalar horizontalmente**, aproveitando recursos nativos do **Kubernetes**.

### 🔹 Escala Horizontal

- O processo de escala é configurado a **nível de microserviço**.  
- Todos os microserviços trabalham de forma **stateless**, facilitando replicação e alta disponibilidade.  
- **Uploads** de assets (como vídeos, imagens ou legendas) são armazenados em **Cloud Storage**.  
- O aumento de escala se dá pelo **número de PODs** no Kubernetes.  
- O processo de autoscaling é gerenciado pelo recurso **HPA (Horizontal Pod Autoscaler)**, que ajusta automaticamente a quantidade de instâncias conforme a carga.

---


