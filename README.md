
Meet [Fixit](https://dub.sh/fixit-website-readme), an open-source project management tool to track issues, run ~sprints~ cycles, and manage product roadmaps without the chaos of managing the tool itself. 🧘‍♀️

> Fixit is evolving every day. Your suggestions, ideas, and reported bugs help us immensely. Do not hesitate to join in the conversation on [Discord](https://discord.com/invite/A92xrEGCge) or raise a GitHub issue. We read everything and respond to most.

## ⚡ Installation

The easiest way to get started with Fixit is by creating a [Fixit Cloud](https://app.fixit.so) account.

If you would like to self-host Fixit, please see our [deployment guide](https://docs.fixit.so/docker-compose).

`Instance admins` can configure instance settings with [God-mode](https://docs.fixit.so/instance-admin).

## 🚀 Features

- **Issues**: Quickly create issues and add details using a powerful rich text editor that supports file uploads. Add sub-properties and references to problems for better organization and tracking.

- **Cycles**:
  Keep up your team's momentum with Cycles. Gain insights into your project's progress with burn-down charts and other valuable features.

- **Modules**: Break down your large projects into smaller, more manageable modules. Assign modules between teams to track and plan your project's progress easily.

- **Views**: Create custom filters to display only the issues that matter to you. Save and share your filters in just a few clicks.

- **Pages**: Fixit pages, equipped with AI and a rich text editor, let you jot down your thoughts on the fly. Format your text, upload images, hyperlink, or sync your existing ideas into an actionable item or issue.

- **Analytics**: Get insights into all your Fixit data in real-time. Visualize issue data to spot trends, remove blockers, and progress your work.

- **Drive** (_coming soon_): The drive helps you share documents, images, videos, or any other files that make sense to you or your team and align on the problem/solution.

## 🛠️ Quick start for contributors

> Development system must have docker engine installed and running.

Setting up local environment is extremely easy and straight forward. Follow the below step and you will be ready to contribute - 

1. Clone the code locally using:
   ```
   git clone https://github.com/meta-mart/fixit.git
   ```
2. Switch to the code folder:
   ```
   cd fixit
   ```
3. Create your feature or fix branch you plan to work on using:
   ```
   git checkout -b <feature-branch-name>
   ```
4. Open terminal and run:
   ```
   ./setup.sh
   ```
5. Open the code on VSCode or similar equivalent IDE.
6. Review the `.env` files available in various folders.
   Visit [Environment Setup](./ENV_SETUP.md) to know about various environment variables used in system.
7. Run the docker command to initiate services:
   ```
   docker compose -f docker-compose-local.yml up -d
   ```

You are ready to make changes to the code. Do not forget to refresh the browser (in case it does not auto-reload).

## 📸 Screenshots

<p>
    <a href="https://fixit.so" target="_blank">
      <img
        src="https://ik.imagekit.io/w2okwbtu2/Issues_rNZjrGgFl.png?updatedAt=1709298765880"
        alt="Fixit Views"
        width="100%"
      />
    </a>
  </p>
<p>
    <a href="https://fixit.so" target="_blank">
      <img
        src="https://ik.imagekit.io/w2okwbtu2/Cycles_jCDhqmTl9.png?updatedAt=1709298780697"
        width="100%"
      />
    </a>
  </p>
  <p>
    <a href="https://fixit.so" target="_blank">
      <img
        src="https://ik.imagekit.io/w2okwbtu2/Modules_PSCVsbSfI.png?updatedAt=1709298796783"
        alt="Fixit Cycles and Modules"
        width="100%"
      />
    </a>
  </p>
  <p>
    <a href="https://fixit.so" target="_blank">
      <img
        src="https://ik.imagekit.io/w2okwbtu2/Views_uxXsRatS4.png?updatedAt=1709298834522"
        alt="Fixit Analytics"
        width="100%"
      />
    </a>
  </p>
   <p>
    <a href="https://fixit.so" target="_blank">
      <img
        src="https://ik.imagekit.io/w2okwbtu2/Analytics_0o22gLRtp.png?updatedAt=1709298834389"
        alt="Fixit Pages"
        width="100%"
      />
    </a>
  </p>
</p>
   <p>
    <a href="https://fixit.so" target="_blank">
      <img
        src="https://ik.imagekit.io/w2okwbtu2/Drive_LlfeY4xn3.png?updatedAt=1709298837917"
        alt="Fixit Command Menu"
        width="100%"
      />
    </a>
  </p>
</p>
