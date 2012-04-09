package org.atmosphere.tictactoe42a9x;

/**
 * Created by IntelliJ IDEA.
 * User: Jeny
 * Date: 03.04.12
 * Time: 11:10
 * To change this template use File | Settings | File Templates.
 */
public class CellJsonHttpServletRequest extends AbstractJsonHttpServletRequest {

    private Cell body;

//    @Override
    public Cell getBody() {
        return body;
    }

//    @Override
    public void setBody(Cell body) {
        this.body = body;
    }
}
