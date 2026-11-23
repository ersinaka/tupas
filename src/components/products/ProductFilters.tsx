import { categories } from "@/content/categories";

type Props = {
  q?: string;
  category?: string;
  group?: string;
};

export function ProductFilters({ q = "", category = "", group = "" }: Props) {
  const roots = categories.filter((c) => !c.parentSlug);

  return (
    <form
      method="get"
      className="grid gap-4 border border-steel/20 bg-white p-5 md:grid-cols-12"
      role="search"
      aria-label="Ürün arama ve filtre"
    >
      <div className="md:col-span-5">
        <label htmlFor="q" className="mb-2 block text-sm font-medium">
          Arama
        </label>
        <input
          id="q"
          name="q"
          defaultValue={q}
          placeholder="Ürün veya kategori ara"
          className="w-full border border-steel/30 px-3 py-2 text-base"
        />
      </div>
      <div className="md:col-span-4">
        <label htmlFor="kategori" className="mb-2 block text-sm font-medium">
          Kategori
        </label>
        <select
          id="kategori"
          name="kategori"
          defaultValue={category}
          className="w-full border border-steel/30 bg-white px-3 py-2 text-base"
        >
          <option value="">Tümü</option>
          {roots.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="md:col-span-3">
        <label htmlFor="grup" className="mb-2 block text-sm font-medium">
          Grup
        </label>
        <select
          id="grup"
          name="grup"
          defaultValue={group}
          className="w-full border border-steel/30 bg-white px-3 py-2 text-base"
        >
          <option value="">Tümü</option>
          <option value="yangin">Yangın ürünleri</option>
          <option value="sistem">Sistemler</option>
          <option value="is-guvenligi">İş güvenliği</option>
        </select>
      </div>
      <div className="md:col-span-12">
        <button
          type="submit"
          className="bg-crimson px-3 py-2 text-base font-semibold text-white transition-colors hover:bg-[#7a181c]"
        >
          Filtrele
        </button>
      </div>
    </form>
  );
}
