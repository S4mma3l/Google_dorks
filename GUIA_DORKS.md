# 🌐 Guía Definitiva de Google Dorks para Profesionales

*Una referencia completa para búsquedas avanzadas, pentesting y ciberseguridad. Creada para ser un recurso de consulta rápida y de alto valor.*

---

## ⚠️ Advertencia Ética y Legal

El conocimiento de Google Dorking es una herramienta poderosa. Su uso se destina a profesionales de la seguridad, investigadores y desarrolladores para fines éticos, como el pentesting (con autorización), la búsqueda de información pública o la auditoría de la seguridad de sus propias aplicaciones.

**El uso de estas técnicas para acceder a sistemas o datos privados sin consentimiento es ilegal y puede acarrear graves consecuencias legales.** Utiliza este conocimiento de forma responsable y siempre dentro de la legalidad.

---

## 📚 Operadores Fundamentales

Estos son los pilares de cualquier búsqueda avanzada en Google.

| Operador | Descripción | Ejemplo de Uso |
| :--- | :--- | :--- |
| `""` | **Frase Exacta:** Busca la secuencia de palabras tal cual está escrita. | `"informe de auditoría interna"` |
| `-` | **Exclusión:** Excluye resultados que contengan el término. | `desarrollo web -wordpress` |
| `OR` o `|` | **Condición "O":** Busca resultados que contengan uno u otro término. | `(pentesting OR "hacking ético") filetype:pdf` |
| `*` | **Comodín:** Actúa como un marcador de posición para una o más palabras. | `"cómo * una API en Node.js"` |
| `()` | **Agrupación:** Permite agrupar términos y operadores para búsquedas complejas. | `(site:go.cr OR site:ac.cr) "ley de ciberseguridad"` |
| `..` | **Rango Numérico:** Busca números dentro de un rango específico. Muy útil para precios o fechas. | `cámara de seguridad $100..$250` |

---

## 🔍 Operadores Avanzados Principales

Estos operadores te permiten filtrar los resultados por partes específicas de un sitio web.

| Operador | Descripción | Ejemplo de Uso |
| :--- | :--- | :--- |
| `site:` | Limita la búsqueda a un dominio o sitio web específico. | `site:github.com "react native" filetype:pdf` |
| `filetype:` | Restringe la búsqueda a un tipo de archivo específico. | `guía de seguridad filetype:xlsx` |
| `inurl:` | Busca el término especificado únicamente dentro de la URL. | `inurl:/admin/login.php` |
| `intitle:` | Busca el término especificado únicamente en el título de la página. | `intitle:"Panel de Administración"` |
| `intext:` | Busca el término especificado únicamente en el cuerpo o contenido de la página. | `intext:"Powered by WordPress"` |
| `related:` | Encuentra sitios web similares o relacionados a una URL dada. | `related:amazon.com` |
| `cache:` | Muestra la versión de una página guardada en la caché de Google. | `cache:crhoy.com` |

---

## 📂 Búsqueda Específica de Archivos

Una de las aplicaciones más potentes de los Dorks.
---
### **Documentos Sensibles y de Configuración**

Encontrar archivos de configuración:

```
filetype:env "DB_PASSWORD"
```

Encontrar archivos de log con información sensible:

```
filetype:log "password" inurl:log
```

Encontrar hojas de cálculo con posibles datos de usuarios:

```
filetype:xlsx "usuario" OR "contraseña"
```

Buscar presentaciones internas:

```
filetype:pptx "confidencial" OR "interno"
```

Encontrar posibles backups de bases de datos expuestas:

```
intitle:"index of" "backup.sql"
```
---
### **Archivos de Código Fuente**

Encontrar archivos de configuración de sitios PHP:

```
filetype:ini "wp-config"
```

Buscar scripts de Python que interactúan con APIs:

```
filetype:py "api_key"
```

Encontrar archivos con conexiones a bases de datos:

```
intext:"mysqli_connect" filetype:php
```

---

## 🔐 Dorks para Pentesting y Ciberseguridad

Aquí se muestra el potencial para descubrir vulnerabilidades y puntos de entrada.

### **Encontrar Paneles de Login**

Paneles de administración genéricos:

```
intitle:"login" inurl:/admin
intitle:"admin login"
```

Paneles de CPanel o WHM:

```
inurl:/cpanel
intitle:"cPanel" "Login"
```

Paneles de WordPress:

```
inurl:/wp-admin/
```

---
### **Descubrir Directorios y Archivos Expuestos**

La consulta clásica para encontrar directorios abiertos:

```
intitle:"index of"
```

Buscar directorios de backups:

```
intitle:"index of" /backup
```

Buscar directorios con archivos de configuración:

```
intitle:"index of" /etc/
```

Buscar archivos .env expuestos que contienen credenciales:

```
intitle:"index of" ".env"
```

---
### **Versiones de Software Vulnerable**

Encontrar una versión específica de Apache:

```
intitle:"index of" "Apache/2.4.29 Server at"
```

Buscar sitios que aún usan una versión vulnerable de WordPress:

```
intext:"Powered by WordPress 5.2"
```

Encontrar servidores Jenkins expuestos:

```
intitle:"Dashboard [Jenkins]"
```

---
### **Cámaras IP y Dispositivos IoT**

Encontrar cámaras web con interfaces de control:

```
intitle:"Live View / - AXIS" | inurl:/view/view.shtml
```

Paneles de control de cámaras:

```
intitle:"webcamXP" inurl:8080
```

Paneles de control de impresoras de red:

```
intitle:"EpsonNet Config"
```

---

## 👨‍💻 Dorks para Desarrolladores y Búsqueda de Código

Útiles para encontrar ejemplos, repositorios y soluciones.

Buscar archivos SQL con dumps o esquemas:

```
filetype:sql "CREATE TABLE" "INSERT INTO"
```

Encontrar repositorios de GitHub con código específico:

```
site:github.com inurl:/blob/main "function connectDB()"
```

Buscar hojas de trucos (cheatsheets) en formato PDF:

```
"react hooks" cheatsheet filetype:pdf
```

Encontrar archivos de configuración de Docker:

```
filetype:yml inurl:docker-compose "version:"
```