import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";

describe("Heroes Component", () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: "SpiderDude", strength: 8 },
      { id: 2, name: "Wonderful Woman", strength: 24 },
      { id: 3, name: "SuperDude", strength: 55 }
    ];

    // expects HeroService to be injected as a dependency to the constructor
    mockHeroService = jasmine.createSpyObj([
      "getHeroes",
      "addHero",
      "deleteHero"
    ]);
    component = new HeroesComponent(mockHeroService);
  });

  describe("delete", () => {
    it("should remove the indicated hero from the heroes list", () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      //   console.log("component.heroes:", component.heroes);
      //   expect(component.heroes.length).toBe(3);
      //   expect(component.heroes[2].name).toBe("SuperDude");

      component.delete(HEROES[2]);
      //   console.log("component.heroes:", component.heroes);
      expect(component.heroes.length).toBe(2);
      expect(component.heroes[0].name).toBe("SpiderDude");
      expect(component.heroes[1].name).toBe("Wonderful Woman");
      expect(component.heroes[2]).toBe(undefined);
    });
  });

  it("should call deleteHero", () => {
    mockHeroService.deleteHero.and.returnValue(of(true));
    component.heroes = HEROES;

    //   console.log("component.heroes:", component.heroes);
    //   expect(component.heroes.length).toBe(3);
    //   expect(component.heroes[2].name).toBe("SuperDude");

    component.delete(HEROES[2]);

    expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
  });
});
