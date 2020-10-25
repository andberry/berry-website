<template>
    <div id="page" class="flex flex-col min-h-screen">
        <PageHeader />

        <main id="main" class="bg-black text-graylight pt-16 pb-12 xl:pt-48 xl:pb-12 lg:pt-16 lg:pb-0 px-4 overflow-hidden flex-grow md:flex md:items-center">
            <Nuxt />
        </main>

        <PageFooter />
    </div>
</template>
