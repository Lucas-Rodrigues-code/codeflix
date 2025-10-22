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

### 🔹 Service Discovery

- Não há necessidade de trabalhar com um sistema de Service Discovery como "Consul".
- O projeto utiliza o **Kubernetes** para orquestrar os containers, sendo o Service Discovery parte nativa do processo.

### 🔹 Consistência Eventual

- Grande parte da comunicação entre os microserviços será **assíncrona**.
- Cada microserviço possui sua própria base de dados.
- Eventualmente os dados poderão ficar inconsistentes, desde que não haja prejuízo direto ao negócio.

### 🔹 Duplicação de Dados

- Eventualmente um microserviço poderá persistir dados já existentes em outro microserviço em seu banco de dados.
- Essa duplicação ocorre para deixar o microserviço mais autônomo.
- O microserviço duplicará apenas os dados necessários para seu contexto.
- No caso da Codeflix, utilizaremos o **Kafka Connect** como replicador de dados.

---


