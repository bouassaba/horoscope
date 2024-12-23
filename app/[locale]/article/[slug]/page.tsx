import type { Metadata } from 'next'
import { capitalCase } from 'change-case'
import { cn } from '@/lib/utils'
import { getCurrentLocale } from '@/locales/server'

type Props = {
  params: { slug: string }
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  return {
    title: capitalCase(slug),
  }
}

export default function SlugPage() {
  const locale = getCurrentLocale()

  return (
    <article className={cn('prose', 'dark:prose-invert')}>
      <h1>Scorpio ({locale})</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Morbi fermentum natoque ad maximus tristique sagittis vivamus congue
        convallis. Ac urna est ac penatibus imperdiet praesent. Aliquet lorem
        fusce placerat molestie lacus. Efficitur et torquent commodo ultrices
        fringilla habitasse. Porttitor mus pharetra euismod litora diam
        hendrerit sapien. Vulputate parturient natoque semper a pretium
        sollicitudin leo. Mus lectus hac mauris mollis commodo purus litora erat
        molestie. Conubia ex placerat netus cursus efficitur eu mollis.
      </p>
      <p>
        Porttitor ante neque in curae; justo lacinia. Consequat duis sociosqu
        dictum mi sagittis pharetra pretium mauris. Tempus dignissim ad
        habitasse pulvinar habitant bibendum nisi ultrices. Lacinia malesuada
        dolor scelerisque natoque pharetra praesent sapien tincidunt venenatis.
        Aliquet nisl congue vivamus etiam mollis. Mollis amet bibendum nascetur
        tincidunt conubia nunc. Mus nibh volutpat habitant potenti sit.
      </p>
      <p>
        Parturient diam faucibus libero lacus per. Adipiscing dignissim congue
        dolor cubilia mi amet. Quis nec gravida posuere elementum tempus maximus
        neque vivamus nisl. Enim consectetur torquent; curae nibh lectus nostra
        nostra. Imperdiet fermentum auctor posuere feugiat tempor ullamcorper
        cubilia maximus feugiat. Class faucibus mauris ante facilisis facilisi.
        Amet neque penatibus tristique iaculis dui volutpat litora. Netus enim
        eleifend est euismod auctor et at consectetur. Orci sed ad tristique
        ligula dignissim hac proin ridiculus tempus.
      </p>
      <p>
        Himenaeos rutrum natoque dignissim metus tellus curae donec sapien
        hendrerit. Lorem venenatis cubilia eros dictum tempus adipiscing lacinia
        congue. Auctor ullamcorper neque rutrum ut arcu auctor est ipsum nec.
        Urna erat magna condimentum porta habitasse. Litora enim maximus lectus
        eu magna tristique ex vitae. Natoque interdum proin conubia etiam
        lacinia porta. Tempor nostra nostra nam viverra purus odio a. Class
        nulla aptent porttitor quam nisl. Dui ut facilisi sociosqu ipsum
        sollicitudin eleifend.
      </p>
      <p>
        Sed consequat erat ultricies quisque litora interdum. Justo mollis
        mattis aliquet felis maecenas morbi maecenas dolor eget. Neque maximus
        feugiat id pretium donec vulputate felis. Sollicitudin neque a massa
        consequat ultricies duis rhoncus sociosqu enim. Faucibus tincidunt
        fringilla ante egestas commodo tortor amet ut lacus. Arcu curae ipsum
        quisque hac netus ullamcorper. Feugiat quam dictum ultricies placerat
        aliquet praesent.
      </p>
      <p>
        Lacus vestibulum erat cubilia ex proin leo pulvinar? Mattis erat
        facilisis odio ipsum posuere iaculis primis inceptos. Varius risus orci
        adipiscing adipiscing rhoncus tortor. Aenean mattis volutpat placerat,
        id torquent quisque. Bibendum mi feugiat finibus ad venenatis? Aenean
        ridiculus porttitor dignissim nunc, odio parturient nam diam. Molestie
        class vel; sem maecenas vitae blandit senectus. Platea consectetur
        auctor vitae magna gravida. Congue enim luctus suspendisse ultricies,
        lobortis in. Ultricies sit rutrum lorem nec et magna.
      </p>
      <p>
        Augue habitasse dui vivamus ultricies nullam quis mus himenaeos nibh.
        Senectus per sem potenti ullamcorper nam sodales faucibus. Hac erat
        gravida in dolor dolor diam, volutpat est dolor. Finibus felis commodo
        montes; imperdiet dictumst ipsum sit volutpat. Et nascetur per sit proin
        inceptos, ligula ante. Ridiculus id montes phasellus faucibus pharetra
        elementum egestas lacinia. Dui felis vestibulum nunc bibendum viverra
        turpis curabitur enim. Ullamcorper eget lorem libero eros rutrum ex.
        Morbi placerat turpis faucibus pellentesque litora hac.
      </p>
      <p>
        Rhoncus dignissim risus, ligula cubilia curabitur ante. Donec cubilia
        lacinia nisi fringilla quisque auctor; bibendum augue. Pulvinar potenti
        efficitur nascetur leo condimentum maximus litora dui. Condimentum
        bibendum himenaeos potenti urna fermentum vivamus vivamus. Fames
        adipiscing suspendisse lorem integer augue hac. Aptent per efficitur
        duis amet taciti condimentum. Condimentum mattis mi ullamcorper
        adipiscing lectus auctor. Habitasse praesent phasellus vestibulum;
        conubia torquent platea per? Massa in amet nisi tellus duis est.
      </p>
      <p>
        Sapien habitant cubilia cursus malesuada ipsum consectetur consectetur.
        Sit condimentum ad taciti sit tempus dignissim. Dis porttitor integer
        primis lacinia sem placerat elementum blandit. Proin posuere ultrices
        rhoncus elementum eget mi mollis interdum. Pulvinar aenean turpis
        senectus malesuada, nisi cursus justo et. Nascetur felis sollicitudin
        leo aliquam donec lorem dapibus. Vehicula etiam eleifend nisi eget ante
        venenatis, tristique elit.
      </p>
    </article>
  )
}
