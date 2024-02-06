import {MksBoiler} from "../boilers/mks";

export class AliceControl {

    /**
     * Интервал между командами
     * @private
     */
    private timeoutBetweenCommand = 2500;

    /**
     * Алиса, включи котел (какой)
     */
    public powerUp(): void {

    }

    /**
     * Алиса, выключи котел (какой)
     */
    public powerDown(): void {

    }

    /**
     * Алиса, что с котлом (каким?)
     * Возвращает текущее состояние котла
     */
    public getState(): void {

    }

    /**
     * ["Алиса, сделай теплее", "Алиса, холодно"]
     * Поднятие уставки температуры котла
     */
    public tempUp(): void {

    }

    /**
     * ["Алиса, сделай похолоднее", "Алиса, жарко"]
     */
    public tempDown(): void {

    }

}
