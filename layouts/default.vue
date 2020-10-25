<template>
    <div id="page" class="flex flex-col min-h-screen">
        <PageHeader />

        <main id="main" class="bg-black text-graylight pt-16 pb-12 lg:pb-0 px-4 overflow-hidden flex-grow md:flex">
            <Nuxt />
        </main>

        <PageFooter />
    </div>
</template>
